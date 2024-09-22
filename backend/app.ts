import express, { Request, Response, NextFunction } from "express";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import usersRouter from "./Routes/users.routes";
import categoryRouter from "./Routes/productCategory.router";
import cartRouter from "./Routes/cart.routes";
import cartItemRouter from "./Routes/cartItem.routes";
import orderRouter from "./Routes/order.routes";
import orderItemRouter from "./Routes/orderItem.routes";
import paymentRouter from "./Routes/payment.routes";
import paymentStatusRouter from "./Routes/paymentStatus.routes";
import productRouter from "./Routes/product.routes";
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
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200')
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PUT, PATCH, DELETE, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Option, Authorization')
  res.setHeader('Access-Control-Allow-Credentials', 'true'); 
  return next()
});
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
  app.use("/", categoryRouter);
  app.use("/", cartRouter);
  app.use("/", cartItemRouter);
  app.use("/", orderRouter);
  app.use("/", orderItemRouter);
  app.use("/", paymentRouter);
  app.use("/", paymentStatusRouter);
  app.use("/", productRouter);

  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
};

startServer();
