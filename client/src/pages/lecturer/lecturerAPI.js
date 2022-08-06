import { API } from '../../apis';

export const getClassList = () => API.get('/class');
export const getCurrentClass = (id) => API.get(`/class/${id}`);
export const createClass = (data) => API.post('/class', data);
export const update = (id, data) => API.put(`/class/${id}`, data);
export const deleteClass = (id) => API.delete(`/class/${id}`);

export const getStudentList = (code) => API.get(`/students/student-list/${code}?status=1`);
export const getStudentPending = (code) => API.get(`/students/student-list/${code}?status=0`);

export const inputScore = (data) => API.put('/class/input-score', data);
export const addStudent = (data) => API.post('/class/add-student', data);
export const acceptStudent = (data) => API.put('/class/accept-student', data);
export const deleteStudent = (data) => API.post('/class/delete-student', data);
