import express, { Request, Response, NextFunction } from "express";
import { createCart, getCart } from "../Controllers/cart.controller";

const router = express.Router();

router.post("/cart", createCart);
router.get("/cart", getCart);

export default router;
