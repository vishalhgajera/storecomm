// orderDetailSlice

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../api/axiosInstance';

// Async Thunk for fetching cart data

export const fetchOrderById = createAsyncThunk('orderDetails/fetchOrderById', async (orderId, thunkAPI) => {
  try {
    const url = `/order/${orderId}`; // No need to use the full URL, as it's defined in the Axios instance
    const response = await axiosInstance.get(url);
    return response.data.order;
  } catch (error) {
    console.error(error);
    throw error;
  }
});

const orderDetailSlice = createSlice({
  name: 'orderDetails',
  initialState: {
    isLoaded: false,
    orderDetail: {},
    error: null,
  },
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrderById.pending, (state) => {
        state.isLoaded = false;
        state.error = null;
      })
      .addCase(fetchOrderById.fulfilled, (state, action) => {
        state.isLoaded = true;
        state.orderDetail = action.payload;
        state.error = null;
      })
      .addCase(fetchOrderById.rejected, (state, action) => {
        state.isLoaded = false;
        state.orderDetail = {};
        state.error = action.error.message;
      })
  },
});

export default orderDetailSlice.reducer;
