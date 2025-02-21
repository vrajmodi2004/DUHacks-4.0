import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthPage from './Pages/AuthPage';
import HomePage from './Pages/HomePage';
import MedicineListing from './Pages/MedicineListingPage';
import MedicineDetails from './Pages/MedicineDetailsPage';
import CartPage from './Pages/CartPage';
import OrderTracking from './Pages/OrderTrackingPage';
import PharmacyDashboard from './Pages/PharmacyDashboardPage';
import AdminDashboard from './Pages/AdminDashboardPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/search" element={<MedicineListing />} />
        <Route path="/medicine/:id" element={<MedicineDetails />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/track-order" element={<OrderTracking />} />
        <Route path="/pharmacy-dashboard" element={<PharmacyDashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;