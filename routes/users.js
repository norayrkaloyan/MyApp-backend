import express from "express";
import { logIn, signUp, verifySession } from "../controllers/users.js";
import { verifyToken } from "../middleware/verifyToken.js";
const users = express.Router();

users.post("/signup", signUp);
users.post("/login", logIn);
users.get("/verify", verifyToken, verifySession)

export default users;
