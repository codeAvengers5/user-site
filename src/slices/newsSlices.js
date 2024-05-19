import axios from "axios";
const API_URI = "http://localhost:8000/";
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
  },
  // extraReducers: builder => {
  //   builder
  //     .addCase(searchNews.fulfilled, (state, { payload }) => {
  //       state.loading = false;
  //       state.users = payload;
  //     })
  //     .addCase(searchNews.rejected, (state, action) => {
  //       state.loading = false;
  //       state.userErr = action.payload; // Setting the error message on data fetch failure
  //     });
  // }
});

export const { setNews } = newsSlice.actions;

export default newsSlice.reducer;
