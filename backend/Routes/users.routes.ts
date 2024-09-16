import express, { Request, Response, NextFunction } from "express";
import { signIn, register } from "../Controllers/users.controllers";

const router = express.Router();

router.get("/signin", signIn);
router.post("/register", register);

export default router;
