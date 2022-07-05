import mongoose from "mongoose";
const { Schema, model } = mongoose;

const eventSchema = new Schema({
  user_id: { type: String, required: true },
  title: { type: String, required: true },
  address: { type: String, required: false },
  zip: { type: Number, required: false },
  name: { type: String, required: false },
  tel: { type: Number, required: false },
  email: { type: String, required: false },
  about: { type: String, required: false },
  datum: { type: String, required: false },
  // ending:{type:String,required:false},
});

export default model("Event", eventSchema);
