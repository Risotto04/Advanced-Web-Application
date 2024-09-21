import { Request, Response } from "express";
import mongoose from "mongoose";
import user_address from "../Models/user_address";

export const getUserAddressByUserId = async (req: Request, res: Response) => {
  try {
    const { user_id } = req.params;

    // Ensure user_id is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(user_id)) {
      return res.status(400).json({ message: "Invalid user ID format." });
    }

    // Fetch the user's address
    const userAddress = await user_address.findOne({ user_id: user_id }).exec();

    if (userAddress) {
      return res.status(200).json(userAddress);
    } else {
      return res.status(404).json({ message: "Address not found for this user." });
    }
  } catch (error) {
    console.error("Error fetching user address:", error);
    return res.status(500).json({ message: "Internal server error." });
  }
};

export const createUserAddress = async (req: Request, res: Response) => {
    try {
      const { user_id, address } = req.body;
  
      // Validate user_id is a valid ObjectId
      if (!mongoose.Types.ObjectId.isValid(user_id)) {
        return res.status(400).json({ message: "Invalid user ID format." });
      }
  
      // Check if address already exists for this user (optional)
      const existingAddress = await user_address.findOne({ user_id }).exec();
      if (existingAddress) {
        return res.status(400).json({ message: "Address already exists for this user." });
      }
  
      // Create a new address document
      const newUserAddress = new user_address({
        user_id: new mongoose.Types.ObjectId(user_id),
        address,
      });
  
      // Save the new address to the database
      await newUserAddress.save();
  
      return res.status(201).json({
        message: "Address created successfully",
        address: newUserAddress,
      });
    } catch (error) {
      console.error("Error creating user address:", error);
      return res.status(500).json({ message: "Internal server error." });
    }
  };

export const updateUserAddressByUserId = async (req: Request, res: Response) => {
  try {
    const { user_id } = req.params; // Get user ID from params
    const { address } = req.body; // Fields to update

    // Validate user_id is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(user_id)) {
      return res.status(400).json({ message: "Invalid user ID format." });
    }

    // Find the address by user_id and update it
    const updatedAddress = await user_address.findOneAndUpdate(
      { user_id: user_id },
      {
        $set: {
          address,
        },
      },
      { new: true, runValidators: true } // Return the updated document
    ).exec();

    if (updatedAddress) {
      return res.status(200).json({
        message: "Address updated successfully",
        address: updatedAddress,
      });
    } else {
      return res.status(404).json({ message: "Address not found for this user." });
    }
  } catch (error) {
    console.error("Error updating user address:", error);
    return res.status(500).json({ message: "Internal server error." });
  }
};
