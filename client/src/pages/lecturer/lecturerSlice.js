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
    getClassList: (state, action) => {
      state.classList = action.payload;
    },
  },
});

export const { startLoading, endLoading, getClassList } = lecturerSlice.actions;

export const getClasses = () => async (dispatch) => {
  try {
    dispatch(startLoading());
    const { data } = await api.getClassList();
    dispatch(getClassList(data));
    dispatch(endLoading());
    return data;
  } catch (error) {
    dispatch(endLoading());
    throw error;
  }
};

export default lecturerSlice.reducer;
