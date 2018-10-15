import axios from 'axios'
axios.default.baseURI = 'http://127.0.0.1:80';
export const requestLogin = params => {return axios.post('user/login',params).then(res => res.data)}
