import User from "../models/User.js"; 
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET || "default_secret";

export const register = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      role = "customer",
      address = "",
      phone = "",
    } = req.body;

    // Log registration attempt
    console.log("Registration attempt:", {
      name,
      email,
      role,
      passwordLength: password?.length,
    });

    // Check for existing user
    const existingUser = await User.findOne({ email: email.toLowerCase() });
    if (existingUser) {
      console.log("Registration failed: User exists -", email);
      return res.status(400).json({ message: "User already exists" });
    }

    // Create new user - password will be hashed by pre-save middleware
    const user = new User({
      name,
      email,
      password,
      role,
      address,
      phone,
    });

    await user.save();

    // Verify the saved user and password
    const savedUser = await User.findOne({ email: email.toLowerCase() });
    const verificationTest = await savedUser.comparePassword(password);

    console.log("Registration successful:", {
      email: savedUser.email,
      passwordVerified: verificationTest,
      role: savedUser.role,
    });

    // Generate JWT token for immediate login
    const token = jwt.sign(
      { userId: savedUser._id, role: savedUser.role },
      JWT_SECRET,
      { expiresIn: "7d" }
    );
    console.log(token);

    res.status(201).json({
      message: "User registered successfully",
      token,
      user: {
        id: savedUser._id,
        name: savedUser.name,
        email: savedUser.email,
        role: savedUser.role,
      },
    });
  } catch (error) {
    console.error("Registration Error:", error);
    res.status(500).json({ error: "Server error. Please try again later." });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    console.log("Login attempt:", {
      email,
      passwordLength: password?.length,
    });

    // Find user
    const user = await User.findOne({ email: email.toLowerCase() });
    if (!user) {
      console.log("Login failed: User not found -", email);
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Verify password
    const isMatch = await user.comparePassword(password);
    console.log("Password verification:", {
      email,
      isMatch,
      role: user.role,
    });

    if (!isMatch) {
      console.log("Login failed: Invalid password -", email);
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Generate token
    const token = jwt.sign({ userId: user._id, role: user.role }, JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(200).json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        address: user.address,
        phone: user.phone,
      },
      message: "Login successful",
    });
  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).json({ error: "Server error. Please try again later." });
  }
};
