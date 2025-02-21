import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="h-screen bg-gray-900 text-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-4 bg-gray-800 shadow-lg">
        <div className="flex items-center">
          <img src="/logo.png" alt="MedFast Logo" className="h-10 w-10 mr-2" />
          <h1 className="text-2xl font-bold text-yellow-400">MedFast</h1>
        </div>
        <div className="flex space-x-6 text-lg">
          <Link to="/" className="hover:text-yellow-400">Home</Link>
          <Link to="/search" className="hover:text-yellow-400">Search</Link>
          <Link to="/cart" className="hover:text-yellow-400">Cart</Link>
          <Link to="/profile" className="hover:text-yellow-400">Profile</Link>
        </div>
      </nav>
      
      {/* Hero Section */}
      <div className="text-center mt-12">
        <h2 className="text-4xl font-bold">
          <span className="text-yellow-400">Get Medicines Fast</span>
          <span className="text-white"> with Superfast Delivery in your city</span>
        </h2>
      </div>
      
      {/* Feature Boxes */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 p-6 mt-8">
        <div className="bg-gray-800 p-4 rounded-lg shadow-md flex flex-col items-center">
          <img src="/fast-delivery.png" alt="Fast Delivery" className="h-20 w-20 mb-2" />
          <p>Fast & Reliable Delivery</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg shadow-md flex flex-col items-center">
          <img src="/trusted-pharmacy.png" alt="Trusted Pharmacy" className="h-20 w-20 mb-2" />
          <p>Trusted Pharmacies</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg shadow-md flex flex-col items-center">
          <img src="/secure-payment.png" alt="Secure Payment" className="h-20 w-20 mb-2" />
          <p>Secure Payments</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg shadow-md flex flex-col items-center">
          <img src="/support.png" alt="Customer Support" className="h-20 w-20 mb-2" />
          <p>24/7 Customer Support</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg shadow-md flex flex-col items-center">
          <img src="/affordable.png" alt="Affordable Prices" className="h-20 w-20 mb-2" />
          <p>Affordable Prices</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg shadow-md flex flex-col items-center">
          <img src="/track-order.png" alt="Track Orders" className="h-20 w-20 mb-2" />
          <p>Track Your Orders</p>
        </div>
      </div>
      
      {/* Search Button */}
      <div className="text-center mt-8">
        <Link to="/search" className="bg-yellow-400 text-black px-6 py-3 rounded-lg text-lg font-bold hover:bg-yellow-500">Search Medicine</Link>
      </div>
    </div>
  );
};

export default HomePage;
