import app from "../app.js";
import connectDB from "../config/db.js";
import dotenv from "dotenv";

dotenv.config();

// Connect to MongoDB once
connectDB();

export default async function handler(req, res) {
  app(req, res);
}
