import { Request, Response } from "express";
import User from '../Models/user';
import Order from '../Models/order';

export const createOrder = async(req:Request, res: Response) => {
    const userId = req.body;
    try{
        const user =  await User.findById(userId);
        if(!user) {
            return res.status(404).json({message: "User not found"});
        }

        const total_price = 0;

        const newOrder = new Order({
            user,
            total_price
        })

        const savedOrder = await newOrder.save();
        return res.status(201).json({message: "Order created successful"});
    }catch(e){
        return res.status(500).json({message: "An error ocured during saving order"});
    }
}

export const getOrdersByUserId = async(req:Request, res:Response) => {
    const {userId} = req.body;
    try{
        const orders = await Order.find({user_id: userId});
        if(!orders)
            return res.status(404).json({message: "Order not found"});
    }catch(e){
        console.log(e);
        return res.status(500).json({message: "An error occurred during getting orders"});
    }
}