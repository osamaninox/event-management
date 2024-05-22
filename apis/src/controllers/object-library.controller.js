import { ObjectLibrary } from "../schemas/object-library.schema.js";

export async function createObject(req, res) {
  const object = new ObjectLibrary(req.body);
  await object.save();
  res.status(201).send(object);
}

export async function getAllObjects(req, res) {
  const objects = await ObjectLibrary.find();
  res.send(objects);
}

export async function getObject(req, res) {
  const object = await ObjectLibrary.findById(req.params.objectId);
  if (!object) {
    return res.status(404).send();
  }
  res.send(object);
}

export async function updateObject(req, res) {
  const object = await ObjectLibrary.findByIdAndUpdate(req.params.object_Id, req.body, {
    new: true,
  });
  if (!object) {
    return res.status(404).send();
  }
  res.send(object);
}

export async function deleteObject(req, res) {
  const object = await ObjectLibrary.findByIdAndDelete(req.params.objectId);
  if (!object) {
    return res.status(404).send();
  }
  res.send(object);
}
