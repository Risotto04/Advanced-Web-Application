import mongoose, { Document, Schema } from "mongoose";
import { IUser } from "./user";

export interface UserAddress extends Document {
  _id: mongoose.Types.ObjectId;
  user_id: IUser["_id"];
  name: string;
  desc: string;
  address: {
    city: string;
    postal_code: string;
    country: string;
    phone_number: string;
  };
}

const UserAddressSchema: Schema = new Schema({
  user_id: {
    type: mongoose.Types.ObjectId,
    ref: 'User',  // Ensure this matches the model name for User
    required: true
  },
  name: {
    type: String,
    required: true
  },
  desc: {
    type: String,
    required: true
  },
  address: {
    city: {
      type: String,
      required: true
    },
    postal_code: {
      type: String,
      required: true
    },
    country: {
      type: String,
      required: true
    },
    phone_number: {
      type: String,
      required: true
    }
  }
});

export default mongoose.model<UserAddress>("UserAddress", UserAddressSchema);
