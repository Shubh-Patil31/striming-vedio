// import dotenv from "dotenv";
// import connectDB from "./db/index.js";
// import express from "express";

// dotenv.config({ path: "./.env" });

// const app = express(); // Create an instance of Express

// connectDB()
//   .then(() => {
//     app.listen(process.env.PORT || 8000, () => {
//       console.log(`Server is running at port: ${process.env.PORT || 8000}`);
//     });
//   })
//   .catch((err) => {
//     console.log("MongoDB connection failed!!!", err);
//   });

// app.on("error", (error) => {
//   console.log("Error:", error);
//   throw error;
// });

import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({ path: "./.env" });

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
