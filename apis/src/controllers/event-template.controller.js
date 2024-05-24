import { EventTemplate } from "../schemas/event-template.schema.js";

export async function createEventTemplate(req, res) {
  try {
    const eventTemplate = new EventTemplate(req.body);
    await eventTemplate.save();
    res.status(201).send(eventTemplate);
  } catch (err) {
    res.status(500).send(`Something went wrong ${JSON.stringify(err)}`);
  }
}

export async function getAllEventTemplates(req, res) {
  try {
    const eventTemplates = await EventTemplate.find();
    res.send(eventTemplates);
  } catch (err) {
    res.status(500).send(`Something went wrong ${JSON.stringify(err)}`);
  }
}

export async function getEventTemplate(req, res) {
  try {
    const eventTemplate = await EventTemplate.findById(
      req.params.eventTemplateId
    );
    if (!eventTemplate) {
      return res.status(404).send();
    }
    res.send(eventTemplate);
  } catch (err) {
    res.status(500).send(`Something went wrong ${JSON.stringify(err)}`);
  }
}

export async function updateEventTemplate(req, res) {
  try {
    const eventTemplate = await EventTemplate.findByIdAndUpdate(
      req.params.eventTemplateId,
      req.body,
      {
        new: true,
      }
    );
    if (!eventTemplate) {
      return res.status(404).send();
    }
    res.send(eventTemplate);
  } catch (err) {
    res.status(500).send(`Something went wrong ${JSON.stringify(err)}`);
  }
}

export async function deleteEventTemplate(req, res) {
  try {
    const eventTemplate = await EventTemplate.findByIdAndDelete(
      req.params.eventTemplateId
    );
    if (!eventTemplate) {
      return res.status(404).send();
    }
    res.send(eventTemplate);
  } catch (err) {
    res.status(500).send(`Something went wrong ${JSON.stringify(err)}`);
  }
}
