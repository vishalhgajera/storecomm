import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import shopReducer from './shopSlice';
import cartReducer from './cartSlice';

const middleware = [...getDefaultMiddleware()];

const store = configureStore({
  reducer: {
    shop: shopReducer,
    cart: cartReducer,
  },
  middleware,
});

export default store;
