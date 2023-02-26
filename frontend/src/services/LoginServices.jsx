import axios from "../Api/axios";
class LoginServices {
  getLoginUser(uid) {
    return axios.get(`/login/${uid}`);
  }

  getLoginUserByEmailAndPass(email,password){
    return axios.get(`/login/${email}/${password}`);
  }
}
export default new LoginServices();
