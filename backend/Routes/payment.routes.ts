import express, { Request, Response, NextFunction } from "express";
import { createPayment, getPaymentByOrderId } from "../Controllers/payment.controller";

const router = express.Router();

router.post("/payment", createPayment);
router.get("/payment", getPaymentByOrderId);

export default router;
