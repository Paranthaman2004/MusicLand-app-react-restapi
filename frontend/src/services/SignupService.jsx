import axios from "../Api/axios";
class SignupService {
  postUserDetails(uid,user) {
    return axios.post(`/signup/signupuser/${uid}`,user);
  }
}
export default new SignupService();
