import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isRegisterDisabled = !(name && email && password);

  return (
    <div className="h-screen flex items-center justify-center bg-green-600">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-4">Register</h2>
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 mb-3 border rounded"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-3 border rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-3 border rounded"
        />
        <button
          className="w-full p-2 bg-green-500 text-white font-bold rounded disabled:bg-gray-400"
          disabled={isRegisterDisabled}
        >
          Register
        </button>
        <p className="text-center mt-4">
          <Link to="/auth" className="text-green-600">Already have an account? Login</Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;