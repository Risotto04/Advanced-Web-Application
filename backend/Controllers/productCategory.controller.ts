import { Request, Response, NextFunction } from "express";

import ProductCategory from '../Models/products_category';

export const listProductCateggories = async(req:Request, res: Response) => {
    try{
        const categories = await ProductCategory.find();

        return res.status(200).json({data: categories});
    }catch(e){
        console.log("An error ocured: ", e);
        res.status(500).json({message: "An error ocured during getting product categories"});
    }
}