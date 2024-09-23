import mongoose, { Document, Schema } from "mongoose";

export interface ProductCategory extends Document {
  name: string;
  desc: string;
  picture: Buffer;
  categoryPicture: Buffer;
}

export const ProductCategorySchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  picture: { type: Buffer, require: true },
  categoryPicture: { type: Buffer, require: true },
});

export default mongoose.model<ProductCategory>("ProductCategory", ProductCategorySchema);
