import express from "express";
import { nanoid } from "nanoid";
import connectDB from "./src/config/db.config.js";
import dotenv from "dotenv";
dotenv.config();

// Creating an Express application
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(3000, () => {
  console.log("Server is running on port http://localhost:3000");
});

// Sample Route
app.get("/health", (req, res) => {
  res.send("Health check successful!");
});

// GET - Redirection
// POST - Create a short URL

app.post("/api/create", (req, res) => {
  const { url } = req.body;
  console.log("Received URL:", url);
  res.send(nanoid(7));
});
