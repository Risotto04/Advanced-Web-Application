import { Request, Response } from "express";
import User from '../Models/user';
import Order from '../Models/order';

export const createOrder = async(req:Request, res: Response) => {
    const {user_id} = req.body;
    try{
        const user =  await User.findById(user_id);
        if(!user) {
            return res.status(404).json({message: "User not found"});
        }

        const total_price = 0;

        const newOrder = new Order({
            user_id: user.id,
            total_price
        })

        const savedOrder = await newOrder.save();
        return res.status(201).json({message: "Order created successful"});
    }catch(e){
        return res.status(500).json({message: "An error ocured during saving order", error: e});
    }
}

export const getOrdersByUserId = async(req:Request, res:Response) => {
    const {user_id} = req.body;
    try{
        const orders = await Order.find({user_id: user_id});
        if(!orders)
            return res.status(404).json({message: "Order not found"});
        return res.status(200).json({data: orders});
    }catch(e){
        console.log(e);
        return res.status(500).json({message: "An error occurred during getting orders"});
    }
}

export const getOrderById = async(req:Request, res:Response) => {
    const {order_id} = req.body;
    try{
        const order = await Order.findById(order_id);
        if(!order)
            return res.status(404).json({message: "Order not found"});
        return res.status(200).json({data: order});
    }catch(e){
        return res.status(500).json({message: "An error occurred during getting order", error: e});
    }
}