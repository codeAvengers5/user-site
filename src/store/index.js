import { configureStore } from "@reduxjs/toolkit";
import jobApplyReducer from "../slices/jobSlice"; // Import the jobPostReducer
import authReducer from "../slices/auth";
import eventSlice from "@/slices/eventSlice";

const reducer = {
  jobApply: jobApplyReducer,
  event: eventSlice,
  auth: authReducer
};
const store = configureStore({
  reducer: reducer,
  devTools: true
});

export default store;
