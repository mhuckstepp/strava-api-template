import axios from 'axios';
import { CONSTANTS } from './constants';

export const axiosCodeClient = axios.create({
  baseURL: `${CONSTANTS.APP_URL}/users`,
  method: 'post',
});
