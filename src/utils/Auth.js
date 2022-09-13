import jwtDecode from "jwt-decode";

const setToken = (token) => {
  localStorage.setItem("accessToken", token);
};

const setRefresh = (token) => {
  localStorage.setItem("refreshToken", token);
};

const getToken = () => {
  return localStorage.getItem("accessToken");
};

const getRefreshToken = () => {
  return localStorage.getItem("accessToken");
};

const getDecoded = (payload) => {
  const token = getToken();
  const t = token || payload;
  let decoded;
  if (payload || token) {
    decoded = jwtDecode(t);
  }

  return decoded;
};

const removeToken = () => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
};

const isAuthenticated = () => {
  const decodedToken = getDecoded();

  if (decodedToken) {
    const { exp } = decodedToken;

    const currentTime = Date.now() / 1000;

    return exp > currentTime;
  }

  return false;
};

const authService = {
  setRefresh,
  getToken,
  getRefreshToken,
  getDecoded,
  setToken,
  removeToken,
  isAuthenticated,
};

export default authService;
