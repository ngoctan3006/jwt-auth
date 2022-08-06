import { API } from '../../apis';

export const getClasses = () => API.get('/class/student');
export const joinClass = (classCode) => API.post('/class/request-join-class', { classCode });
export const outClass = (classCode) => API.post('/class/out-class', { classCode });
