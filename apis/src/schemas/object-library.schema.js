import { Schema, model } from "mongoose";

const objectLibrarySchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  filePath: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
});

export const ObjectLibrary = model("ObjectLibrary", objectLibrarySchema);
