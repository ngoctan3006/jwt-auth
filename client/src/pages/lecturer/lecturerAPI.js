import { API } from '../../apis';

export const getClassList = () => API.get('/class');
export const createClass = (data) => API.post('/class', data);
export const update = (id, data) => API.put(`/class/${id}`, data);
export const deleteClass = (id) => API.delete(`/class/${id}`);
