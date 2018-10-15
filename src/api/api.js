import axios from 'axios'
axios.defaults.baseURI = 'http://localhost:8080';
export const requestLogin = params => {
  return axios.post('user/login',params).then(res => res.data)};
