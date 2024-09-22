import express, { Request, Response, NextFunction } from "express";
import { getProductById, getProductsByCategoryId } from "../Controllers/product.controller";

const router = express.Router();

router.get("/products", getProductsByCategoryId);
router.get("/products/:category", getProductsByCategoryId);
router.get("/product/:product_id", getProductById); 

export default router;
