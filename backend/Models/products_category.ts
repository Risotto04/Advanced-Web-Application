import mongoose, { Document, Schema } from "mongoose";

export interface ProductCategory extends Document {
  name: string;
  desc: string;
}

export const ProductCategorySchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  }
});

export default mongoose.model<ProductCategory>("ProductCategory", ProductCategorySchema);
