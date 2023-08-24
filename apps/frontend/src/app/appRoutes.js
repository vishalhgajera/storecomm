import { Route, Routes } from 'react-router-dom';
import HomePage from './components/pages/home-page/HomePage';
import SignupPage from './components/pages/signup-page/SignupPage';
import LoginPage from './components/pages/login-page/LoginPage';
import ShopPage from './components/pages/shop-page/ShopPage';
import ActivityPage from './components/pages/activity-page/ActivityPage';
import ProductPage from './components/pages/product-page/ProductPage';
import CheckoutPage from './components/pages/checkout-page/CheckoutPage';
import ProfilePage from './components/pages/profile-page/ProfilePage';
import OrderDetailPage from './components/pages/order-detail-page/OrderDetailPage';

export function AppRoutes() {
  return (
    <Routes>
      <Route path={'/'} element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/shop" element={<ShopPage/>} />
      <Route path="/product/:productId" element={<ProductPage />} />
      <Route path="/order/:orderId" element={<OrderDetailPage />} />
      <Route path="/activity" element={<ActivityPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/profile" element={<ProfilePage />} />
    </Routes>
  );
}

export default AppRoutes;
