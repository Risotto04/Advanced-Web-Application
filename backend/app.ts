import express, { Request, Response, NextFunction } from "express";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import usersRouter from "./Routes/users.routes";
import middleware from "./Middleware/middleware";

dotenv.config();

const { PORT, MONGO_URL } = process.env;

if (!PORT || !MONGO_URL) {
  console.error("Missing environment variables: PORT or MONGO_URL.");
  process.exit(1);
}

const MONGO_CONFIG = {
  autoIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const app = express();

app.use(express.json());
app.use(cookieParser());

const connectToDatabase = async () => {
  try {
    await mongoose.connect(MONGO_URL, MONGO_CONFIG);
    console.log("Connected to MongoDB...");
  } catch (error) {
    console.error("Cannot connect to MongoDB:", error);
    process.exit(1);
  }
};

const startServer = async () => {
  await connectToDatabase();

  app.use("/", usersRouter);

  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
};

startServer();
