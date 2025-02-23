import express from "express";
import { register, login } from "../controllers/authController.js";
import {
  authenticateUser,
  authorizeRoles,
} from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);

// Example: Protected route for admin users
router.get("/admin", authenticateUser, authorizeRoles("admin"), (req, res) => {
  res.json({ message: "Welcome Admin!" });
});

export default router;
