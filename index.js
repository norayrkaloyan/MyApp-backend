import "dotenv/config.js";
import express from "express";
import "./db/mongoose.js";
import protectedRoute from "./routes/protectedRoutes.js";
import users from "./routes/users.js";
import contacts from "./routes/contacts.js";
import cors from "cors";

const app = express();
const port = process.env.PORT || 5000;

const corsOptions = {
  origin: process.env.REACT_APP_URI, // nur Zugriff von dieser Domain erlauben
  exposedHeaders: "Authorization", //dem Frontend Zugriff auf die Header-Property "Authorization" geben
};

app.use(cors(corsOptions));
app.use(express.json());
app.use("/user", users);
app.use("/info", protectedRoute);
app.use("/contacts", contacts);

app.get("/", (req, res, next) => {
  res.send("Your API is here!");
});

app.listen(port, () => console.log(`Server listening on port ${port}`));
