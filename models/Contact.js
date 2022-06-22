import mongoose from "mongoose";
const { Schema, model } = mongoose;

const contactSchema = new Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  zip: { type: Number, required: true },
  tel: { type: Number, required: false },
  email: { type: String, required: false },
});

export default model("Contact", contactSchema);
