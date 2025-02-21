import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-green-100">
      <h1 className="text-4xl font-bold mb-4">Instant Medicine Delivery</h1>
      <p className="text-lg text-gray-700 mb-6">Search for medicines and get them delivered instantly!</p>
      <Link to="/search" className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600">Search Medicines</Link>
    </div>
  );
};

export default HomePage;
