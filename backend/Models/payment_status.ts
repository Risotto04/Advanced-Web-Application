import mongoose, { Document, Schema } from "mongoose";

export interface PaymentStatus extends Document {
  status_name: string;
}

export const PaymentStatusSchema: Schema = new Schema({
  status_name: {
    type: String,
    required: true,
  },
});


export default mongoose.model<PaymentStatus>("PaymentStatus", PaymentStatusSchema);
