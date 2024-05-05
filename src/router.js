import { Router } from "express";
import { login, register, updateProfile, getProfile } from "./controllers/user.controller.js";
import {
  createEvent,
  getEventByUserId,
  getEvent,
  updateEvent,
  deleteEvent,
} from "./controllers/event.controller.js";

import {
  createEventTemplate,
  getAllEventTemplates,
  getEventTemplate,
  updateEventTemplate,
  deleteEventTemplate,
} from "./controllers/event-template.controller.js";

import {
  createObject,
  getAllObjects,
  getObject,
  updateObject,
  deleteObject,
} from "./controllers/object-library.controller.js";
import { authenticateToken } from "./middlwares/jwt-verify.js";
const router = Router();

/* User */
router.post("/user/register", register);
router.post("/user/login", login);
router.patch("/user/profile", authenticateToken, updateProfile);
router.get("/user/profile/:id", authenticateToken, getProfile);

/* Event */
router.post("/event", authenticateToken, createEvent);
router.get("/event", authenticateToken, getEventByUserId);
router.get("/event/:eventId", authenticateToken, getEvent);
router.put("/event/:eventId", authenticateToken, updateEvent);
router.delete("/event/:eventId", authenticateToken, deleteEvent);

/* Event Template */
router.post("/event-template", authenticateToken, createEventTemplate);
router.get("/event-template", authenticateToken, getAllEventTemplates);
router.get("/event-template/:eventTemplateId", authenticateToken, getEventTemplate);
router.put("/event-template/:eventTemplateId", authenticateToken, updateEventTemplate);
router.delete("/event-template/:eventTemplateId", authenticateToken, deleteEventTemplate);

/* Object Library */
router.post("/object-library", authenticateToken, createObject);
router.get("/object-library", authenticateToken, getAllObjects);
router.get("/object-library/:objectId", authenticateToken, getObject);
router.put("/object-library/:objectId", authenticateToken, updateObject);
router.delete("/object-library/:objectId", authenticateToken, deleteObject);

export default router;
