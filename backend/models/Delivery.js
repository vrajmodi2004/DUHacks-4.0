import mongoose from 'mongoose';

const DeliverySchema = new mongoose.Schema(
  {
    orderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Order',
      required: true,
    },
    deliveryAgent: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    status: {
      type: String,
      enum: ['assigned', 'out for delivery', 'delivered'],
      default: 'assigned',
    },
    trackingDetails: {
      type: String,
      default: '',
    },
  },
  { timestamps: true }
);

Delivery = mongoose.models.Delivery || mongoose.model('Delivery', DeliverySchema);

export default Delivery
