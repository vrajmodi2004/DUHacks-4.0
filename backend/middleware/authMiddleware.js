import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import User from "../models/User.js"; // Import User model

dotenv.config(); // Load environment variables

const JWT_SECRET = process.env.JWT_SECRET || "default_secret"; // Fallback if missing

// Middleware to verify JWT token
export const authenticateUser = async (req, res, next) => {
  const token = req.header("Authorization");
  console.log(token);

  if (!token) {
    return res
      .status(401)
      .json({ message: "Access denied. No token provided." });
  }

  try {
    const decoded = jwt.verify(token.replace("Bearer ", ""), JWT_SECRET);
    req.user = await User.findById(decoded.userId).select("-password"); // Attach user to request
    if (!req.user) {
      return res.status(401).json({ message: "User not found" });
    }
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
};

// Middleware to check user roles (Admin, Pharmacy, etc.)
export const authorizeRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res
        .status(403)
        .json({ message: "Access denied. Unauthorized role." });
    }
    next();
  };
};
