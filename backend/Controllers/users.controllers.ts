import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import User from "../Models/user";
import bcrypt from "bcryptjs";
import mongoose from "mongoose";

export const signIn = async (req: Request, res: Response, next: NextFunction) => {
  const JWT_SECRET = process.env.JWT_KEY as string;
  try {
    const { email, password } = req.body;

    const existingToken = req.cookies.Authorization;

    if (!existingToken) {
      const payload = { email, password };
      const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "3h" });

      res.cookie("Authorization", token, {
        maxAge: 10800000, // 3 hours
        httpOnly: false,
      });

      res.status(200).json({ message: "Login successful" });
    } else {
      return res.status(200).json({ message: "You are already logged in" });
    }
  } catch (error) {
    return res.status(500).json({ message: "An error occurred during sign-in" });
  }
};

export const register = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password, firstname, lastname, phone_number } = req.body;

    const existingUser = await User.findOne({ email }).exec();
    if (existingUser) {
      return res.status(409).json({
        message: "Email already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      _id: new mongoose.Types.ObjectId(),
      email,
      password: hashedPassword,
      firstname,
      lastname,
      phone_number,
    });

    const savedUser = await newUser.save();

    return res.status(201).json({
      message: "User created successfully",
      // userDetails: savedUser,
    });
  } catch (error) {
    console.error("Error during user registration:", error);
    return res.status(500).json({
      message: error,
    });
  }
};

export const signOut = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.cookie("Authorization", "", {
      maxAge: 0,
      httpOnly: true,
      path: "/",
    });

    res.status(200).json({ message: "Logout successful" });
  } catch (error) {
    return res.status(500).json({ message: "An error occurred during logout" });
  }
};
