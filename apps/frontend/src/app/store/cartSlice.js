import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../api/axiosInstance'

// Async Thunk for fetching cart data

export const fetchCartData = createAsyncThunk('cart/fetchCartData', async (_, thunkAPI) => {
  try {
    const url = '/cart/all'; // No need to use the full URL, as it's defined in the Axios instance
    const response = await axiosInstance.get(url);
    return response.data.cart;
  } catch (error) {
    console.error(error);
    throw error;
  }
});

// Async Thunk for updating cart data
export const fetchUpdateCartData = createAsyncThunk(
  'cart/fetchUpdateCartData',
  async ({ product, qty }, thunkAPI) => {
    try {
      const url = `/cart/${product._id}/${qty}`;
      await axiosInstance.post(url, null);
      return { product, qty };
    } catch (error) {
      console.error(error);
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
    // updateCartItem: (state, action) => {
    // },
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
        const newCartItems = state.cartItems;
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

// export const { updateCartItem } = cartSlice.actions;
export default cartSlice.reducer;
