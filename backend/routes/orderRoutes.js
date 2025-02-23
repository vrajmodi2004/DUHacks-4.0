import express from "express";
import {
  createOrder,
  getOrderById,
  getAllOrders,
  updateOrderStatus,
  updatePaymentStatus,
  deleteOrder
} from "../controllers/orderController.js";

const router = express.Router();

router.post("/", createOrder);
router.get("/", getAllOrders);
router.get("/:id", getOrderById);
router.put("/:id/status", updateOrderStatus);
router.put("/:id/payment", updatePaymentStatus);
router.delete("/:id", deleteOrder);

export default router;
