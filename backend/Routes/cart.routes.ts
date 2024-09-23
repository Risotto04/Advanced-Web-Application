import express, { Request, Response, NextFunction } from "express";
import { createCart, getCartByUserId } from "../Controllers/cart.controller";

const router = express.Router();

// router.post("/cart", createCart);
router.get("/cart", getCartByUserId);

export default router;
