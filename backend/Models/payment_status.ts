import mongoose, { Document, Schema } from "mongoose";

export interface PaymentStatus extends Document {
  _id: mongoose.Types.ObjectId;
  status_name: string;
}

const PaymentStatusSchema: Schema = new Schema({
  status_name: {
    type: String,
    required: true,
  },
});


export default mongoose.model<PaymentStatus>("PaymentStatus", PaymentStatusSchema);
