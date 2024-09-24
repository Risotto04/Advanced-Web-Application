import mongoose, { Document, Schema } from "mongoose";
import { PaymentStatus } from "./payment_status";
import { IUser } from "./user"
import { Product } from "./product"
export interface Payment extends Document {
  slip: string;  // Assuming this is a path to the payment slip or a reference ID
  date: string;
  time: string;
  recipient: string;
  recipient_phone_number: string;
  user: IUser["_id"];
  productsAndQuantity: {
    product: Product["_id"];
    quantity: number;
  }[];
}

export const PaymentSchema: Schema = new Schema({
  slip: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true, 
  },
  time: {
    type: String,
    required: true, 
  },
  recipient: {
    type: String,
    required: true,
  },
  recipient_phone_number: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  productsAndQuantity: [{
    product: {
      type: mongoose.Types.ObjectId,
      ref: 'Product',
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    }
  }]
});


export default mongoose.model<Payment>("Payment", PaymentSchema);
