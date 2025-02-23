import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthPage from './Pages/AuthPage';
import HomePage from './Pages/HomePage';
import MedicineListing from './Pages/MedicineListingPage';
import MedicineDetails from './Pages/MedicineDetailsPage';
import CartPage from './Pages/CartPage';
import OrderTracking from './Pages/OrderTrackingPage';
import PharmacyDashboard from './Pages/PharmacyDashboardPage';
import AdminDashboard from './Pages/AdminDashboardPage';
import RegisterPage from './Pages/RegiterPage';
import UploadReport from './Pages/UploadReport';
import RecommendedMedicines from './Pages/RecommendedMedicines';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/search" element={<MedicineListing />} />
        <Route path="/medicine/:id" element={<MedicineDetails />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/track-order" element={<OrderTracking />} />
        <Route path="/pharmacy-dashboard" element={<PharmacyDashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/upload-report" element={<UploadReport />} />
        <Route path="/recommended-medicines" element={<RecommendedMedicines />} />
      </Routes>
    </Router>
  );
};

export default App;