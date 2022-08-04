import * as api from './authAPI';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  isAuthenticated: false,
  user: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    startLoading: (state) => {
      state.loading = true;
    },
    endLoading: (state) => {
      state.loading = false;
    },
    login: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export const { startLoading, endLoading, login, logout } = authSlice.actions;

export const loginUser = (user) => async (dispatch) => {
  try {
    dispatch(startLoading());
    const { data } = await api.login(user);
    dispatch(login(data));
    dispatch(endLoading());
    localStorage.setItem('token', data.token);
    return data;
  } catch (error) {
    dispatch(endLoading());
    throw error;
  }
};

export default authSlice.reducer;
