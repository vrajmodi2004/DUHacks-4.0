import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const getMedicinesFromText = (text) => {
  const medicines = {
    "fever": ["Paracetamol", "Crocin"],
    "headache": ["Aspirin", "Ibuprofen"],
    "cold": ["Cetirizine", "Dolo-650"],
  };

  let recommendations: string[] = [];
  Object.keys(medicines).forEach((key) => {
    if (text.toLowerCase().includes(key)) {
      recommendations.push(...medicines[key]);
    }
  });

  return recommendations.length ? recommendations : ["No recommendations found"];
};

const RecommendedMedicines = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const extractedText = queryParams.get("text");

  const [medicines, setMedicines] = useState<string[]>([]);

  useEffect(() => {
    if (extractedText) {
      setMedicines(getMedicinesFromText(extractedText));
    }
  }, [extractedText]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-4">Recommended Medicines</h1>
      <ul className="bg-white p-4 rounded shadow">
        {medicines.map((medicine, index) => (
          <li key={index} className="text-lg">{medicine}</li>
        ))}
      </ul>
    </div>
  );
};

export default RecommendedMedicines;
