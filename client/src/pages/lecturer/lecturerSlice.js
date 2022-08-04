import * as api from './lecturerAPI';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  info: null,
  classList: [],
};

export const lecturerSlice = createSlice({
  name: 'lecturer',
  initialState,
  reducers: {
    startLoading: (state) => {
      state.loading = true;
    },
    endLoading: (state) => {
      state.loading = false;
    },
    setInfo: (state, action) => {
      state.info = action.payload;
    },
  },
});

export const { startLoading, endLoading, setInfo } = lecturerSlice.actions;

export default lecturerSlice.reducer;
