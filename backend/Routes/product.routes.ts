import express, { Request, Response, NextFunction } from "express";
import {
  getProductById,
  getProductsByCategoryId,
  getRandomProducts,
} from "../Controllers/product.controller";

const router = express.Router();

router.get("/products", getProductsByCategoryId);
router.get("/productsr/random/", getRandomProducts);
router.get("/products/:category", getProductsByCategoryId);
router.get("/product/:product_id", getProductById);

export default router;
