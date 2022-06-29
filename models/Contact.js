import mongoose from "mongoose";
const { Schema, model } = mongoose;

const contactSchema = new Schema({
  user_id: { type: String, required: true },
  name: { type: String, required: true },
  address: { type: String, required: false },
  zip: { type: Number, required: false },
  tel: { type: Number, required: false },
  email: { type: String, required: false },
  about: { type: String, required: false },
});

export default model("Contact", contactSchema);
