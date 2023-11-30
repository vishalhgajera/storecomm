import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import productReducer from './productSlice';
import categoryReducer from './categorySlice';
import cartReducer from './cartSlice';
import orderReducer from './orderSlice';
import orderDetailReducer from './orderDetailSlice';
import addressReducer from './addressSlice';
import productDetailSlice from './productDetailSlice';
import authSlice from './authSlice';

const middleware = [...getDefaultMiddleware()];

const store = configureStore({
  reducer: {
    products: productReducer,
    categories: categoryReducer,
    address: addressReducer,
    productDetail:productDetailSlice,
    cart: cartReducer,
    order: orderReducer,
    orderDetail:orderDetailReducer,
    auth: authSlice
  },
  middleware,
});

export default store;
