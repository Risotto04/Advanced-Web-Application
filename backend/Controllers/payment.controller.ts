import { Request, Response } from "express";
import Order from '../Models/order';
import Payment from '../Models/payment';

export const createPayment = async(req: Request, res:Response) =>{
    const {order_id, slip, amount, payment_status} = req.body;
    try{
        const order = await Order.findById(order_id);
        if(!order)
            return res.status(404).json({message: "Order not found"});
        
        const newPayment = new Payment({
            slip,
            amount,
            order_id: order,
            payment_status
        })

        const savedPayment = await newPayment.save();
        return res.status(201).json({message: "Payment created successful"});
    }catch(e){
        return res.status(500).json({message: "An error ocured during saving payment"});
    }
}

export const getPaymentByOrderId = async(req:Request, res:Response) => {
    const {order_id} = req.body;
    try{
        const payment = await Payment.findOne({order_id: order_id});
        if(!payment)
            return res.status(404).json({message: "Payment not found"});
        return res.status(200).json({data: payment});
    }catch(e){
        return res.status(500).json({error: e, message: "An error ocured during getting payment"})
    }
}