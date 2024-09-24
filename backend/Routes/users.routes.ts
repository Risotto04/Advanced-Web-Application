import express, { Request, Response, NextFunction } from "express";
import { signIn, register, signOut, updateUserDetails, getUserById, deleteUser } from "../Controllers/users.controllers";
import { genPromptPayQr } from "../Controllers/genPromptPayQR.controller";
import authMiddleware from "../Middleware/middleware";

const router = express.Router();

router.get("/signout", signOut);
router.get("/genqr/:amount", genPromptPayQr);
router.get("/users",authMiddleware, getUserById);
router.post("/signin", signIn);
router.post("/register", register);
router.patch("/users/update",authMiddleware, updateUserDetails);

router.delete("/user", authMiddleware, deleteUser);
export default router;
