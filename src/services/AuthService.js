import axios from 'axios';
const url = 'https://localhost:44390/api/Authenticate/';
export default {
  login(credentials) {
    return axios
      .post(url + 'login/', credentials)
      .then(response => response.data);
  },
  signUp(credentials) {
    return axios
      .post(url + 'register/', credentials)
      .then(response => response.data);
  },
  getSecretContent() {
    return axios.get(url + 'secret-route/').then(response => response.data);
  }
};