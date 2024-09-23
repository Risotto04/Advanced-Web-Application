import express, { Request, Response, NextFunction, Router  } from "express";
import { 
    createProductCategory, 
    deleteProductCategory,
    getAllProductCategories, 
    getProductCategoryById, 
    updateProductCategory,

    listProductCateggories
} from "../Controllers/productCategory.controller";



const router = express.Router();

router.get("/category", listProductCateggories);

router.get('/categories', getAllProductCategories);
router.get('/categories/:id', getProductCategoryById);
router.post('/categories', createProductCategory);
router.put('/categories/:id', updateProductCategory);
router.delete('/categories/:id', deleteProductCategory);

export default router;
