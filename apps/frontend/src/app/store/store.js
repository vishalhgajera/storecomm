import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import productReducer from './productSlice';
import cartReducer from './cartSlice';
import orderReducer from './orderSlice';

const middleware = [...getDefaultMiddleware()];

const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
    order: orderReducer,
  },
  middleware,
});

export default store;
