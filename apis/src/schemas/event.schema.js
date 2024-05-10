import { Schema, model } from "mongoose";

const eventSchema = new Schema({
  userId: {
    type: String,
    required: true,
    ref: "User",
  },
  date: { type: Date, default: Date.now, required: true },
  title: {
    type: String,
    required: true,
  },
  design: {
    type: Object,
    required: true,
  },
  totalAmount: {
    type: Number,
    required: true,
  }
});

export const Event = model("Event", eventSchema);
