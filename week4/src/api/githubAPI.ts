import axios from 'axios';
import { instance } from './customAPI';

export const getUserList = (url: string) => axios.get(url).then(response => response.data);
export const getUserInfo = (url: string) => instance.get(url).then(response => response.data);
