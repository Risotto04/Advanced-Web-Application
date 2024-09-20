import mongoose, { Document, Schema } from "mongoose";
import { IUser } from "./user";

export interface UserAddress extends Document {
  user_id: IUser["_id"];
  name: string;
  desc: string;
  address: {
    address_line1: string;
    city: string;
    postal_code: string;
    country: string;
    phone_number: string;
  };
}

// Subdocument schema for the address
const AddressSchema: Schema = new Schema({
  address_line1: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  postal_code: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  phone_number: {
    type: String,
    required: true,
  },
});

// Main UserAddress schema
export const UserAddressSchema: Schema = new Schema({
  user_id: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  address: {
    type: AddressSchema, // Embedding the AddressSchema as a subdocument
    required: true,
  },
});

export default mongoose.model<UserAddress>("UserAddress", UserAddressSchema);
