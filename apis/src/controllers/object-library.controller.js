import { ObjectLibrary } from "../schemas/object-library.schema.js";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export async function createObject(req, res) {
  try {
    const { title, price, type } = req.body;
    const object = new ObjectLibrary({ title, price, type });
    if (!req.body.fileBase64) {
      res.status(400).send("File is required");
    }
    object.filePath = saveFileFromBase64(
      req.body.fileBase64,
      object._id.toString()
    );
    await object.save();
    res.status(201).send(object);
  } catch (err) {
    res.status(400).send(`Something went wrong ${JSON.stringify(err)}`);
  }
}

export async function getAllObjects(req, res) {
  try {
    let objects = await ObjectLibrary.find().lean();
    objects = await Promise.all(
      objects.map(async (object) => {
        object.file = await readFileAsBase64(object.filePath);
        return object;
      })
    );
    res.send(objects);
  } catch (err) {
    res.status(400).send(`Something went wrong ${JSON.stringify(err)}`);
  }
}

export async function getObject(req, res) {
  try {
    const object = await ObjectLibrary.findById(req.params.objectId);
    if (!object) {
      return res.status(404).send();
    }
    object.file = await readFileAsBase64(object.filePath);
    res.send(object);
  } catch (err) {
    res.status(400).send(`Something went wrong ${JSON.stringify(err)}`);
  }
}

export async function updateObject(req, res) {
  try {
    const object = await ObjectLibrary.findByIdAndUpdate(
      req.params.objectId,
      req.body,
      {
        new: true,
      }
    );
    if (!object) {
      return res.status(404).send();
    }
    if (req.body.fileBase64) {
      // Remove existing file
      fs.unlinkSync(object.filePath);
      object.filePath = saveFileFromBase64(
        req.body.fileBase64,
        object._id.toString()
      );
      await object.save();
    }
    res.send(object);
  } catch (err) {
    res.status(400).send(`Something went wrong ${JSON.stringify(err)}`);
  }
}

export async function deleteObject(req, res) {
  try {
    const object = await ObjectLibrary.findByIdAndDelete(req.params.objectId);
    if (!object) {
      return res.status(404).send();
    }
    fs.unlinkSync(object.filePath);
    res.send(object);
  } catch (err) {
    res.status(400).send(`Something went wrong ${JSON.stringify(err)}`);
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
  const dir = path.join(__dirname, "/objects/");
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
