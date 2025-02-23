import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Tesseract from "tesseract.js"; // For OCR
import { Document, Page, pdfjs } from "react-pdf";
import axios from "axios";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const UploadReport = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const extractTextFromImage = async (imageFile) => {
    setLoading(true);
    const { data } = await Tesseract.recognize(imageFile, "eng");
    setText(data.text);
    setLoading(false);
  };

  const extractTextFromPDF = async (pdfFile) => {
    setLoading(true);
    const formData = new FormData();
    formData.append("file", pdfFile);
    
    // Send to backend for text extraction
    try {
      const response = await axios.post("http://localhost:8080/api/analyze", formData);
      setText(response.data.text);
    } catch (error) {
      console.error("Error extracting text:", error);
    }
    setLoading(false);
  };

  const handleUpload = async () => {
    if (!selectedFile) return;
    const fileType = selectedFile.type;
    
    if (fileType.includes("image")) {
      await extractTextFromImage(selectedFile);
    } else if (fileType.includes("pdf")) {
      await extractTextFromPDF(selectedFile);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-4">Upload Your Medical Report</h1>
      <input type="file" accept=".pdf, .png, .jpg, .jpeg" onChange={handleFileChange} />
      <button 
        className="mt-4 bg-green-600 text-white px-6 py-2 rounded-lg"
        onClick={handleUpload}
        disabled={loading}
      >
        {loading ? "Processing..." : "Upload & Analyze"}
      </button>

      {text && (
        <div className="mt-6 bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold">Extracted Text:</h2>
          <p className="mt-2">{text}</p>
          <button 
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
            onClick={() => navigate(`/recommended-medicines?text=${encodeURIComponent(text)}`)}
          >
            Get Medicine Recommendations
          </button>
        </div>
      )}
    </div>
  );
};

export default UploadReport;
