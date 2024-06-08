// userService.js
import axios from "axios";
const API_URI = process.env.NEXT_PUBLIC_API_URI
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
    return await axios.post(API_URI + "registeruser", credentials, {
      withCredentials: true
    });
  }

const forgotPassword = async email => {
  const response =  axios.post(API_URI + "forgot-password", email, { withCredentials: true })
    return response;

};

const resetPassword = async data => {
  const response = axios
    .post(
      API_URI + `reset_password/${data.id}/${data.token}`,
      {
        password: data.password
      },
      { withCredentials: true }
    )
    return response.data;

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
