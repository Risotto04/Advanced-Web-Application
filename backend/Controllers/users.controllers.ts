import { Request, Response, NextFunction, response } from "express";
import jwt from "jsonwebtoken";
import User from "../Models/user";
import bcrypt from "bcryptjs";
import mongoose from "mongoose";
import { createCart } from "./cart.controller";

export const signIn = async (req: Request, res: Response, next: NextFunction) => {
  const JWT_SECRET = process.env.JWT_KEY as string;
  try {
    const { email, password } = req.body;

    const existingToken = req.cookies.Authorization;

    if (!existingToken) {
      const user = await User.findOne({ email: email });
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
        return res.status(401).json({ message: "Invalid password" });
      }

      const payload = { id: user._id };
      const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "3h" });

      res.cookie("Authorization", token, {
        maxAge: 10800000, // 3 hours
        httpOnly: false,
      });

      return res.status(200).json({ message: "Login successful" });
    } else {
      return res.status(200).json({ message: "You are already logged in" });
    }
  } catch (error) {
    return res.status(500).json({ message: "An error occurred during sign-in", error });
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
    const savedCart = await createCart(savedUser._id.toString(), 0);

    return res.status(201).json({
      message: "User created successfully, and cart created",
      userDetails: savedUser,
      cartDetails: savedCart,
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

export const updateUserDetails = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const  userId = req.id; 
    const { email, firstname, lastname, phone_number } = req.body;
    const existingUser = await User.findOneAndUpdate({_id: userId}, {email: email, firstname: firstname, lastname: lastname, phone_number: phone_number});
    if (!existingUser) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    return res.status(200).json({
      message: "User updated successfully",
    });
  } catch (error) {
    console.error("Error during user update:", error);
    return res.status(500).json({ message: "User Update error" });
  }
};

export const getUserById = async (req: Request, res: Response) => {
  const  userId = req.id; 
  try {
    const user = await User.findById(userId); 

    if (!user) {
      return res.status(404).json({ message: "User not found" }); 
    }

    return res.status(200).json(user);
  } catch (e) {
    console.log("An error occurred: ", e); 

    return res
      .status(500)
      .json({ message: "An error occurred during getting user by id" }); 
  }
};

export const deleteUser = async(req:Request, res:Response) => {
  const user_id = req.id;
  try{
    const user = await User.findOneAndDelete({_id: user_id});
    return res.status(200).json({message: "Deleted user", user: user});
  }catch(e){
    return res.status(500).json({message: "An error ocured during user deletion", error: e});
  }
}
