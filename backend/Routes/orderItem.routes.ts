import express, { Request, Response, NextFunction } from "express";
import { createOrderItem, getOrderItemsByOrderId } from "../Controllers/orderItem.controller";

const router = express.Router();

router.post("/orderItem", createOrderItem);
router.get("/orderItems", getOrderItemsByOrderId);

export default router;
