import mongoose, { Document, Schema } from "mongoose";
import { IUser } from "./user";

export interface Cart extends Document {
  _id: mongoose.Types.ObjectId;
  total_price: mongoose.Types.Decimal128;
  user_id: IUser['_id'];
}

const CartSchema: Schema = new Schema({
  total_price: {
    type: mongoose.Types.Decimal128,
    required: true
  },
  user_id: {
    type: mongoose.Types.ObjectId,
    ref: 'IUser',
    required: true
  }
});

export default mongoose.model<Cart>("Cart", CartSchema);
