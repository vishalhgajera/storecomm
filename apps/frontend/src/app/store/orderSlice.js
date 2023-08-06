import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../api/axiosInstance'

// Async Thunk for fetching cart data

export const fetchOrderData = createAsyncThunk('order/fetchOrderData', async (_, thunkAPI) => {
  try {
    const url = '/order/all'; // No need to use the full URL, as it's defined in the Axios instance
    const response = await axiosInstance.get(url);
    return response.data.orders;
  } catch (error) {
    console.error(error);
    throw error;
  }
});

const orderSlice = createSlice({
  name: 'order',
  initialState: {
    isLoaded: false,
    orderList: [],
    error: null,
  },
  reducers: {
    updateOrderItem: (state, action) => {
      // state.orderList = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrderData.pending, (state) => {
        state.isLoaded = false;
        state.error = null;
      })
      .addCase(fetchOrderData.fulfilled, (state, action) => {
        state.isLoaded = true;
        state.orderList = action.payload;
        state.error = null;
      })
      .addCase(fetchOrderData.rejected, (state, action) => {
        state.isLoaded = true;
        state.orderList = [];
        state.error = action.error.message;
      })
  },
});

export const { updateOrderItem } = orderSlice.actions;
export default orderSlice.reducer;
