import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import Order from "../models/Order.js";
import User from "../models/User.js";

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET || "default_secret";

// Middleware to verify JWT token for orders
export const authenticateOrderUser = async (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) {
    return res.status(401).json({ message: "Access denied. No token provided." });
  }
  try {
    const decoded = jwt.verify(token.replace("Bearer ", ""), JWT_SECRET);
    req.user = await User.findById(decoded.userId).select("-password");
    if (!req.user) {
      return res.status(401).json({ message: "User not found" });
    }
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
};

// Middleware to check if the user has permission to modify an order
export const authorizeOrderOwnerOrAdmin = async (req, res, next) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }
    
    // Allow if user is admin or order owner
    if (req.user.role === "Admin" || order.userId.toString() === req.user._id.toString()) {
      return next();
    }
    
    return res.status(403).json({ message: "Access denied. Unauthorized action." });
  } catch (error) {
    res.status(500).json({ message: "Error authorizing user", error });
  }
};
