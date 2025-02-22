import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaShoppingCart, FaUser, FaHome, FaPhoneAlt, FaEnvelope, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { MdLocalPharmacy } from 'react-icons/md';
import { IoLocationSharp } from 'react-icons/io5';
import fastDelivery from '../assets/fastdelivery.jpg';
import trustedPharmacy from '../assets/trustedpharmacy.jpg';
import securePayment from '../assets/securepayment.png';
import support from '../assets/support.png';
import affordablePrice from '../assets/affordable_price.jpg';
import trackOrder from '../assets/trackorder.avif';
import logo from '../assets/mainlogo.png';

const HomePage = () => {
  const [deliveryCode, setDeliveryCode] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="h-screen bg-white text-black">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-4 bg-green-600 shadow-lg text-white">
        <div className="flex items-center space-x-2">
          <img src={logo} alt="MedFast Logo" className="h-10 w-10" />
          <h1 className="text-2xl font-bold">MedFast</h1>
          
          {/* Delivery Address Dropdown */}
          <div className="relative">
            <button
              className="flex items-center bg-green-700 px-3 py-2 rounded-lg"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              <IoLocationSharp className="text-white mr-1" />
              Enter Delivery Address
            </button>
            {showDropdown && (
              <div className="absolute bg-white text-black mt-2 p-3 shadow-md rounded-lg">
                <input
                  type="text"
                  placeholder="Enter delivery code"
                  value={deliveryCode}
                  onChange={(e) => setDeliveryCode(e.target.value)}
                  className="p-2 border border-gray-300 rounded-lg w-48"
                />
              </div>
            )}
          </div>
        </div>
        
        {/* Navbar Icons */}
        <div className="flex space-x-6 text-lg items-center">
          <Link to="/" className="hover:text-yellow-400 text-white"><FaHome size={24} /></Link>
          <Link to="/search" className="hover:text-yellow-400 text-white"><FaSearch size={24} /></Link>
          <Link to="/cart" className="hover:text-yellow-400 text-white"><FaShoppingCart size={24} /></Link>
          <Link to="/profile" className="border-2 border-green-500 px-4 py-1 rounded-lg flex items-center bg-white text-green-600">
            <FaUser className="mr-1" /> Login
          </Link>
        </div>
      </nav>
      
      {/* Hero Section */}
      <div className="text-center mt-12">
        <h2 className="text-4xl font-bold">
          <span className="text-yellow-400">Get Medicines Fast</span>
          <span className="text-black"> with Superfast Delivery in your city</span>
        </h2>
      </div>
      
      {/* Feature Boxes */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 p-6 mt-8">
        {[fastDelivery, trustedPharmacy, securePayment, support, affordablePrice, trackOrder].map((img, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md flex flex-col items-center">
            <img src={img} alt={`Feature ${index + 1}`} className="h-24 w-24 object-cover rounded-lg" />
            <p>Feature {index + 1}</p>
          </div>
        ))}
      </div>
      
      {/* Additional Feature Buttons */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-6 mt-4">
        {[{ text: "Pharmacy Near Me", icon: MdLocalPharmacy },
          { text: "Emergency Medicines", icon: FaUser },
          { text: "Top Rated Pharmacies", icon: FaSearch },
          { text: "Order History", icon: FaShoppingCart }
        ].map((item, index) => (
          <button key={index} className="flex flex-col items-center bg-green-600 text-white p-4 rounded-lg shadow-md">
            <item.icon size={32} className="mb-2" />
            {item.text}
          </button>
        ))}
      </div>
      
      {/* Search Button */}
      <div className="text-center mt-8">
        <Link to="/search" className="bg-yellow-400 text-black px-6 py-3 rounded-lg text-lg font-bold hover:bg-yellow-500">Search Medicine</Link>
      </div>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white p-8 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div>
            <h3 className="text-lg font-bold mb-2">About MedFast</h3>
            <p>MedFast is your trusted partner for quick and secure medicine delivery at your doorstep.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">Customer Support</h3>
            <p><FaPhoneAlt className="inline mr-2" />+91 1234567890</p>
            <p><FaEnvelope className="inline mr-2" />support@medfast.com</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">Quick Links</h3>
            <ul>
              <li><Link to="/about" className="hover:text-yellow-400">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-yellow-400">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <FaFacebook size={24} className="hover:text-yellow-400" />
              <FaTwitter size={24} className="hover:text-yellow-400" />
              <FaInstagram size={24} className="hover:text-yellow-400" />
            </div>
          </div>
        </div>
        <div className="text-center text-sm mt-4">© 2025 MedFast. All Rights Reserved.</div>
      </footer>

      {/* FAQ Section */}
      <section className="p-8 bg-gray-100 mt-8">
        <h2 className="text-2xl font-bold text-center mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div><strong>Q: How can I place an order?</strong><br/>A: You can search for medicines, add them to your cart, and proceed to checkout.</div>
          <div><strong>Q: What are the delivery charges?</strong><br/>A: Delivery charges vary based on location and order value.</div>
          <div><strong>Q: Can I return medicines?</strong><br/>A: Returns are accepted for damaged or incorrect products.</div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
