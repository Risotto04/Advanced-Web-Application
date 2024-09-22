import { Request, Response, NextFunction } from "express";
import Cart from '../Models/cart';
import User from '../Models/user';
import { error } from "console";
import mongoose from "mongoose";
export const createCart = async(req:Request, res:Response) => {
    const {user_id, total_price} = req.body;
    try{
        const user = await User.findById(user_id);
        if(!user)
            return res.status(404).json({message: "User not found"});

        const newCart = new Cart({
            total_price,
            user_id: user
        })

        const savedCart = await newCart.save();
        return res.status(201).json({message: "Cart created successful"});
    }catch(e){
        console.log(e);
        return res.status(500).json({message: "An error occurred during saving cart", error: e});
    }
}

export const getCartByUserId = async(req: Request, res:Response) => {
    const user_id = req.body;

    try{
        const cart = await Cart.findOne(user_id);
        return res.status(200).json({data: cart});
    }catch(e){
        console.log("An error ocured: ", e);
        res.status(500).json({message: "An error occurred during getting cart"});
    }
}