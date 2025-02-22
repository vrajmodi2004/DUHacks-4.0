import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Paracetamol', quantity: 2, price: 50, image: 'https://www.stelonbiotech.com/wp-content/uploads/2022/04/PYREMUST-650-TAB.jpg' },
    { id: 2, name: 'Vitamin C Tablets', quantity: 1, price: 120, image: 'https://www.medibyte.in/wp-content/uploads/2023/05/Dr-kumar-Vitamin-C.jpg' },
    { id: 3, name: 'Cough Syrup', quantity: 1, price: 80, image: 'https://5.imimg.com/data5/SELLER/Default/2023/4/300119483/WE/DO/JZ/5666007/cough-syrup-3dbox.jpg' },
    { id: 4, name: 'Hand Sanitizer', quantity: 2, price: 150, image: 'https://assets.unileversolutions.com/v1/34829171.jpg' },
  ]);

  const updateQuantity = (id, change) => {
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + change) } : item
    ));
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const grandTotal = cartItems.reduce((total, item) => total + item.quantity * item.price, 0);

  return (
    <div className="p-6 max-w-4xl mx-auto bg-green-100 min-h-screen flex flex-col items-center">
      <h2 className="text-4xl font-extrabold mb-6 text-green-700">Your Cart</h2>
      <div className="bg-gray-50 shadow-lg rounded-lg p-6 w-full">
        {cartItems.length > 0 ? (
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-green-600 text-white">
                <th className="p-4">Image</th>
                <th className="p-4">Medicine</th>
                <th className="p-4 text-center">Quantity</th>
                <th className="p-4">Price</th>
                <th className="p-4">Total</th>
                <th className="p-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id} className="border-t hover:bg-green-200 transition">
                  <td className="p-4"><img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" /></td>
                  <td className="p-4 font-medium text-gray-700">{item.name}</td>
                  <td className="p-4 text-center font-semibold text-gray-800 flex items-center justify-center gap-2">
                    <button onClick={() => updateQuantity(item.id, -1)} className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 transition">-</button>
                    {item.quantity}
                    <button onClick={() => updateQuantity(item.id, 1)} className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600 transition">+</button>
                  </td>
                  <td className="p-4 font-semibold text-gray-700">₹{item.price}</td>
                  <td className="p-4 font-bold text-gray-800">₹{item.quantity * item.price}</td>
                  <td className="p-4">
                    <button onClick={() => removeItem(item.id)} className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition">Remove</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-gray-600 text-center text-lg">Your cart is empty.</p>
        )}
        <div className="border-t mt-6 pt-4 text-right">
          <h3 className="text-2xl font-bold text-green-900">Grand Total: ₹{grandTotal}</h3>
        </div>
      </div>
      <div className="mt-6 flex gap-4">
        <Link to="/" className="bg-gray-500 text-white px-6 py-3 rounded-lg font-semibold text-lg shadow-md hover:bg-gray-600 transition">Go to Home</Link>
        <Link to="/track-order" className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold text-lg shadow-md hover:bg-green-600 transition">Proceed to Checkout</Link>
      </div>
    </div>
  );
};

export default CartPage;
