import axios from 'axios';

const api = axios.create({
  baseURL: 'http://177.136.200.163:213/datasnap/rest/TSMDefault',
  auth: {
    // Informar dados corretos ao fazer clone
    username: 'xxxxx',
    password: 'xxxx',
  },
});

export default api;
