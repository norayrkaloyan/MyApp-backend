import express from "express";
import { createEvent, deleteEvent, getEventsByUserId } from "../controllers/events.js";

const events = express.Router();

//Startpunkt /contacts

events.route("/").post(createEvent)
events.route("/:userId").get(getEventsByUserId)
events.route("/delete/:eventId").delete(deleteEvent)


export default events;
