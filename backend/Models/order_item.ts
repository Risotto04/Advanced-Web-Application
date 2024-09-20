import mongoose, { Document, Schema } from "mongoose";
import { Product } from "./product";
import { Order } from "./order";

export interface OrderItem extends Document {
  quantity: number;
  product_id: Product["_id"];
  order_id: Order["_id"];
}

export const OrderItemSchema: Schema = new Schema({
  quantity: {
    type: Number,
    required: true,
  },
  product_id: {
    type: mongoose.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  order_id: {
    type: mongoose.Types.ObjectId,
    ref: "Order",
    required: true,
  },
});

export default mongoose.model<OrderItem>("OrderItem", OrderItemSchema);
