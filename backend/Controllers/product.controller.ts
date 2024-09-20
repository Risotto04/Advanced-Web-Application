import mongoose from 'mongoose';
import { Request, Response, NextFunction } from "express";
import Product from '../Models/product';

export const getProducts = async(req: Request, res: Response, ) => {
    try {
        const productList = await Product.find({});
        return res.status(200).json({"data":productList});
    } catch (error) {
        console.error("Error querying products:", error);
        return res.status(500).json({"error":error});
    }
}

export const getProductsByCategory = async(req: Request, res: Response) => {
    const category = req.query.category || req.params.category;
    const filter = category ? { category: category.toString() } : {};
    try {
        const productList = await Product.find(filter);
        res.status(200).json(productList);
    } catch (error) {
        console.error("Error querying products:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

export const getProductById = async(req:Request, res:Response) => {
    const id = req.body;
    try{
        const products = await Product.findById(id);

        return res.status(200).json({data: products});
    }catch(e){
        console.log("An error occured: ", e);
        return res.status(500).json({message: "An error ocured during getting product by id"})
    }
}
