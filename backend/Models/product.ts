import mongoose, { Document, Schema } from "mongoose";
import { ProductCategory } from "./products_category";

export interface Product extends Document {
  name: string;
  price: number;
  desc: string;
  picture: Buffer;
  productCategory_id: ProductCategory["_id"];
}

export const ProductSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  picture: {
    type: Buffer, // Array of strings
    required: true,
  },
  productCategory_id: {
    type: mongoose.Types.ObjectId,
    ref: "ProductCategory",
    required: true,
  },
});

export default mongoose.model<Product>("Product", ProductSchema);
