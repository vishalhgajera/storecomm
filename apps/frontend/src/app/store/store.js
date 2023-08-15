import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import productReducer from './productSlice';
import cartReducer from './cartSlice';
import orderReducer from './orderSlice';
import addressReducer from './addressSlice';
import productDetailSlice from './productDetailSlice';
import authSlice from './authSlice';

const middleware = [...getDefaultMiddleware()];

const store = configureStore({
  reducer: {
    products: productReducer,
    address: addressReducer,
    productDetail:productDetailSlice,
    cart: cartReducer,
    order: orderReducer,
    auth: authSlice
  },
  middleware,
});

export default store;
