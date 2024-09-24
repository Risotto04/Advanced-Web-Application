import express, { Request, Response, NextFunction } from "express";
import { signIn, register, signOut, updateUserDetails, getUserById } from "../Controllers/users.controllers";
import {
  getUserAddressByUserId,
  createUserAddress,
  updateUserAddressByUserId,
} from "../Controllers/useraddress.controller";
import { genPromptPayQr } from "../Controllers/genPromptPayQR.controller";
import authMiddleware from "../Middleware/middleware";

const router = express.Router();

router.get("/signout", signOut);
router.get("/address/:user_id", getUserAddressByUserId);
router.get("/genqr/:amount", genPromptPayQr);
router.get("/users",authMiddleware, getUserById);
router.post("/signin", signIn);
router.post("/register", register);
router.post("/address", createUserAddress);
router.put("/address/:user_id", updateUserAddressByUserId);
router.patch("/users/update",authMiddleware, updateUserDetails);

export default router;
