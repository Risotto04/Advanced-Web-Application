import express, { Request, Response, NextFunction } from "express";
import { getProducts, getProductsByCategory } from "../Controllers/product.controller";

const router = express.Router();

router.get("/products", getProducts);
router.get("/products", getProductsByCategory);

export default router;
