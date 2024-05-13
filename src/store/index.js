import { configureStore } from "@reduxjs/toolkit";
import jobApplyReducer from "../slices/jobSlice"; // Import the jobPostReducer
import authReducer from "../slices/auth";
const reducer = {
  jobApply: jobApplyReducer,
  auth: authReducer
};
const store = configureStore({
  reducer: reducer,
  devTools: true
});

export default store;
