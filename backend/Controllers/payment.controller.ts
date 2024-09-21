import { Request, Response } from "express";
import Order from '../Models/order';
import Payment from '../Models/payment';

export const createPayment = async(req: Request, res:Response) =>{
    const {orderId, slip, amount, payment_status} = req.body;
    try{
        const order = await Order.findById(orderId);
        if(!order)
            return res.status(404).json({message: "Order not found"});
        
        const newPayment = new Payment({
            slip,
            amount,
            order,
            payment_status
        })

        const savedPayment = await newPayment.save();
    }catch(e){
        return res.status(500).json({message: "An error ocured during saving payment"});
    }
}