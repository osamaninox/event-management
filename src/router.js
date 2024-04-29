import { Router } from "express";
import { login, register } from "./controllers/user.controller";
import {
  createEvent,
  getEventByUserId,
  getEvent,
  updateEvent,
  deleteEvent,
} from "./controllers/event.controller";

import {
  createEventTemplate,
  getAllEventTemplates,
  getEventTemplate,
  updateEventTemplate,
  deleteEventTemplate,
} from "./controllers/event-template.controller";

import {
  createObject,
  getAllObjects,
  getObject,
  updateObject,
  deleteObject,
} from "./controllers/object-library.controller";
const router = Router();

/* User */
router.post("/user/register", register);
router.post("/user/login", login);

/* Event */
router.post("/event", createEvent);
router.get("/event", getEventByUserId);
router.get("/event/:eventId", getEvent);
router.put("/event/:eventId", updateEvent);
router.delete("/event/:eventId", deleteEvent);

/* Event Template */
router.post("/event-template", createEventTemplate);
router.get("/event-template", getAllEventTemplates);
router.get("/event-template/:eventTemplateId", getEventTemplate);
router.put("/event-template/:eventTemplateId", updateEventTemplate);
router.delete("/event-template/:eventTemplateId", deleteEventTemplate);

/* Object Library */
router.post("/object-library", createObject);
router.get("/object-library", getAllObjects);
router.get("/object-library/:objectId", getObject);
router.put("/object-library/:objectId", updateObject);
router.delete("/object-library/:objectId", deleteObject);

export default router;
