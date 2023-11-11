import axios from 'axios';
import { CONSTANTS } from './constants';

const URL =
  process.env.NODE_ENV === 'development' ? 'localhost:3010' : CONSTANTS.APP_URL;

export const axiosCodeClient = axios.create({
  baseURL: `${URL}/users`,
  method: 'post',
});
