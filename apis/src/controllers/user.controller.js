import { User } from "../schemas/user.schema.js";
import jwt from "jsonwebtoken";
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function login(req, res, next) {
  const { email, password } = req.body;

  // Find user by email
  const user = await User.findOne({ email: email }).lean();

  // Check if user exists and password matches (for simplicity, not recommended in production)
  if (user && user.password === password) {
    // Create a JWT token
    const token = jwt.sign(
      { email: user.email, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "24h" }
    );
    Object.assign(user, { token });
    return res.status(200).json({ message: "Login successful", user });
  }

  res.status(401).json({ message: "Invalid credentials" });
}

export async function register(req, res, next) {
  const { email, password, name, contactNumber } = req.body;

  const userWithEmailAlreadyExists = await User.exists({ email: email });
  if (userWithEmailAlreadyExists) {
    return res.status(400).json({ message: "User with email already exists" });
  }

  const newUser = { email, password, name, contactNumber };
  await User.create(newUser);

  res
    .status(201)
    .json({ message: "User registered successfully", user: newUser });
}

export async function updateProfile(req, res, next) {
  const { id } = req.params;
  const { email, password, name, contactNumber } = req.body;

  const updatedUser = await User.findByIdAndUpdate(
    { id },
    { email, password, name, contactNumber }
  ).lean();
  res.status(200).json(updatedUser);
}
export async function updateUser(req, res, next) {

  const { _id } = req.body;
  const {  name, role, img } = req.body;
  let update_params = {};
  if(name){
    update_params.name = name;
  }
   if(role){
    update_params.role = role;

  }
  // if(img){
  //   const fileName = uploadImage(img);
  //   update_params.img = fileName;
  // }
  const updatedUser = await User.findByIdAndUpdate(
    { _id },
    update_params
  ).lean();
  res.status(200).json(updatedUser);
}

export async function getProfile(req, res, next) {
  const { id } = req.params;
  try {
    const user = await User.findById(id).lean();
    if (!user) {
      return res.status(400).json({ message: "Invalid user id" });
    }
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json({ message: "Something went wrong" });
  }
}

export async function getAllUsers(req, res, next) {
  const users = await User.find().lean();
  res.status(200).json(users);
}
export async function deleteUser(req, res) {
  const user = await User.findByIdAndDelete(req.params.userId);
  if (!user) {
    return res.status(404).send();
  }
  res.send(user);
}
// export async function uploadImage(base64String){
//   // const { base64String } = req.body;

//   // Validate base64String
//   if (!base64String) {
//     // return res.status(400).send('No Base64 string provided.');
//     throw new Exception ('No Base64 string provided.') 
//   }

//   // Extract image type
//   const matches = base64String.match(/^data:image\/([a-zA-Z]+);base64,(.+)$/);
//   if (!matches || matches.length !== 3) {
//     // return res.status(400).send('Invalid Base64 string.');
//     throw new Error ('invalid Base64 string provided.') 
//   }

//   const ext = matches[1];
//   const data = matches[2];
//   const buffer = Buffer.from(data, 'base64');
//   const fileName = `${(new Date).toUTCString()}-image.${ext}`;
//   const filePath = path.join(__dirname, "..", "..", "images" , fileName);
//   console.log(filePath );
//   // Save the file
//   fs.writeFile(filePath, buffer, (err) => {
//     if (err) {
//       // return res.status(500).send('Failed to save the image.');
//       throw new Error ('Failed to save the image.'+ err.message ) 
//     }
//     // res.send(`Image saved successfully as ${fileName}`);
//     return fileName;
//   });
// }