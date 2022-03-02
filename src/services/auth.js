import axios from "axios";
import authHeader from "./auth-header";
const API_URL = "http://localhost:8080/api/auth/";

const register = (username, email, password) => {
  return axios.post(
    API_URL + "signup",
    {
      username,
      email,
      password,
      rol: "user",
    },
    {
      headers: authHeader(),
    }
  );
};

const login = (username, password) => {
  return axios
    .post(API_URL + "signin", {
      username,
      password,
    })
    .then((res) => {
      if (res.data.accessToken)
        localStorage.setItem("user", JSON.stringify(res.data));
      return res.data;
    });
};

const logout = () => localStorage.removeItem("user");

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const validateToken = async () => {
  const userToken = authHeader();
  if (userToken?.["x-access-token"]) {
    try {
      await axios.post(
        API_URL + "validate",
        {},
        {
          headers: userToken,
        }
      );
    } catch (err) {
      console.log(err.message);
      localStorage.removeItem("user");
    }
  } else {
    return null;
  }
};

const expdef = {
  login,
  register,
  logout,
  getCurrentUser,
  validateToken,
};

export default expdef;
