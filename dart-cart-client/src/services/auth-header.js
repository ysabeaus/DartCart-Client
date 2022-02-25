
export default function authHeader() {
  const user = localStorage.getItem("username");
  const accessToken = localStorage.getItem("accessToken");
    if (user && accessToken) {
      return { Authorization: 'Bearer ' + accessToken };
    } else {
      return {};
    }
  }