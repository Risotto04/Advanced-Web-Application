import { Request, Response } from "express";
import CartItem from '../Models/cart_item'
import Cart from "../Models/cart";
import Product from '../Models/product';

export const createCartItem = async(req:Request, res:Response) => {
    const {cart_id, product_id, quantity} = req.body;
    try{

        const cart = await Cart.findById(cart_id);
        if(!cart) res.status(404).json({message: "Cart not found"});
        const product = await Product.findById(product_id);
        if(!product) res.status(404).json({message: "Product not found"});

        const newItem = new CartItem({
            quantity,
            cart_id: cart,
            product_id: product
        })

        const savedItem = await newItem.save();

        return res.status(201).json({message: "Cart item created successful"});


    }catch(e){
        console.log("An error ocured: ", e);
        res.status(500).json({message: "An error occured during creating cart item", error: e});
    }
}

export const getCartItemsByUserId = async(req:Request, res:Response) => {
    const {user_id} = req.body;
    
    try{
        const cart = await Cart.findOne({user_id: user_id}, "_id");
        if(!cart) return res.status(404).json({message: "Cart not found"});

        const cartItems = await CartItem.find({cart_id: cart._id})
        .populate("product_id").populate("cart_id");
        if(!cartItems) return res.status(404).json({message: "Cart item not found"});

        return res.status(200).json({data: cartItems});

    }catch(e){
        console.log("An error ocured: ", e);
        return res.status(500).json({ message: "An error occured during getting cart item", error: e});
    }
}