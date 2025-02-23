import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema(
  {
    // Optional custom id field. MongoDB provides _id automatically.
    id: {
      type: Number,
      unique: true,
      required: true
    },
    name: {
      type: String,
      required: true,
      trim: true
    },
    dosage: {
      type: String,
      required: true,
      trim: true
    },
    price: {
      type: String,
      required: true,
      trim: true
    },
    image: {
      type: String,
      required: true,
      trim: true
    }
  },
  { timestamps: true }
);

const Product = mongoose.models.Product || mongoose.model('Product', ProductSchema);

export default Product
