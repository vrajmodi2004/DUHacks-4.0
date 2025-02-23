import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import connectDB from "../Backend/config/mongodb.js";
import authRoutes from "../Backend/routes/authRoutes.js";
import productRoutes from "../Backend/routes/productRoutes.js";

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

// Initialize Express app
const app = express();

// Rate Limiting (prevents abuse)
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per window
});
app.use(limiter);

// Middleware
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan("dev")); // Logs requests to console
app.use(helmet()); // Security headers

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);

// Test Route
app.get("/", (req, res) => {
  res.send("Instant Medicine Delivery API is running...");
});

// 404 Route Not Found Handler
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// Global Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong!" });
});

// Start Server
const PORT = process.env.PORT || 9000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

