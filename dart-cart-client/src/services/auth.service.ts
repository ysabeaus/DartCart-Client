class AuthService {
  getAuthHeader() {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      return { Authorization: 'Bearer ' + accessToken };
    } else {
      return {};
    }
  }

  getCurrentUser() {
    return localStorage.getItem("user");
  }
  getCurrentUsername() {
    return localStorage.getItem("username");
  }
  getAccessToken() {
    return localStorage.getItem("accessToken");
  }
}

export default new AuthService();