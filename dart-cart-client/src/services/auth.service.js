import axios from "axios";

const API_URL = "http://localhost:8081/";
class AuthService {
  async login(username, password) {
    return axios
      .post(API_URL + "login", {
        username,
        password,
      })
      .then((response) => {
        if (response.headers) {
          localStorage.setItem("username", response.data.username);
          localStorage.setItem("accessToken", response.headers.authorization);
        }
      })
      .catch((error) => {
        return "invalid";
      });
  }

  logout() {
    // localStorage.removeItem("user");
    localStorage.removeItem("username");
    localStorage.removeItem("accessToken");
  }

  // getCurrentUser() {
  //   return localStorage.getItem("user");
  // }
  getCurrentUsername() {
    return localStorage.getItem("username");
  }
  getAccessToken() {
    return localStorage.getItem("accessToken");
  }
}
export default new AuthService();
