import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../api/axiosInstance';

// Async Thunk for fetching address data
export const fetchAddress = createAsyncThunk('address/fetchAddress', async (_, thunkAPI) => {
  try {
    console.log();
    const response = await axiosInstance.get('/address/all');
    return response.data.address;
  } catch (error) {
    console.error(error);
    throw error;
  }
});

// Async Thunk for adding new address
export const addAddress = createAsyncThunk('address/addAddress', async (_, thunkAPI) => {
  try {
    const response = await axiosInstance.post('/address/');
    return response.data.address;
  } catch (error) {
    console.error(error);
    throw error;
  }
});

// Async Thunk for updating address data
export const updateAddress = createAsyncThunk(
  'address/updateAddress',
  async ({ addressId }, thunkAPI) => {
    try {
      await axiosInstance.put(`/address/${addressId}`);
      return { addressId };
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
);

// Async Thunk for deleting address data
export const deleteAddress = createAsyncThunk(
  'address/deleteAddress',
  async ({ addressId }, thunkAPI) => {
    try {
      await axiosInstance.delete(`/address/${addressId}`);
      return { addressId };
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
);

const addressSlice = createSlice({
  name: 'address',
  initialState: {
    isLoaded: false,
    addressList: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAddress.pending, (state) => {
        state.isLoaded = false;
        state.error = null;
      })
      .addCase(fetchAddress.fulfilled, (state, action) => {
        state.isLoaded = true;
        state.addressList = action.payload;
        state.error = null;
      })
      .addCase(fetchAddress.rejected, (state, action) => {
        state.isLoaded = true;
        state.addressList = [];
        state.error = action.payload;
      })
      .addCase(addAddress.pending, (state) => {
        state.isLoaded = false;
        state.error = null;
      })
      .addCase(addAddress.fulfilled, (state, action) => {
        state.isLoaded = true;
        state.addressList = action.payload;
        state.error = null;
      })
      .addCase(addAddress.rejected, (state, action) => {
        state.isLoaded = true;
        state.addressList = [];
        state.error = action.payload;
      })
      .addCase(updateAddress.pending, (state) => {
        state.isLoaded = false;
        state.error = null;
      })
      .addCase(updateAddress.fulfilled, (state, action) => {
        state.isLoaded = true;
        state.addressList = action.payload;
        state.error = null;
      })
      .addCase(updateAddress.rejected, (state, action) => {
        state.isLoaded = true;
        state.addressList = [];
        state.error = action.payload;
      })
      .addCase(deleteAddress.pending, (state) => {
        state.isLoaded = false;
        state.error = null;
      })
      .addCase(deleteAddress.fulfilled, (state, action) => {
        state.isLoaded = true;
        state.addressList = action.payload;
        state.error = null;
      })
      .addCase(deleteAddress.rejected, (state, action) => {
        state.isLoaded = true;
        state.addressList = [];
        state.error = action.payload;
      });
  },
});

export default addressSlice.reducer;