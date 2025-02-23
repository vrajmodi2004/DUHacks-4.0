import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('customer'); // Default role is 'customer'

  const isRegisterDisabled = !(name && email && password && role); // Disable register if name, email, password, or role is not selected

  const handleRoleChange = (e) => {
    setRole(e.target.value); // Update role when a radio button is selected
  };

  return (
    <div className="h-screen flex items-center justify-center bg-green-100">
      <div className="bg-white p-10 rounded-xl shadow-xl w-full max-w-lg">
        <h2 className="text-3xl font-bold text-center text-green-600 mb-6">Create Your Account</h2>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        {/* Role Selection */}
        <div className="mt-6">
          <p className="text-lg font-semibold text-green-600 mb-2">Select Your Role</p>
          <div className="grid grid-cols-2 gap-4">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                value="customer"
                checked={role === 'customer'}
                onChange={handleRoleChange}
                className="form-radio text-green-600"
              />
              <span className="text-lg">Customer</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                value="admin"
                checked={role === 'admin'}
                onChange={handleRoleChange}
                className="form-radio text-green-600"
              />
              <span className="text-lg">Admin</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                value="pharmacy"
                checked={role === 'pharmacy'}
                onChange={handleRoleChange}
                className="form-radio text-green-600"
              />
              <span className="text-lg">Pharmacy</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                value="delivery-agent"
                checked={role === 'delivery-agent'}
                onChange={handleRoleChange}
                className="form-radio text-green-600"
              />
              <span className="text-lg">Delivery Agent</span>
            </label>
          </div>
        </div>

        {/* Register Button */}
        <button
          className="w-full p-3 mt-6 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 disabled:bg-gray-400"
          disabled={isRegisterDisabled}
        >
          Register
        </button>

        {/* Login Link */}
        <p className="text-center text-gray-600 mt-4">
          Already have an account?{' '}
          <Link to="/" className="text-green-600 hover:underline">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
