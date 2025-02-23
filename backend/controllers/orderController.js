    import Order from "../models/Order.js";

    export const createOrder = async (req, res) => {
    try {
        const newOrder = new Order(req.body);
        const savedOrder = await newOrder.save();
        res.status(201).json(savedOrder);
    } catch (error) {
        res.status(500).json({ message: "Error creating order", error });
    }
    };

    export const getOrderById = async (req, res) => {
    try {
        const order = await Order.findById(req.params.id).populate("userId pharmacyId products.productId");
        if (!order) return res.status(404).json({ message: "Order not found" });
        res.status(200).json(order);
    } catch (error) {
        res.status(500).json({ message: "Error fetching order", error });
    }
    };

    export const getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find().populate("userId pharmacyId products.productId");
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ message: "Error fetching orders", error });
    }
    };

    export const updateOrderStatus = async (req, res) => {
    try {
        const { orderStatus } = req.body;
        const updatedOrder = await Order.findByIdAndUpdate(
        req.params.id,
        { orderStatus },
        { new: true }
        );
        if (!updatedOrder) return res.status(404).json({ message: "Order not found" });
        res.status(200).json(updatedOrder);
    } catch (error) {
        res.status(500).json({ message: "Error updating order status", error });
    }
    };

    export const updatePaymentStatus = async (req, res) => {
    try {
        const { paymentStatus } = req.body;
        const updatedOrder = await Order.findByIdAndUpdate(
        req.params.id,
        { paymentStatus },
        { new: true }
        );
        if (!updatedOrder) return res.status(404).json({ message: "Order not found" });
        res.status(200).json(updatedOrder);
    } catch (error) {
        res.status(500).json({ message: "Error updating payment status", error });
    }
    };

    export const deleteOrder = async (req, res) => {
    try {
        const deletedOrder = await Order.findByIdAndDelete(req.params.id);
        if (!deletedOrder) return res.status(404).json({ message: "Order not found" });
        res.status(200).json({ message: "Order deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting order", error });
    }
    };
