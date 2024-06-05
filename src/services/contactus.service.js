import axios from "axios";
const API_URI = "http://localhost:8000/";
export const contactus = async (data) => {
    try {
      const response = await axios.post(
        API_URI + `contactus`,
        data,
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  };
