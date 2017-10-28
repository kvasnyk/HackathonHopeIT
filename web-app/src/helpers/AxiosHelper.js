import AuthHelper from './AuthHelper';
import Axios from 'axios';
import Qs from 'qs';

const axiosInstance = Axios.create({
  baseURL: 'http://localhost:56700/api/',
  timeout: 30000
});

class AxiosHelper {
  static instance = axiosInstance;

  static token = (username, password) => AxiosHelper.instance.post('/token', Qs.stringify({
    grant_type: 'password',
    username: username,
    password: password
  }));

  static sendMessage = (subject, content, recipients) => AxiosHelper.instance.post('/messages/send', {
    subject: subject,
    content: content,
    recipients: recipients
  }, {
    headers: {
      'Authorization': 'Bearer ' + AuthHelper.getToken()
    }
  });

  static findUsers = () => AxiosHelper.instance.get('/users/test', {
    headers: {
      'Authorization': 'Bearer ' + AuthHelper.getToken()
    }
  });
}

export default AxiosHelper;