import express from "express";
import { createContact, getContactsByUserId } from "../controllers/contacts.js";

const contacts = express.Router();

//Startpunkt /contacts

contacts.route("/").post(createContact)
contacts.route("/:userId").get(getContactsByUserId)


export default contacts;
