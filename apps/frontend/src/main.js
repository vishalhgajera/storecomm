import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from './app/app';
import AuthProvider from '../src/app/context/AuthContext'; // Import the AuthProvider
import ProductProvider from './app/context/ProductContext';
import ShopProvider from './app/context/ShopContext';
import CartProvider from './app/context/CartContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <BrowserRouter>
    <AuthProvider>  
    <ShopProvider>
    <ProductProvider>
      <CartProvider>
      <App />
      </CartProvider>
    </ProductProvider>
    </ShopProvider>
    </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
