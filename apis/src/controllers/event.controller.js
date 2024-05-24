import { Event } from "../schemas/event.schema.js";

export async function createEvent(req, res) {
  try {
    const event = new Event(req.body);
    await event.save();
    res.status(201).send(event);
  } catch (err) {
    res.status(400).send(`Something went wrong ${JSON.stringify(err)}`);
  }
}

export async function getEventByUserId(req, res) {
  try {
    const events = await Event.find({ userId: req.query.userId });
    res.send(events);
  } catch (err) {
    res.status(400).send(`Something went wrong ${JSON.stringify(err)}`);
  }
}

export async function getAllEvents(req, res) {
  try {
    const events = await Event.find();
    res.send(events);
  } catch (err) {
    res.status(400).send(`Something went wrong ${JSON.stringify(err)}`);
  }
}

export async function getEvent(req, res) {
  try {
    const event = await Event.findById(req.params.eventId);
    if (!event) {
      return res.status(404).send();
    }
    res.send(event);
  } catch (err) {
    res.status(400).send(`Something went wrong ${JSON.stringify(err)}`);
  }
}

export async function updateEvent(req, res) {
  try {
    const event = await Event.findByIdAndUpdate(req.params.eventId, req.body, {
      new: true,
    });
    if (!event) {
      return res.status(404).send();
    }
    res.send(event);
  } catch (err) {
    res.status(400).send(`Something went wrong ${JSON.stringify(err)}`);
  }
}

// export async function updateEvent(req, res, next) {

//   const { _id } = req.body;
//   const {  name, amount } = req.body;
//   let update_params = {};
//   if(name){
//     update_params.name = name;
//   }
//    if(amount){
//     update_params.role = amount;

//   }
//   // if(img){
//   //   const fileName = uploadImage(img);
//   //   update_params.img = fileName;
//   // }
//   const updatedEvent = await Event.findByIdAndUpdate(
//     { _id },
//     update_params
//   ).lean();
//   res.status(200).json(updatedEvent);
// }

export async function deleteEvent(req, res) {
  const event = await Event.findByIdAndDelete(req.params.eventId);
  if (!event) {
    return res.status(404).send();
  }
  res.send(event);
}
