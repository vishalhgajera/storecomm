import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../api/axiosInstance'

// Async Thunk for fetching cart data
export const fetchCategories = createAsyncThunk('categorys/fetchCategories', async (_, thunkAPI) => {
  try {
    const url = '/category/all'; // No need to use the full URL, as it's defined in the Axios instance
    const response = await axiosInstance.get(url);
    return response.data.categories;
  } catch (error) {
    console.error(error);
    throw error;
  }
});
export const fetchCategoryById = createAsyncThunk('categorys/fetchCategoryById', async (categoryId, thunkAPI) => {
    try {
      const url = '/category/'+categoryId; // No need to use the full URL, as it's defined in the Axios instance
      const response = await axiosInstance.get(url);
      return response.data.categoryItem;
    } catch (error) {
      console.error(error);
      throw error;
    }
  });

const categorySlice = createSlice({
  name: 'categorys',
  initialState: {
    isLoaded: false,
    categoryItem: [],
    allCategories:[],
    error: null,
  },  
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.isLoaded = false;
        state.error = null;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.isLoaded = true;
        state.allCategories = action.payload;
        state.error = null;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.isLoaded = true;
        state.allCategories = [];
        state.error = action.error.message;
      })
      .addCase(fetchCategoryById.pending, (state) => {
        state.isLoaded = false;
        state.error = null;
      })
      .addCase(fetchCategoryById.fulfilled, (state, action) => {
        state.isLoaded = true;
        state.categoryItem = action.payload;
        state.error = null;
      })
      .addCase(fetchCategoryById.rejected, (state, action) => {
        state.isLoaded = true;
        state.categoryItem = [];
        state.error = action.error.message;
      })
  },
});
export default categorySlice.reducer;