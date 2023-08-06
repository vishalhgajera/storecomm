// import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from './app/app';
import AuthProvider from '../src/app/context/AuthContext'; // Import the AuthProvider
import { Provider } from 'react-redux';
import store from './app/store/store';
import ProductProvider from './app/context/ProductContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <AuthProvider>
      <ProductProvider>
      <Provider store={store}>
         <App />
      </Provider>
      </ProductProvider>
    </AuthProvider>
    </BrowserRouter>
);


