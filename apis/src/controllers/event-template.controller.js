import { EventTemplate } from "../schemas/event-template.schema.js";

export async function createEventTemplate(req, res) {
  const eventTemplate = new EventTemplate(req.body);
  await eventTemplate.save();
  res.status(201).send(eventTemplate);
}

export async function getAllEventTemplates(req, res) {
  const eventTemplates = await EventTemplate.find();
  res.send(eventTemplates);
}

export async function getEventTemplate(req, res) {
  const eventTemplate = await EventTemplate.findById(req.params.eventTemplateId);
  if (!eventTemplate) {
    return res.status(404).send();
  }
  res.send(eventTemplate);
}

export async function updateEventTemplate(req, res) {
  const eventTemplate = await EventTemplate.findByIdAndUpdate(req.params.eventTemplateId, req.body, {
    new: true,
  });
  if (!eventTemplate) {
    return res.status(404).send();
  }
  res.send(eventTemplate);
}

export async function deleteEventTemplate(req, res) {
  const eventTemplate = await EventTemplate.findByIdAndDelete(req.params.eventTemplateId);
  if (!eventTemplate) {
    return res.status(404).send();
  }
  res.send(eventTemplate);
}
