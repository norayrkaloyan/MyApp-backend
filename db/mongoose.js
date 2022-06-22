import mongoose from "mongoose";

try {
  mongoose.connect(process.env.MONGO_URI);
  console.log("DB connected");
} catch (err) {
  console.log(err);
}
