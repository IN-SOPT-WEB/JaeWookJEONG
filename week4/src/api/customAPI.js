import axios from 'axios';

const token = process.env.REACT_APP_TOKEN;

export const instance = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    'Content-type': 'application/json',
    Authorization: `Bearer ${token}`,
  },
});
