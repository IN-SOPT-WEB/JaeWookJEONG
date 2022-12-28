import axios from 'axios';
import { instance } from './customAPI';

export const getUserList = async () => {
  const response = await axios.get('/api/users');
  return response.data;
};
export const getUserInfo = async (props: string) => {
  const response = await instance.get(`/users/${props}`);
  return response.data;
};
