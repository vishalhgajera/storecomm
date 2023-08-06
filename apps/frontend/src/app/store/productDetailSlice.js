import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../api/axiosInstance'

export const fetchProductDetail = createAsyncThunk('productDetail/fetchProductDetail', async (productId, thunkAPI) => {
  try {
    const url = `/product/${productId}`; 
    const response = await axiosInstance.get(url);
    return response.data.product;
  } catch (error) {
    console.error(error);
    throw error;
  }
});

const productDetailSlice = createSlice({
  name: 'productDetail',
  initialState: {
    isLoaded: false,
    product: {},
    error: null,
  },
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductDetail.pending, (state) => {
        state.isLoaded = false;
        state.error = null;
      })
      .addCase(fetchProductDetail.fulfilled, (state, action) => {
        state.isLoaded = true;
        state.product = action.payload;
        state.error = null;
      })
      .addCase(fetchProductDetail.rejected, (state, action) => {
        state.isLoaded = true;
        state.product = {};
        state.error = action.error.message;
      })
  },
});

export default productDetailSlice.reducer;
