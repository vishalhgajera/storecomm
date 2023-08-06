// import { createSlice } from '@reduxjs/toolkit';
// import axios from 'axios';

// const API_URL = process.env.NX_API_URL;
// const shopSlice = createSlice({
//   name: 'shop',
//   initialState: {
//     isLoaded: false,
//     items: [],
//     products: [],
//     error: null,
//   },
//   reducers: {
//     setShopData: (state, action) => {
//       state.isLoaded = true;
//       state.products = action.payload.products;
//     },
//     setError: (state, action) => {
//       state.isLoaded = true;
//       state.error = action.payload;
//     },
//     setFilterList: (state, action) => {
//       const newItems = state.items.filter((item) => item.category.name === action.payload);
//       state.products = newItems.slice(0, 20);
//     },
//     setFullList: (state) => {
//       state.products = state.items;
//     },
//   },
// });

// export const { setShopData, setError, setFilterList, setFullList } = shopSlice.actions;
// export default shopSlice.reducer;

// // Async Thunk for fetching data
// export const fetchShopData = () => async (dispatch) => {
//   try {
//     const url = `${API_URL}/product/all`;
//     const response = await axios.get(url);
//     dispatch(setShopData({ items: response.data.product, products: response.data.product.slice(0, 20) }));
//   } catch (error) {
//     dispatch(setError(error.message));
//   }
// };


import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../api/axiosInstance'

// Async Thunk for fetching cart data
export const fetchProductData = createAsyncThunk('product/fetchProductData', async (_, thunkAPI) => {
  try {
    const url = '/product/all'; // No need to use the full URL, as it's defined in the Axios instance
    const response = await axiosInstance.get(url);
    return response.data.product;
  } catch (error) {
    console.error(error);
    throw error;
  }
});
export const fetchProductDetail = createAsyncThunk('product/fetchProductDetail', async (productId, thunkAPI) => {
  try {
    const url = `/product/${productId}`; // No need to use the full URL, as it's defined in the Axios instance
    const response = await axiosInstance.get(url);
    return response.data.product;
  } catch (error) {
    console.error(error);
    throw error;
  }
});

const productSlice = createSlice({
  name: 'product',
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
