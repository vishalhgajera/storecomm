import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = process.env.NX_API_URL;
// Async Thunk for fetching cart data

export const fetchCartData = createAsyncThunk('cart/fetchCartData', async (_, thunkAPI) => {
  try {
    const url = `${API_URL}/cart/all`;  
    const token = JSON.parse(localStorage.getItem('accessToken'));
    // Assuming you have stored the JWT token in localStorage
    const config = {
      headers: {
        Authorization: `Bearer ${token.token}`,
      },
    };

    const response = await axios.get(url, config);
    return response.data.cart;
  } catch (error) {
    console.error(error);
    // Throwing error here will be caught in the rejected action
    throw error;
  }
});

// Async Thunk for updating cart data
export const fetchUpdateCartData = createAsyncThunk(
  'cart/fetchUpdateCartData',
  async ({ product, qty }, thunkAPI) => {
    try {
      const url = `${API_URL}/cart/${product._id}/${qty}`;
      const token = JSON.parse(localStorage.getItem('accessToken'));
      // Assuming you have stored the JWT token in localStorage
      const config = {
        headers: {
          Authorization: `Bearer ${token.token}`,
        },
      };

      await axios.post(url, null, config);
      return { product, qty };
    } catch (error) {
      console.error(error);
      // Throwing error here will be caught in the rejected action
      throw error;
    }
  }
);

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    isLoaded: false,
    cartItems: [],
    error: null,
  },
  reducers: {
    updateCartItem: (state, action) => {
      const { product, qty } = action.payload;
      const newCartItems = [...state.cartItems];
      const findById = newCartItems.findIndex((e) => e.product._id === product._id);
      if (findById > -1) {
        newCartItems.map((e) => (e.product._id === product._id ? (e.qty = qty) : e));
        state.cartItems = newCartItems.filter((e) => e.qty > 0);
      } else {
        newCartItems.push({ product, qty });
        state.cartItems = newCartItems;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCartData.pending, (state) => {
        state.isLoaded = false;
        state.error = null;
      })
      .addCase(fetchCartData.fulfilled, (state, action) => {
        state.isLoaded = true;
        state.cartItems = action.payload;
        state.error = null;
      })
      .addCase(fetchCartData.rejected, (state, action) => {
        state.isLoaded = true;
        state.cartItems = [];
        state.error = action.error.message;
      })
      .addCase(fetchUpdateCartData.pending, (state) => {
        state.error = null;
      })
      .addCase(fetchUpdateCartData.fulfilled, (state, action) => {
        const { product, qty } = action.payload;
        const newCartItems = [...state.cartItems];
        const findById = newCartItems.findIndex((e) => e.product._id === product._id);
        if (findById > -1) {
          newCartItems.map((e) => (e.product._id === product._id ? (e.qty = qty) : e));
          state.cartItems = newCartItems.filter((e) => e.qty > 0);
        } else {
          newCartItems.push({ product, qty });
          state.cartItems = newCartItems;
        }
      })
      .addCase(fetchUpdateCartData.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export const { updateCartItem } = cartSlice.actions;
export default cartSlice.reducer;
