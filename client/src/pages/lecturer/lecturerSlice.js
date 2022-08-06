import * as api from './lecturerAPI';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  info: null,
  classList: [],
  currentClass: {},
  studentList: [],
  studentPending: [],
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
    getCurrentClass: (state, action) => {
      state.currentClass = action.payload;
    },
    addClass: (state, action) => {
      state.classList.push(action.payload);
    },
    update: (state, action) => {
      const index = state.classList.findIndex((item) => item.id === action.payload.id);
      state.classList[index] = action.payload;
    },
    remove: (state, action) => {
      const index = state.classList.findIndex((item) => item.id === action.payload);
      state.classList.splice(index, 1);
    },
    getStudentList: (state, action) => {
      state.studentList = action.payload;
    },
    getStudentPending: (state, action) => {
      state.studentPending = action.payload;
    },
    addStudent: (state, action) => {
      state.studentList.push(action.payload);
    },
    acceptStudent: (state, action) => {
      const index = state.studentPending.findIndex((item) => item.code === action.payload.code);
      state.studentList.push(state.studentPending[index]);
      state.studentPending.splice(index, 1);
    },
    inputScore: (state, action) => {
      const index = state.studentList.findIndex((item) => item.id === action.payload.id);
      state.studentList[index] = action.payload;
    },
    removeStudent: (state, action) => {
      const index = state.studentList.findIndex(
        (item) => item.studentCode === action.payload.studentCode
      );
      state.studentList.splice(index, 1);
    },
    removePending: (state, action) => {
      const index = state.studentPending.findIndex(
        (item) => item.studentCode === action.payload.studentCode
      );
      state.studentPending.splice(index, 1);
    },
  },
});

export const {
  startLoading,
  endLoading,
  getClassList,
  addClass,
  update,
  remove,
  getCurrentClass,
  getStudentList,
  getStudentPending,
  addStudent,
  acceptStudent,
  inputScore,
  removeStudent,
  removePending,
} = lecturerSlice.actions;

export const classListSelector = (state) => state.lecturer.classList;
export const currentClassSelector = (state) => state.lecturer.currentClass;
export const studentListSelector = (state) => state.lecturer.studentList;
export const studentPendingSelector = (state) => state.lecturer.studentPending;

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

export const getCurrent = (id) => async (dispatch) => {
  try {
    dispatch(startLoading());
    const { data } = await api.getCurrentClass(id);
    dispatch(getCurrentClass(data));
    dispatch(endLoading());
    return data;
  } catch (error) {
    dispatch(endLoading());
    throw error;
  }
};

export const createClass = (formData) => async (dispatch) => {
  try {
    dispatch(startLoading());
    const { data } = await api.createClass(formData);
    dispatch(addClass(data));
    dispatch(endLoading());
    alert('Thêm lớp học thành công');
    return data;
  } catch (error) {
    dispatch(endLoading());
    throw error;
  }
};

export const updateClass = (id, formData) => async (dispatch) => {
  try {
    dispatch(startLoading());
    const { data } = await api.update(id, formData);
    dispatch(update({ ...formData, id }));
    dispatch(endLoading());
    alert('Cập nhật thành công');
    return data;
  } catch (error) {
    dispatch(endLoading());
    alert('Cập nhật thất bại');
  }
};

export const deleteClass = (id) => async (dispatch) => {
  try {
    dispatch(startLoading());
    await api.deleteClass(id);
    dispatch(remove(id));
    dispatch(endLoading());
    alert('Xóa thành công');
  } catch (error) {
    dispatch(endLoading());
    alert('Xóa thất bại');
  }
};

export const getStudents = (code) => async (dispatch) => {
  try {
    dispatch(startLoading());
    const { data } = await api.getStudentList(code);
    dispatch(getStudentList(data));
    dispatch(endLoading());
    return data;
  } catch (error) {
    dispatch(endLoading());
    throw error;
  }
};

export const getStudentsPending = (code) => async (dispatch) => {
  try {
    dispatch(startLoading());
    const { data } = await api.getStudentPending(code);
    dispatch(getStudentPending(data));
    dispatch(endLoading());
    return data;
  } catch (error) {
    dispatch(endLoading());
    throw error;
  }
};

export const addStudentToClass = (formData) => async (dispatch) => {
  try {
    dispatch(startLoading());
    const { data } = await api.addStudent(formData);
    dispatch(addStudent(data));
    dispatch(endLoading());
    alert('Thêm học sinh thành công');
    return data;
  } catch (error) {
    dispatch(endLoading());
    alert(error?.response?.data?.message || 'Thêm học sinh thất bại');
  }
};

export const acceptStudentJoinClass = (formData) => async (dispatch) => {
  try {
    dispatch(startLoading());
    const { data } = await api.acceptStudent(formData);
    dispatch(acceptStudent(formData));
    dispatch(endLoading());
    alert('Thêm sinh viên thành công!');
    return data;
  } catch (error) {
    dispatch(endLoading());
    alert(error?.response?.data?.message || 'Thất bại!');
  }
};

export const inputStudentScore = (formData) => async (dispatch) => {
  try {
    dispatch(startLoading());
    await api.inputScore(formData);
    dispatch(inputScore(formData));
    dispatch(endLoading());
  } catch (error) {
    dispatch(endLoading());
    throw error;
  }
};

export const deleteStudent = (formData) => async (dispatch) => {
  try {
    dispatch(startLoading());
    await api.deleteStudent(formData);
    dispatch(removeStudent(formData));
    dispatch(endLoading());
  } catch (error) {
    dispatch(endLoading());
    throw error;
  }
};

export const deletePending = (formData) => async (dispatch) => {
  try {
    dispatch(startLoading());
    await api.deleteStudent(formData);
    dispatch(removePending(formData));
    dispatch(endLoading());
  } catch (error) {
    dispatch(endLoading());
    throw error;
  }
};

export default lecturerSlice.reducer;
