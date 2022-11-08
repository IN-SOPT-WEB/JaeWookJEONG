import axios from 'axios';
import { instance } from './customAPI';

export const getUserList = async () => {
  try {
    const res = await axios.get('/api/users');
    return res.data.items;
  } catch (e) {
    throw e;
  }
};

export const getUserInfo = async username => {
  try {
    const res = await instance.get(`/users/${username}`);
    return res.data;
  } catch (e) {
    throw e;
  }
};
