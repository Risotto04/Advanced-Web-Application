import express, { Request, Response, NextFunction } from "express";
import { createPayment } from "../Controllers/payment.controller";
import authMiddleware from "../Middleware/middleware";

const router = express.Router();

router.post("/payment", authMiddleware, createPayment);
// router.get("/payment", getPaymentByOrderId);

export default router;
