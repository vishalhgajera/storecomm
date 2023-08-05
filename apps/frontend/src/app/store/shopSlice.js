import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import env from '../../../env.json';

const shopSlice = createSlice({
  name: 'shop',
  initialState: {
    isLoaded: false,
    items: [],
    products: [],
    error: null,
  },
  reducers: {
    setShopData: (state, action) => {
      state.isLoaded = true;
      state.products = action.payload.products;
    },
    setError: (state, action) => {
      state.isLoaded = true;
      state.error = action.payload;
    },
    setFilterList: (state, action) => {
      const newItems = state.items.filter((item) => item.category.name === action.payload);
      state.products = newItems.slice(0, 20);
    },
    setFullList: (state) => {
      state.products = state.items;
    },
  },
});

export const { setShopData, setError, setFilterList, setFullList } = shopSlice.actions;
export default shopSlice.reducer;

// Async Thunk for fetching data
export const fetchShopData = () => async (dispatch) => {
  try {
    const url = `${env.API_URL}/product/all`;
    const response = await axios.get(url);
    dispatch(setShopData({ items: response.data.product, products: response.data.product.slice(0, 20) }));
  } catch (error) {
    dispatch(setError(error.message));
  }
};
