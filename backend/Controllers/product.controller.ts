import mongoose from "mongoose";
import { Request, Response, NextFunction } from "express";
import Product from "../Models/product";
import ProductCategory from "../Models/products_category";
export const getProductsByCategoryId = async (req: Request, res: Response) => {
  const category = req.query.category || req.params.category;
  const filter = category ? { productCategory_id: category.toString() } : {};
  const _filter = category ? { _id: category.toString() } : {};
  try {
    const productList = await Product.find(filter);
    const productCategory = await ProductCategory.find(_filter);
    res.status(200).json({ data: productList, _data: productCategory });
  } catch (error) {
    console.error("Error querying products:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getProductById = async (req: Request, res: Response) => {
  const product_id = req.params.product_id;
  try {
    const products = await Product.findById(product_id);

    return res.status(200).json({ data: products });
  } catch (e) {
    console.log("An error occured: ", e);
    return res
      .status(500)
      .json({ message: "An error ocured during getting product by id" });
  }
};

export const getRandomProducts = async (req: Request, res: Response) => {
  try {
    const products = await Product.aggregate([
      {
        $lookup: {
          from: "productcategories", // ชื่อ collection หมวดหมู่สินค้า
          localField: "productCategory_id", // field ที่อ้างถึงใน Product
          foreignField: "_id", // field ที่อ้างถึงใน ProductCategory
          as: "category_info", // field ที่จะเพิ่มในผลลัพธ์
        },
      },
      { $unwind: "$category_info" }, // แตกข้อมูล array เป็น object เดียว (inner join)
      {
        $project: {
          name: 1, // เอาชื่อของสินค้า
          price: 1, // เอาราคาของสินค้า
          desc: 1, // เอาคำอธิบายของสินค้า
          picture: 1,
          "category_info.name": 1,
        },
      },
      { $sample: { size: 15 } },
    ]);

    return res.status(200).json({ data: products });
  } catch (e) {
    console.log("An error occurred: ", e);
    return res
      .status(500)
      .json({ message: "An error occurred during getting products with category name" });
  }
};
