import mongoose from 'mongoose';
import { Request, Response, NextFunction } from "express";
import Product from '../Models/product';

export const getProductsByCategoryId = async(req: Request, res: Response) => {
    const category = req.query.category || req.params.category;
    const filter = category ? { productCategory_id: category.toString() } : {};
    try {
        const productList = await Product.find(filter);
        res.status(200).json(productList);
    } catch (error) {
        console.error("Error querying products:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

export const getProductById = async(req:Request, res:Response) => {
    const product_id = req.params.product_id;
    try{
        const products = await Product.findById(product_id);

        return res.status(200).json({data: products});
    }catch(e){
        console.log("An error occured: ", e);
        return res.status(500).json({message: "An error ocured during getting product by id"})
    }
}
