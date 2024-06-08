import axios from "axios";
const API_URI = process.env.NEXT_PUBLIC_API_URI
import { createSlice } from "@reduxjs/toolkit";
export async function getAllNews() {
  try {
    const response = await axios.get(API_URI + "getAllNews");
    return response.data;
  } catch (error) {
    throw error || "Failed to fetch job posts";
  }
}

export const getNewsById = async id => {
  try {
    const response = await axios.get(API_URI + `getNewsById/${id}`);
    return response.data;
  } catch (error) {
    throw error.response.data.error || "Failed to fetch job post by ID";
  }
};
export const searchNews = async title => {
  try {
    const response = await axios.get(API_URI + `searchnews?title=${title}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
const newsSlice = createSlice({
  name: "news",
  initialState: [],

  reducers: {
    setNews: (state, action) => {
      return action.payload;
    }
  }
});

export const { setNews } = newsSlice.actions;

export default newsSlice.reducer;
