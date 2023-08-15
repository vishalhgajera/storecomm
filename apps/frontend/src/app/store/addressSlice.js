import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../api/axiosInstance';

// Async Thunk for fetching address data
export const fetchAddressList = createAsyncThunk('address/fetchAddressList', async (_, thunkAPI) => {
  try {
    const response = await axiosInstance.get('/address/all');
    return response.data.address;
  } catch (error) {
    console.error(error);
    throw error;
  }
});

// Async Thunk for adding new address
export const updateAddressList = createAsyncThunk('address/addAddress', async (data, thunkAPI) => {
  try {
    const response = await axiosInstance.post('/address/', data);
    return response.data.address;
  } catch (error) {
    console.error(error);
    throw error;
  }
});
// Async Thunk for deleting address data
export const deleteAddress = createAsyncThunk(
  'address/deleteAddress',
  async (addressId, thunkAPI) => {
    try {
      await axiosInstance.delete(`/address/${addressId}`,null);
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
      .addCase(fetchAddressList.pending, (state) => {
        state.isLoaded = false;
        state.error = null;
      })
      .addCase(fetchAddressList.fulfilled, (state, action) => {
        state.isLoaded = true;
        state.addressList = action.payload;
        state.error = null;
      })
      .addCase(fetchAddressList.rejected, (state, action) => {
        state.isLoaded = true;
        state.addressList = [];
        state.error = action.payload;
      })
      .addCase(updateAddressList.pending, (state) => {
        state.isLoaded = false;
        state.error = null;
      })
      .addCase(updateAddressList.fulfilled, (state, action) => {
        state.isLoaded = true;
        state.addressList = action.payload;
        state.error = null;
      })
      .addCase(updateAddressList.rejected, (state, action) => {
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
        const { addressId } = action.payload;
        const findById = state.addressList.findIndex((e) => e._id === addressId);
        if (findById > -1) {
          state.addressList.splice(findById,1)
        }
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