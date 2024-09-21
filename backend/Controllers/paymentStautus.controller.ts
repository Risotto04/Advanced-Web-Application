import { Request, Response } from "express";
import PaymentStatus from '../Models/payment_status';

export const getPaymentStatus = async(req:Request, res:Response) => {

    try{
        const paymentStatus = PaymentStatus.find();
        return res.status(200).json({data: paymentStatus});

    }catch(e){
        console.log(e);
        return res.status(404).json({message: "Payment status not found"});

    }
}