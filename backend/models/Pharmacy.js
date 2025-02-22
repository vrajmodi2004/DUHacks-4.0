import mongoose from 'mongoose';

const PharmacySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    address: {
      type: String,
      required: true,
      trim: true,
    },
    licenseNumber: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    phone: {
      type: String,
      default: '',
      trim: true,
    },
    // Optionally, you may list products available in the pharmacy
    products: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
      },
    ],
  },
  { timestamps: true }
);

Pharmacy = mongoose.models.Pharmacy || mongoose.model('Pharmacy', PharmacySchema);

export default Pharmacy
