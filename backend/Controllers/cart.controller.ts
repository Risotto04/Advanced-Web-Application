import { Request, Response, NextFunction } from "express";
import Cart from '../Models/cart'
// import { getCartItemsByUserId } from "./cartItem.controller";



export const getCart = async(req: Request, res:Response) => {
    const userId = req.body;

    try{
        const cart = await Cart.findOne(userId);
        return res.status(200).json({data: cart});
    }catch(e){
        console.log("An error ocured: ", e);
        res.status(500).json({message: "An error occured during getting cart"});
    }
}