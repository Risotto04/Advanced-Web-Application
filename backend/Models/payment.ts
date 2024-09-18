import mongoose, { Document, Schema } from "mongoose";
import { Order } from "./order";

export interface Payment extends Document {
  _id: mongoose.Types.ObjectId;
  slip: string;  // Assuming this is a path to the payment slip or a reference ID
  date: Date;
  amount: mongoose.Types.Decimal128;
  order_id: Order["_id"];
}

const PaymentSchema: Schema = new Schema({
  slip: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
    default: Date.now,  // Default to current date if not provided
  },
  amount: {
    type: mongoose.Types.Decimal128,
    required: true,
  },
  order_id: {
    type: mongoose.Types.ObjectId,
    ref: 'Order',
    required: true,
  }
});


export default mongoose.model<Payment>("Payment", PaymentSchema);
