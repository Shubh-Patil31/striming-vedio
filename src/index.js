import dotenv from "dotenv";
import connectDB from "./db/index.js";
import express from "express"; // Assuming you're using Express

dotenv.config({ path: "./env" });

const app = express(); // Create an instance of Express

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at port: ${process.env.PORT || 8000}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB connection failed!!!", err);
  });

app.on("error", (error) => {
  console.log("Error:", error);
  throw error;
});
