import axios from 'axios';

const api = axios.create({
  baseURL: 'http://tchml.tradersclub.com.br:12000/api/',
});

export default api;
