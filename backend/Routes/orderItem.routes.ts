import express, { Request, Response, NextFunction } from "express";
import { createOrderItem, getOrderItemsByUserId } from "../Controllers/orderItem.controller";

const router = express.Router();

router.post("/orderItem", createOrderItem);
router.get("/orderItems", getOrderItemsByUserId);

export default router;
