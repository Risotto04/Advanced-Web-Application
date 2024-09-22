import express, { Request, Response, NextFunction } from "express";
import { getPaymentStatus } from "../Controllers/paymentStautus.controller";

const router = express.Router();

router.get("/paymentStatus", getPaymentStatus);

export default router;
