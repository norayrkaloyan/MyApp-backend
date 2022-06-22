import express from "express";
import { createContact,getContacts } from "../controllers/contacts.js";

const contacts = express.Router();

contacts.post("/createcontact", createContact);
contacts.get("/contacts",getContacts);

export default contacts;
