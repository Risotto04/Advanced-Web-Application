import { Request, Response } from "express";
import OrderItem from '../Models/order_item'
import Order from "../Models/order";
import Product from '../Models/product';

export const createOrderItem = async(req:Request, res:Response) => {
    const {order_id, product_id, quantity} = req.body;
    try{

        const order = await Order.findById(order_id);
        if(!order) res.status(404).json({message: "Order not found"});
        const product = await Product.findById(product_id);
        if(!product) res.status(404).json({message: "Product not found"});

        const newItem = new OrderItem({
            quantity,
            order_id: order,
            product_id: product
        })

        const savedItem = await newItem.save();

        return res.status(201).json({message: "Order item created successful"});


    }catch(e){
        console.log("An error ocured: ", e);
        res.status(500).json({message: "An error occured during creating cart item"});
    }
}

export const getOrderItemsByOrderId = async(req:Request, res:Response) => {
    const {order_id} = req.body;

    try{
        const orderItem = await OrderItem.find({order_id: order_id})
        .populate("product_id");
        return res.status(200).json({data: orderItem});

    }catch(e){
        console.log("An error ocured: ", e);
        return res.status(500).json({message: "An error occured during getting order item"});
    }
}