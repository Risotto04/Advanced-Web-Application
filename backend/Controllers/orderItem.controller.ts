import { Request, Response } from "express";
import OrderItem from '../Models/order_item'
import Order from "../Models/order";
import Product from '../Models/product';

export const createOrderItem = async(req:Request, res:Response) => {
    const {orderId, productId, quantity} = req.body;
    try{

        const order = await Order.findById(orderId);
        const product = await Product.findById(productId);

        if(!order) res.status(404).json({message: "Order not found"});
        if(!product) res.status(404).json({message: "Product not found"});

        const newItem = new OrderItem({
            quantity,
            order,
            product
        })

        const savedItem = await newItem.save();

        return res.status(201).json({message: "Order item created successful"});


    }catch(e){
        console.log("An error ocured: ", e);
        res.status(500).json({message: "An error occured during creating cart item"});
    }
}

export const getOrderItemsByUserId = async(req:Request, res:Response) => {
    const {userId} = req.body;

    try{
        const order = await Order.findById(userId);
        if(!order) return res.status(404).json({message: "Cart not found"});

        const orderItem = await OrderItem.find(order.id)
        .populate("product_id");
        return res.status(200).json({data1: order, data2: orderItem});

    }catch(e){
        console.log("An error ocured: ", e);
        return res.status(500).json({message: "An error occured during getting order item"});
    }
}