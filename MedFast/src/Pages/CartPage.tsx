import React from 'react';
import { Link } from 'react-router-dom';

const CartPage = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">Your Cart</h2>
      <p className="text-gray-700">List of selected medicines.</p>
      <Link to="/track-order" className="bg-green-500 text-white px-4 py-2 rounded mt-4 block">Proceed to Checkout</Link>
    </div>
  );
};

export default CartPage;