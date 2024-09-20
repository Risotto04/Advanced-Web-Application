import mongoose, { Document, Schema } from "mongoose";
import { Cart } from "./cart";
import { Product } from "./product";

export interface CartItem extends Document {
  quantity: number;
  cart_id: Cart["_id"];
  product_id: Product["_id"];
}

export const CartItemSchema: Schema = new Schema({
  quantity: {
    type: Number,
    required: true,
  },
  cart_id: {
    type: mongoose.Types.ObjectId,
    ref: "Cart",
    required: true,
  },
  product_id: {
    type: mongoose.Types.ObjectId,
    ref: "Product",
    required: true,
  },
});

export default mongoose.model<CartItem>("CartItem", CartItemSchema);
