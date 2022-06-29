import mongoose from "mongoose";
const { Schema, model } = mongoose;

const noteSchema = new Schema({
  user_id: { type: String, required: true },
  title: { type: String, required: false },
  description: { type: String, required: false },
});

export default model("Note", noteSchema);
