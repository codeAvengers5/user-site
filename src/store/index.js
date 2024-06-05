import { configureStore } from "@reduxjs/toolkit";
import jobApplyReducer from "../slices/jobSlice"; // Import the jobPostReducer
import authReducer from "../slices/auth";
import eventSlice from "@/slices/eventSlice";
import newsReducer from "@/slices/newsSlices";
import contactReducer from "@/slices/contactusSlice"
const reducer = {
  jobApply: jobApplyReducer,
  event: eventSlice,
  news: newsReducer,
  auth: authReducer,
  contactus: contactReducer
};
const store = configureStore({
  reducer: reducer,
  devTools: true
});

export default store;
