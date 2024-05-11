import { configureStore } from "@reduxjs/toolkit";
import jobApplyReducer from "../slices/jobSlice"; // Import the jobPostReducer
const reducer = {
  jobApply: jobApplyReducer
};
const store = configureStore({
  reducer: reducer,
  devTools: true
});

export default store;
