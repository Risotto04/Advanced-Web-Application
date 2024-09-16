import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import User from "../Models/user";
import bcrypt from "bcryptjs";
import mongoose from "mongoose";
const JWT_SECRET = "your_jwt_secret_key"; // Use environment variables for sensitive data

export const signIn = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { username, password } = req.query;

    const existingToken = req.cookies.Authorization;

    if (!existingToken) {
      const payload = { username, password };
      const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "3h" });

      res.cookie("Authorization", token, {
        maxAge: 10800000, // 3 hours
        httpOnly: true,
      });

      res.status(200).json({ message: "Login successful" });
    } else {
      console.log("Cookie exists:", existingToken);
      return res.status(200).json({ message: "You are already logged in" });
    }
  } catch (error) {
    console.error("Sign-in error:", error);
    return res.status(500).json({ message: "An error occurred during sign-in" });
  }
};

export const register = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password, name, phone_number } = req.body;

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
      name,
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
