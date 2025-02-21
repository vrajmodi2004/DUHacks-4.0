import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const MedicineDetails = () => {
  const { id } = useParams();
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">Medicine Details - {id}</h2>
      <p className="text-gray-700">Description about the medicine.</p>
      <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4">Add to Cart</button>
      <Link to="/cart" className="block mt-2 text-blue-500">Go to Cart</Link>
    </div>
  );
};

export default MedicineDetails;