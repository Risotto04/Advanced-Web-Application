import express, { Request, Response, NextFunction } from "express";
import { signIn, register } from "../Controllers/users.controllers";
import { getUserAddressByUserId, createUserAddress, updateUserAddressByUserId } from "../Controllers/useraddress.controller";

const router = express.Router();

router.get("/signin", signIn);
router.post("/register", register);
router.get("/address/:user_id", getUserAddressByUserId);
router.post("/address", createUserAddress);
router.put("/address/:user_id", updateUserAddressByUserId);

export default router;
