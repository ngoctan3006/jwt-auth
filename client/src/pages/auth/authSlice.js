import * as api from './authAPI';
import { createSlice } from '@reduxjs/toolkit';
import { API } from '../../apis';

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

export const userSelector = (state) => state.auth.user;

export const loadUser = () => async (dispatch) => {
  const token = localStorage.getItem('token');

  API.interceptors.request.use((req) => {
    if (token) {
      req.headers.authorization = `Bearer ${token}`;
    }
    return req;
  });

  try {
    dispatch(startLoading());
    const { data } = await api.getMe();
    dispatch(login(data));
    dispatch(endLoading());
    return data;
  } catch (error) {
    dispatch(endLoading());
    throw error;
  }
};

export const loginUser = (user) => async (dispatch) => {
  try {
    dispatch(startLoading());
    const { data } = await api.login(user);
    dispatch(login(data.user));
    dispatch(endLoading());
    localStorage.setItem('token', data.token);
    API.interceptors.request.use((req) => {
      req.headers.authorization = `Bearer ${data.token}`;
      return req;
    });
    return data;
  } catch (error) {
    dispatch(endLoading());
    throw error;
  }
};

export const getInfo = () => async (dispatch) => {
  try {
    dispatch(startLoading());
    const { data } = await api.getMe();
    dispatch(login(data));
    dispatch(endLoading());
    return data;
  } catch (error) {
    dispatch(endLoading());
    throw error;
  }
};

export const logoutUser = () => (dispatch) => {
  try {
    dispatch(startLoading());
    dispatch(logout());
    dispatch(endLoading());
  } catch (error) {
    dispatch(endLoading());
    throw error;
  }
};

export const changePassword = (formData) => async (dispatch) => {
  try {
    dispatch(startLoading());
    const { data } = await api.changePassword(formData);
    dispatch(endLoading());
    alert(data.message);
    dispatch(logout());
    return data;
  } catch (error) {
    dispatch(endLoading());
    alert(error?.response?.data?.message || 'Thất bại!');
    throw error;
  }
};

export default authSlice.reducer;
