import { User } from "../schemas/user.schema.js";
import jwt from "jsonwebtoken";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function login(req, res, next) {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ email: email }).lean();

    // Check if user exists and password matches (for simplicity, not recommended in production)
    if (user && user.password === password) {
      // Create a JWT token
      const token = jwt.sign(
        { email: user.email, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: "7d" }
      );
      Object.assign(user, { token });
      return res.status(200).json({ message: "Login successful", user });
    }

    res.status(401).json({ message: "Invalid credentials" });
  } catch (err) {
    res
      .status(500)
      .json({ message: `Something went wrong ${JSON.stringify(err)}` });
  }
}

export async function register(req, res, next) {
  try {
    const { email, password, name, contactNumber, active, role } = req.body;

    const userWithEmailAlreadyExists = await User.exists({ email: email });
    if (userWithEmailAlreadyExists) {
      return res
        .status(400)
        .json({ message: "User with email already exists" });
    }

    const newUser = { email, password, name, contactNumber, active, role };
    const createdUser = await User.create(newUser);
    if (req.body.fileBase64) {
      createdUser.imagePath = saveFileFromBase64(
        req.body.fileBase64,
        createdUser.id.toString()
      );
      await createdUser.save();
    }
    res
      .status(201)
      .json({ message: "User registered successfully", user: newUser });
  } catch (err) {
    res
      .status(500)
      .json({ message: `Something went wrong ${JSON.stringify(err)}` });
  }
}

export async function updateProfile(req, res, next) {
  try {
    const { id } = req.params;

    const updatedUser = await User.findByIdAndUpdate(id, req.body);
    if (req.body.fileBase64) {
      if (updatedUser.imagePath) fs.unlinkSync(updatedUser.imagePath);
      updatedUser.imagePath = saveFileFromBase64(
        req.body.fileBase64,
        updatedUser._id.toString()
      );
      await updatedUser.save();
    }
    res.status(200).json(updatedUser);
  } catch (err) {
    res
      .status(500)
      .json({ message: `Something went wrong ${JSON.stringify(err)}` });
  }
}

export async function getProfile(req, res, next) {
  const { id } = req.params;
  try {
    const user = await User.findById(id).lean();
    if (!user) {
      return res.status(400).json({ message: "Invalid user id" });
    }
    if (user.imagePath) user.file = await readFileAsBase64(user.imagePath);
    res.status(200).json(user);
  } catch (err) {
    res
      .status(500)
      .json({ message: `Something went wrong ${JSON.stringify(err)}` });
  }
}

export async function getAllUsers(req, res, next) {
  try {
    let users = await User.find().lean();
    users = await Promise.all(
      users.map(async (user) => {
        if (user.imagePath) user.file = await readFileAsBase64(user.imagePath);
        return user;
      })
    );
    res.status(200).json(users);
  } catch (err) {
    res
      .status(500)
      .json({ message: `Something went wrong ${JSON.stringify(err)}` });
  }
}
export async function deleteUser(req, res) {
  try {
    const user = await User.findByIdAndDelete(req.params.userId);
    if (!user) {
      return res.status(404).send();
    }
    res.send(user);
  } catch (err) {
    res
      .status(500)
      .json({ message: `Something went wrong ${JSON.stringify(err)}` });
  }
}

function saveFileFromBase64(base64, fileName) {
  // Split the base64 string in data and contentType
  const block = base64.split(";");
  // Get the content type
  const contentType = block[0].split(":")[1]; // In this case "image/gif"
  // get the real base64 content of the file
  const realData = block[1].split(",")[1]; // In this case "R0lGODlhPQBEAPeoAJosM...."

  const extension = contentType.split("/")[1];
  // Convert it to a buffer
  const buffer = Buffer.from(realData, "base64");

  // Define the output path
  const dir = path.join(__dirname, "/user/");
  const outputPath = path.join(dir, fileName + "." + extension);

  // Create the directory if it does not exist
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  // Write the file
  fs.writeFileSync(outputPath, buffer);
  return outputPath;
}

async function readFileAsBase64(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, { encoding: "base64" }, (err, data) => {
      if (err) {
        reject(err);
      } else {
        // Get the file extension
        const extension = path.extname(filePath).substring(1);
        // Prepend the data URL scheme
        const base64 = `data:image/${extension};base64,${data}`;
        resolve(base64);
      }
    });
  });
}
