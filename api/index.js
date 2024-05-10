import express from "express";
import userRouter from "./routes/user.router.js"
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("connected to mongDB");
  })
  .catch((err) => {
    console.log("error");
  });
const app = express();

app.listen(3000, () => {
  console.log("server is running on port 3000");
});

app.use("/api/user", userRouter)

