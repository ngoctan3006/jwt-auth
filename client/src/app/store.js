import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../pages/auth/authSlice';
import lecturerReducer from '../pages/lecturer/lecturerSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    lecturer: lecturerReducer,
  },
});
