import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AuthPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isLoginDisabled = !(email && password); // Disable login if email or password is empty

  return (
    <div className="h-screen flex items-center justify-center bg-green-100">
      <div className="bg-white p-10 rounded-xl shadow-xl w-full max-w-lg">
        <h2 className="text-3xl font-bold text-center text-green-600 mb-6">Welcome Back</h2>

        <div className="space-y-4">
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

        {/* Login Button */}
        <button
          className="w-full p-3 mt-6 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 disabled:bg-gray-400"
          disabled={isLoginDisabled}
        >
          Login
        </button>

        {/* Register Link */}
        <p className="text-center text-gray-600 mt-4">
          Don't have an account?{' '}
          <Link to="/register" className="text-green-600 hover:underline">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default AuthPage;
