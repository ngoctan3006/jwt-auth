import * as api from './studentAPI';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  classList: [],
};

export const studentSlice = createSlice({
  name: 'student',
  initialState,
  reducers: {
    startLoading: (state) => {
      state.loading = true;
    },
    endLoading: (state) => {
      state.loading = false;
    },
  },
});

export const { startLoading, endLoading } = studentSlice.actions;

export const classListSelector = (state) => state.student.classList;

export default studentSlice.reducer;
