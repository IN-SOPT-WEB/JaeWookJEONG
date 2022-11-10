import axios from 'axios';
import { instance } from './customAPI';

export const getUserList = url => axios.get(url).then(response => response.data);
export const getUserInfo = url => instance.get(url).then(response => response.data);
