import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
// --------------------------------
const app = express();
dotenv.config;
// const connect = {
//     mongoose.connect("")
// };
// --------------------------------

app.listen(8800, () => {
  console.log("Connected!");
});
