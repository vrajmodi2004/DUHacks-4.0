import Delivery from '../models/Delivery.js';
import Order from '../models/Order.js';
import User from '../models/User.js';

// Create a new delivery entry
export const createDelivery = async (req, res) => {
  try {
    const { orderId, deliveryAgent } = req.body;

    // Ensure the order exists
    const order = await Order.findById(orderId);
    if (!order) return res.status(404).json({ message: 'Order not found' });

    // Ensure the delivery agent exists
    const agent = await User.findById(deliveryAgent);
    if (!agent) return res.status(404).json({ message: 'Delivery agent not found' });

    const delivery = new Delivery({ orderId, deliveryAgent });
    await delivery.save();

    res.status(201).json(delivery);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all deliveries
export const getAllDeliveries = async (req, res) => {
  try {
    const deliveries = await Delivery.find().populate('orderId deliveryAgent');
    res.status(200).json(deliveries);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single delivery by ID
export const getDeliveryById = async (req, res) => {
  try {
    const delivery = await Delivery.findById(req.params.id).populate('orderId deliveryAgent');
    if (!delivery) return res.status(404).json({ message: 'Delivery not found' });
    res.status(200).json(delivery);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update delivery status
export const updateDeliveryStatus = async (req, res) => {
  try {
    const { status, trackingDetails } = req.body;
    const delivery = await Delivery.findById(req.params.id);

    if (!delivery) return res.status(404).json({ message: 'Delivery not found' });

    if (status) delivery.status = status;
    if (trackingDetails) delivery.trackingDetails = trackingDetails;

    await delivery.save();
    res.status(200).json(delivery);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a delivery entry
export const deleteDelivery = async (req, res) => {
  try {
    const delivery = await Delivery.findByIdAndDelete(req.params.id);
    if (!delivery) return res.status(404).json({ message: 'Delivery not found' });
    res.status(200).json({ message: 'Delivery deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
