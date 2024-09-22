import express, { Request, Response, NextFunction } from "express";
import { createOrder, getOrderById, getOrdersByUserId } from "../Controllers/order.controller";

const router = express.Router();

router.post("/order", createOrder);
router.get("/orders", getOrdersByUserId);
router.get("/order", getOrderById);

export default router;
