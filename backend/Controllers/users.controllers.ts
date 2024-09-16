import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const JWT_SECRET = "your_jwt_secret_key"; // Use environment variables for sensitive data

export const signIn = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
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
      res.status(200).json({ message: "You are already logged in" });
    }
  } catch (error) {
    console.error("Sign-in error:", error);
    res.status(500).json({ message: "An error occurred during sign-in" });
    next(error);
  }
};
