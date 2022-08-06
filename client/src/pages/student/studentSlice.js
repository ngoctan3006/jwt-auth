import * as api from './studentAPI';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  classList: [],
  class: {},
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
    getClass: (state, action) => {
      state.class = action.payload;
    },
    getClassList: (state, action) => {
      state.classList = action.payload;
    },
    addClass: (state, action) => {
      state.classList.push(action.payload);
    },
    removeClass: (state, action) => {
      const index = state.classList.findIndex((item) => item.classCode === action.payload);
      state.classList.splice(index, 1);
    },
  },
});

export const { startLoading, endLoading, getClass, getClassList, addClass, removeClass } =
  studentSlice.actions;

export const classListSelector = (state) => state.student.classList;
export const classSelector = (state) => state.student.class;

export const getScore = (classCode) => async (dispatch) => {
  try {
    dispatch(startLoading());
    const { data } = await api.getClass(classCode);
    dispatch(getClass(data));
    dispatch(endLoading());
  } catch (error) {
    dispatch(endLoading());
    console.log(error);
  }
};

export const getClasses = () => async (dispatch) => {
  try {
    dispatch(startLoading());
    const { data } = await api.getClasses();
    dispatch(getClassList(data));
    dispatch(endLoading());
  } catch (error) {
    dispatch(endLoading());
    throw error;
  }
};

export const joinClass = (classCode) => async (dispatch) => {
  try {
    dispatch(startLoading());
    const { data } = await api.joinClass(classCode);
    // dispatch(addClass(data));
    alert(data.message);
    dispatch(endLoading());
  } catch (error) {
    dispatch(endLoading());
    alert(error.response.data.message || 'Lỗi!');
    throw error;
  }
};

export const outClass = (classCode) => async (dispatch) => {
  try {
    dispatch(startLoading());
    const { data } = await api.outClass(classCode);
    dispatch(removeClass(classCode));
    alert(data.message);
    dispatch(endLoading());
  } catch (error) {
    dispatch(endLoading());
    throw error;
  }
};

export default studentSlice.reducer;
