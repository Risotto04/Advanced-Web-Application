import express, { Request, Response, NextFunction } from "express";
import { listProductCateggories } from "../Controllers/productCategory.controller";

const router = express.Router();

router.get("/category", listProductCateggories);

export default router;
