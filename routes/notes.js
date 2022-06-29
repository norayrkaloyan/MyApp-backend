import express from "express";
import {
  createNote,
  deleteNote,
  getNotesByUserId,
} from "../controllers/notes.js";

const notes = express.Router();

//Startpunkt /contacts

notes.route("/").post(createNote);
notes.route("/:userId").get(getNotesByUserId);
notes.route("/delete/:noteId").delete(deleteNote);

export default notes;
