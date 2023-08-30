import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../api/axiosInstance'

// Async Thunk for fetching cart data
export const fetchProductData = createAsyncThunk('products/fetchProductData', async (_, thunkAPI) => {
  try {
    const url = '/product/all'; // No need to use the full URL, as it's defined in the Axios instance
    const response = await axiosInstance.get(url);
    return response.data.product;
  } catch (error) {
    console.error(error);
    throw error;
  }
});

const productSlice = createSlice({
  name: 'products',
  initialState: {
    isLoaded: false,
    productList: [],
    allProducts:[],
    error: null,
  },
  reducers: {
    setFilterList: (state, action) => {
      const newItems = state.allProducts.filter((item) => item.category.name === action.payload);
      state.productList = newItems.slice(0, 20);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductData.pending, (state) => {
        state.isLoaded = false;
        state.error = null;
      })
      .addCase(fetchProductData.fulfilled, (state, action) => {
        state.isLoaded = true;
        state.allProducts = action.payload;
        state.productList = state.allProducts.slice(0, 20);
        state.error = null;
      })
      .addCase(fetchProductData.rejected, (state, action) => {
        state.isLoaded = true;
        state.allProducts = [];
        state.productList = [];
        state.error = action.error.message;
      })
  },
});
export const { setFilterList } = productSlice.actions;
export default productSlice.reducer;
