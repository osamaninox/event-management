import { Schema, model } from "mongoose";

const objectLibrarySchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  design: {
    type: Object,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  }
});

export const ObjectLibrary = model("ObjectLibrary", objectLibrarySchema);
