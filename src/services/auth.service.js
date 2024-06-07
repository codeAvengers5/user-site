// userService.js
import axios from "axios";
const API_URI = "http://localhost:8000/";
axios.defaults.withCredentials = true;

const loginUser = async (email, password) => {
  try {
    const data = {
      email: email,
      password: password
    };
    const response = await axios.post(API_URI + "loginuser", data, {
      withCredentials: true
    });
    return response;
  } catch (error) {
    throw error.response.data.message;
  }
};

const registerUser = async credentials => {
  try {
    const response = await axios.post(API_URI + "registeruser", credentials, {
      withCredentials: true
    });
    return response.data;
  } catch (error) {
    throw error.response.data.message;
  }
};
const forgotPassword = async email => {
  return axios.post(API_URI + "forgot-password", email).then(response => {
    return response;
  });
};

const resetPassword = async data => {
  return axios
    .post(
      API_URI + `reset_password/${data.id}/${data.token}`,
      {
        password: data.password
      },
      { withCredentials: true }
    )
    .then(response => {
      return response.data;
    });
};
export const logout = () => {
  console.log("get");
  localStorage.removeItem("userInfo");
};

const authService = {
  registerUser,
  resetPassword,
  forgotPassword,
  resetPassword,
  loginUser,
  logout
};

export default authService;
