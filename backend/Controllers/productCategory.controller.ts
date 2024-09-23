import { Request, Response, NextFunction } from "express";

import ProductCategory from '../Models/products_category';

export const listProductCateggories = async(req:Request, res: Response) => {
    try{
        const categories = await ProductCategory.find();
        if(!categories)
            return res.status(404).json({message: "Categories not found"});
        return res.status(200).json({data: categories});
    }catch(e){
        console.log("An error ocured: ", e);
        res.status(500).json({message: "An error ocured during getting product categories"});
    }      
}   



const productCategories = [
    { id: 1, name: 'Fresh Flowers' },
    { id: 2, name: 'Dried Flowers' },
    { id: 3, name: 'Live Plants' },
    { id: 4, name: 'Aroma Candles' },
    { id: 5, name: 'Fresheners' }
  ];
  
  // สำหรับดึงข้อมูลหมวดหมู่ทั้งหมด
  export const getAllProductCategories = (req: Request, res: Response) => {
    res.status(200).json(productCategories);
  };
  
  // สำหรับดึงหมวดหมู่ตาม ID
  export const getProductCategoryById = (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const category = productCategories.find((cat) => cat.id === id);
  
    if (category) {
      res.status(200).json(category);
    } else {
      res.status(404).json({ message: 'Category not found' });
    }
  };
  
  // สำหรับเพิ่มหมวดหมู่ใหม่
  export const createProductCategory = (req: Request, res: Response) => {
    const { name } = req.body;
    const newCategory = {
      id: productCategories.length + 1,
      name
    };
  
    productCategories.push(newCategory);
    res.status(201).json(newCategory);
  };
  
  // สำหรับอัปเดตหมวดหมู่ตาม ID
  export const updateProductCategory = (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const { name } = req.body;
    const category = productCategories.find((cat) => cat.id === id);
  
    if (category) {
      category.name = name;
      res.status(200).json(category);
    } else {
      res.status(404).json({ message: 'Category not found' });
    }
  };
  
  // สำหรับลบหมวดหมู่ตาม ID
  export const deleteProductCategory = (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const categoryIndex = productCategories.findIndex((cat) => cat.id === id);
  
    if (categoryIndex > -1) {
      productCategories.splice(categoryIndex, 1);
      res.status(200).json({ message: 'Category deleted successfully' });
    } else {
      res.status(404).json({ message: 'Category not found' });
    }
  };

