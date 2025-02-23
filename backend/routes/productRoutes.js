import express from "express";
import {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js";
import {authenticateUser} from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", authenticateUser, createProduct); // Add a new product
router.get("/", getProducts); // Get all products
router.get("/:id", getProductById); // Get a specific product
router.put("/:id", authenticateUser, updateProduct); // Update a product
router.delete("/:id", authenticateUser, deleteProduct); // Delete a product

export default router;
