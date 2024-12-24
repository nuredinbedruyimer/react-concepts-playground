import express from "express";
import dotenv from "dotenv";
import { add } from "add.js";
import { PRICE_PROCESSING } from "utils/constants/constant.js";
import { getTotalPrice } from "helpers/index.js";

dotenv.config();

console.log("Total Price : ", getTotalPrice());
console.log("Message : ", PRICE_PROCESSING);

const app = express();

// Middleware
app.use(express.json());
// Root route
app.get("/", (req, res) => {
  res.send("Welcome to Express + TypeScript Server!");
});

// Example endpoint
app.get("/api", (req, res) => {
  res.json({ message: "API is working!" });
});
let result = add(20, 30);

// Start the server
const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log(`Server running on port ${result}`);
});
