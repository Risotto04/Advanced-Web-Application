import { Request, Response } from "express";
import Payment from '../Models/payment';
import User from "../Models/user";
import Product from "../Models/product";

export const createPayment = async(req: Request, res: Response) => {
    interface IProductAndQuantity {
        product: typeof Product;
        quantity: number;
    }

    interface IProductAndQuantityReq {
        product_id: string;
        quantity: number;
    }

    const {
        user_id, 
        slip, 
        date,
        time,
        recipient,
        recipient_phone_number,  
        product_idsAndQuantity 
    } = req.body;

    try {
        // Check if the user exists
        const user = await User.findById(user_id);
        if (!user) return res.status(404).json({ message: "User not found" });

        // Extract product IDs from the request
        const product_ids = product_idsAndQuantity.map((p: IProductAndQuantityReq) => p.product_id);
        console.log(product_ids);
        // Fetch all products by their IDs
        const products = await Product.find({ _id: { $in: product_ids } });

        if (products.length !== product_ids.length) {
            return res.status(404).json({ message: "One or more products not found" });
        }

        // Build productsAndQuantity array by matching each product with its quantity
        const productsAndQuantity: IProductAndQuantity[] = product_idsAndQuantity.map((p: IProductAndQuantityReq) => {
            const product = products.find(prod => prod._id == p.product_id);
            return { product: product, quantity: p.quantity };
        });

        console.log(productsAndQuantity);

        // Create a new Payment
        const newPayment = new Payment({
            slip,
            date,
            time,
            recipient,
            recipient_phone_number,
            user,  // Store the user's ID
            productsAndQuantity: productsAndQuantity.map(pq => ({
                product: pq.product,
                quantity: pq.quantity
            }))
        });

        // Save the Payment
        const savedPayment = await newPayment.save();
        return res.status(201).json({ message: "Payment created successfully", payment: savedPayment });
    } catch (e) {
        return res.status(500).json({ message: "An error occurred during saving payment", error: e });
    }
};


// export const getPaymentByOrderId = async(req:Request, res:Response) => {
//     const {order_id} = req.body;
//     try{
//         const payment = await Payment.findOne({order_id: order_id});
//         if(!payment)
//             return res.status(404).json({message: "Payment not found"});
//         return res.status(200).json({data: payment});
//     }catch(e){
//         return res.status(500).json({error: e, message: "An error ocured during getting payment"})
//     }
// }