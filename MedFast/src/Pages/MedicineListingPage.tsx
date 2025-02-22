import React, { useState } from 'react';
import paracetamol from '../assets/paracetamol.jpg';
import ibuprofen from '../assets/ibuprofen.jpg';
import aspirin from '../assets/aspirin.jpg';
import cetirizine from '../assets/cetirizine.jpg';
import metformin from '../assets/metformin.jpg';
import amoxicillin from '../assets/amoxycillin.jpg';
import atorvastatin from '../assets/atorvastatin.jpg';
import losartan from '../assets/losartan.jpg';
import omeprazole from '../assets/omeprazole.jpg'; // Ensure this path is correct and the file exists

const medicines = [
  { id: 1, name: 'Paracetamol', dosage: '500mg', price: '$5', image: paracetamol },
  { id: 2, name: 'Ibuprofen', dosage: '400mg', price: '$8', image: ibuprofen },
  { id: 3, name: 'Aspirin', dosage: '300mg', price: '$6', image: aspirin },
  { id: 4, name: 'Cetirizine', dosage: '10mg', price: '$3', image: cetirizine },
  { id: 5, name: 'Metformin', dosage: '850mg', price: '$12', image: metformin },
  { id: 6, name: 'Amoxicillin', dosage: '500mg', price: '$15', image: amoxicillin },
  { id: 7, name: 'Atorvastatin', dosage: '20mg', price: '$10', image: atorvastatin },
  { id: 8, name: 'Losartan', dosage: '50mg', price: '$7', image: losartan },
  { id: 9, name: 'Omeprazole', dosage: '20mg', price: '$9', image: omeprazole },
];

const MedicineListingPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="p-6">
      <input
        type="text"
        placeholder="Search medicine..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-2 border rounded mb-4"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {medicines.filter(med => med.name.toLowerCase().includes(searchTerm.toLowerCase())).map(med => (
          <div key={med.id} className="border p-4 rounded-lg shadow-md">
            <img src={med.image} alt={med.name} className="w-full h-32 object-cover mb-2" />
            <h3 className="text-lg font-bold">{med.name}</h3>
            <p className="text-sm text-gray-600">Dosage: {med.dosage}</p>
            <p className="text-sm font-bold text-green-600">Price: {med.price}</p>
            <button className="mt-2 w-full p-2 bg-green-500 text-white rounded">Add</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MedicineListingPage;