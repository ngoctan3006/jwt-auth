import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../pages/auth/authSlice';
import lecturerReducer from '../pages/lecturer/lecturerSlice';
import studentReducer from '../pages/student/studentSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    lecturer: lecturerReducer,
    student: studentReducer,
  },
});
