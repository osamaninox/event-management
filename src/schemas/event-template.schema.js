import { Schema, model } from "mongoose";

const eventTemplateSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  design: {
    type: Object,
    required: true,
  },
  price: { type: Number, required: true },
});

export const EventTemplate = model("EventTemplate", eventTemplateSchema);
