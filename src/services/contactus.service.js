import axios from "axios";
const API_URI = process.env.NEXT_PUBLIC_API_URI
export const contactus = async (data) => {
  try {
    const response = await axios.post(
      API_URI + `contactus`,
      data,
      {
      withCredentials: true
      } 
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
