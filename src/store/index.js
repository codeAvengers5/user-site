import { configureStore } from "@reduxjs/toolkit";
import jobApplyReducer from "../slices/jobSlice"; // Import the jobPostReducer
import eventSlice from "@/slices/eventSlice";
import newsReducer from "@/slices/newsSlices"
const reducer = {
  jobApply: jobApplyReducer,
  event: eventSlice,
  news:newsReducer
};
const store = configureStore({
  reducer: reducer,
  devTools: true
});

export default store;
