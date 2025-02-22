// // server.js
// import express from 'express'
// import cors from 'cors'
// import 'dotenv/config'
// import connectDB from './config/mongodb.js'

// Load environment variables from .env file
require('dotenv').config();

// Import required packages
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
// connectDB()

// Create Express app instance
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL
);
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};
connectDB();

// // Import Routes
// const userRoutes = require('./routes/userRoutes');
// const productRoutes = require('./routes/productRoutes');
// const pharmacyRoutes = require('./routes/pharmacyRoutes');
// const orderRoutes = require('./routes/orderRoutes');
// const deliveryRoutes = require('./routes/deliveryRoutes');

// // Use Routes
// app.use('/api/users', userRoutes);
// app.use('/api/products', productRoutes);
// app.use('/api/pharmacies', pharmacyRoutes);
// app.use('/api/orders', orderRoutes);
// app.use('/api/deliveries', deliveryRoutes);

// Basic route to test server
app.get('/', (req, res) => {
  res.send('Instant Medicine Delivery API is running...');
});

// Set Port from environment or default
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
