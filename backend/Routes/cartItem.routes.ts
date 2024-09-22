import express, { Request, Response, NextFunction } from "express";
import { createCartItem, getCartItemsByUserId } from "../Controllers/cartItem.controller";

const router = express.Router();

router.post("/cartItem", createCartItem);
router.get("/cartItems", getCartItemsByUserId);

export default router;
