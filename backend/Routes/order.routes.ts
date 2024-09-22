import express, { Request, Response, NextFunction } from "express";
import { createOrder, getOrdersByUserId } from "../Controllers/order.controller";

const router = express.Router();

router.post("/order", createOrder);
router.get("/orders", getOrdersByUserId);

export default router;
