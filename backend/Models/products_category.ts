import mongoose, { Document, Schema } from "mongoose";

export interface ProductCategory extends Document {
  _id: mongoose.Types.ObjectId;
  name: string;
  desc: string;
}

const ProductCategorySchema: Schema = new Schema({
  name: {
    type: String,
    required: true
  },
  desc: {
    type: String,
    required: true
  }
});

export default mongoose.model<ProductCategory>("ProductCategory", ProductCategorySchema);
