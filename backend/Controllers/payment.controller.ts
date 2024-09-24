import { Request, Response } from "express";
import Payment from "../Models/payment";
import User from "../Models/user";
import Product from "../Models/product";

export const createPayment = async (req: Request, res: Response) => {
  interface IProductAndQuantity {
    product: typeof Product;
    quantity: number;
  }

  interface IProductAndQuantityReq {
    _id: string;
    quantity: number;
  }

  const { slip, date, time, recipient, recipient_phone_number, product_ids } = req.body;
  try {
    // Check if the user exists
    const id = req.id;
    const user = await User.findById({ _id: id });
    if (!user) return res.status(404).json({ message: "User not found" });

    // Extract product IDs from the request
    const product_ids_ = product_ids.map((p: IProductAndQuantityReq) => p._id);
    // Fetch all products by their IDs
    const products = await Product.find({ _id: { $in: product_ids_ } });
    console.log(products);

    // Build productsAndQuantity array by matching each product with its quantity
    const productsAndQuantity: IProductAndQuantity[] = product_ids.map(
      (p: IProductAndQuantityReq) => {
        const product = products.find((prod) => prod._id == p._id);
        return { product: product, quantity: p.quantity };
      }
    );

    // Create a new Payment
    const newPayment = new Payment({
      slip,
      date,
      time,
      recipient,
      recipient_phone_number,
      user, // Store the user's ID
      productsAndQuantity: productsAndQuantity.map((pq) => ({
        product: pq.product,
        quantity: pq.quantity,
      })),
    });
    // Save the Payment
    const savedPayment = await newPayment.save();
    return res.status(201).json({ message: "Payment created successfully" });
  } catch (e) {
    return res
      .status(500)
      .json({ message: "An error occurred during saving payment", error: e });
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
