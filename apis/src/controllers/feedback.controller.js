import { Event } from "../schemas/event.schema.js";
import { Feedback } from "../schemas/feedback.schema.js";

export async function createFeedback(req, res) {
  try {
    const feedback = new Feedback(req.body);
    await feedback.save();
    res.status(201).send(feedback);
  } catch (err) {
    res.status(400).send(`Something went wrong ${JSON.stringify(err)}`);
  }
}

export async function getAllFeedbacks(req, res) {
  try {
    const feedbacks = await Feedback.find().lean();
    res.send(feedbacks);
  } catch (err) {
    res.status(400).send(`Something went wrong ${JSON.stringify(err)}`);
  }
}
