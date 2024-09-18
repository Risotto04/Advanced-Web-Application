import mongoose, { Document, Schema } from "mongoose";
import { ProductCategory } from "./products_category";

export interface Product extends Document {
  _id: mongoose.Types.ObjectId;
  name: string;
  price: number;
  picture: string[];  // Array of image URLs
  productCategory_id: ProductCategory['_id'];
}

const ProductSchema: Schema = new Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  picture: {
    type: [String],  // Array of strings
    required: true
  },
  productCategory_id: {
    type: mongoose.Types.ObjectId,
    ref: 'ProductCategory',
    required: true
  }
});

export default mongoose.model<Product>("Product", ProductSchema);
