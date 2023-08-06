import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../api/axiosInstance';

// Async Thunk for fetching cart data

export const fetchLogin = createAsyncThunk('auth/fetchLogin', async ({data,navigate}, thunkAPI) => {
  try {
    const url = '/auth/login'; // No need to use the full URL, as it's defined in the Axios instance
    const response = await axiosInstance.post(url,{
        email: data.get('email'),
        password: data.get('password'),
      });
      console.log(response);
      const userToken = response.data;
      localStorage.setItem('accessToken', JSON.stringify(userToken));
      navigate('/');
      return userToken;
  } catch (error) {
    console.error(error);
    throw error;
  }
});

export const fetchSignup = createAsyncThunk('auth/fetchSignup', async ({data,navigate}, thunkAPI) => {
    try {
      const url = '/auth/signup'; // No need to use the full URL, as it's defined in the Axios instance
      const response = await axiosInstance.post(url,data);
      const userToken = response.data;
      localStorage.setItem('accessToken', JSON.stringify(userToken));
      navigate('/');
      return userToken;
    } catch (error) {
      console.error(error);
      throw error;
    }
  });

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    accessToken: JSON.parse(localStorage.getItem('accessToken')) || null,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.accessToken = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLogin.pending, (state) => {
        state.error = null;
      })
      .addCase(fetchLogin.fulfilled, (state, action) => {
        state.accessToken = action.payload;
        state.error = null;
      })
      .addCase(fetchLogin.rejected, (state, action) => {
        state.accessToken = null;
        state.error = action.error.message;
      })
      .addCase(fetchSignup.pending, (state) => {
        state.error = null;
      })
      .addCase(fetchSignup.fulfilled, (state, action) => {
        state.accessToken = action.payload;
        state.error = null;
      })
      .addCase(fetchSignup.rejected, (state, action) => {
        state.accessToken = null;
        state.error = action.error.message;
      })
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
