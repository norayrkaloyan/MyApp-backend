import Note from "../models/Note.js";

export const createNote = async (req, res) => {
  try {
    const { user_id, title, description } = req.body;
    //neu Contact in die DB schreiben
    const newNote = await Note.create({
      user_id,
      title,
      description,
    });

    if (newNote) {
      res.status(201).send("Note successfully created");
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteNote = async (req, res) => {
  try {
    const { noteId } = req.params;
    const notes = await Note.findOneAndDelete({ _id: noteId });
    const userId = notes.user_id;
    const allNotes = await Note.find({ user_id: userId });
    res.status(200).json(allNotes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
export const getNotesByUserId = async (req, res) => {
  try {
    //die userId aus den params abholen
    //mongodb abfragen mit find in der contacts collection wo userId = userId
    const { userId } = req.params;
    const result = await Note.find({ user_id: userId });
    //den Fall behandeln, dass User noch keine Kontakte hat
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
