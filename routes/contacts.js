import express from "express";
import { createContact, deleteContact, getContactsByUserId } from "../controllers/contacts.js";

const contacts = express.Router();

//Startpunkt /contacts

contacts.route("/").post(createContact)
contacts.route("/:userId").get(getContactsByUserId)
contacts.route("/delete/:contactId").delete(deleteContact)


export default contacts;
