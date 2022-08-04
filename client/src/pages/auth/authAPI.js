import { API } from '../../apis';

export const login = (data) => API.post('/users/signin', data);
export const getMe = () => API.get('/users');
export const changePassword = (data) => API.put('/users/change-password', data);
