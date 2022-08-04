import { API } from '../../apis';

export const login = (data) => API.post('/users/signin', data);
