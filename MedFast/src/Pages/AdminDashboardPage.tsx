import React, { useState, useEffect } from "react";
import axios from "axios";

const AdminDashboard = () => {
  interface Product {
    id: number;
    name: string;
    dosage: string;
    price: number;
    image: string;
  }
  
  const [products, setProducts] = useState<Product[]>([]);
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    dosage: "",
    price: "",
    image: ""
  });

  useEffect(() => {
    fetchProducts();
  }, []);

  // Fetch products from backend
  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/products");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Add a new product
  const handleAddProduct = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/products", formData);
      fetchProducts(); // Refresh product list
      setFormData({ id: "", name: "", dosage: "", price: "", image: "" }); // Reset form
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  // Remove a product
  const handleRemoveProduct = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/products/${id}`);
      fetchProducts(); // Refresh product list
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <div className="h-screen flex flex-col items-center bg-green-100 p-6">
      <h1 className="text-3xl font-bold text-green-700 mb-6">Admin Dashboard</h1>

      {/* Add Product Form */}
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-xl font-bold mb-4">Add Medication</h2>
        <form onSubmit={handleAddProduct} className="space-y-4">
          <input
            type="number"
            name="id"
            placeholder="Product ID"
            value={formData.id}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
            required
          />
          <input
            type="text"
            name="name"
            placeholder="Medication Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
            required
          />
          <input
            type="text"
            name="dosage"
            placeholder="Dosage"
            value={formData.dosage}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
            required
          />
          <input
            type="text"
            name="price"
            placeholder="Price"
            value={formData.price}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
            required
          />
          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={formData.image}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
            required
          />
          <button className="w-full p-2 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700">
            Add Product
          </button>
        </form>
      </div>

      {/* Product List */}
      <div className="mt-8 w-full max-w-3xl">
        <h2 className="text-xl font-bold text-green-700 mb-4">Manage Medications</h2>
        {products.length === 0 ? (
          <p className="text-center text-gray-600">No medications available.</p>
        ) : (
          <table className="w-full border-collapse border border-green-500">
            <thead>
              <tr className="bg-green-500 text-white">
                <th className="p-2">ID</th>
                <th className="p-2">Name</th>
                <th className="p-2">Dosage</th>
                <th className="p-2">Price</th>
                <th className="p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id} className="bg-white border-b">
                  <td className="p-2 text-center">{product.id}</td>
                  <td className="p-2">{product.name}</td>
                  <td className="p-2">{product.dosage}</td>
                  <td className="p-2">${product.price}</td>
                  <td className="p-2">
                    <button
                      onClick={() => handleRemoveProduct(product.id)}
                      className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
