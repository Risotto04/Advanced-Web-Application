import express, { Request, Response, NextFunction } from "express";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import usersRouter from "./Routes/users.routes";

const PORT = process.env.PORT || 3001;
const URL = "mongodb://localhost:27017/mydb";
const CONFIG = {
  autoIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const app = express();
app.use(express.json());
app.use(cookieParser());

const connectToDatabase = async () => {
  try {
    await mongoose.connect(URL, CONFIG);
    console.log("Connected to MongoDB...");
  } catch (err) {
    console.error("Cannot connect to MongoDB", err);
    process.exit(1);
  }
};

connectToDatabase().then(() => {
  app.use("/", usersRouter);

  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
});
