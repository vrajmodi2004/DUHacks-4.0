import React, { useState } from 'react';

const MedicineListing = () => {
  const [search, setSearch] = useState('');
  const medicines = ['Paracetamol', 'Ibuprofen', 'Amoxicillin', 'Cetirizine'];

  return (
    <div className="p-6">
      <input 
        type="text" 
        placeholder="Search medicine..." 
        className="border p-2 w-full mb-4" 
        value={search} 
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul className="bg-white p-4 rounded shadow">
        {medicines.filter(med => med.toLowerCase().includes(search.toLowerCase())).map((med, index) => (
          <li key={index} className="p-2 border-b last:border-0">{med}</li>
        ))}
      </ul>
    </div>
  );
};

export default MedicineListing;
