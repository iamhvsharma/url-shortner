import express from "express";

const app = express();

app.listen(3000, () => {
  console.log("Server is running on port http://localhost:3000");
});
 

// Sample Route
app.get("/health", (req, res) => {
  res.send("Health check successful!");
});


// GET - Redirection 
// POST - Create a short URL 