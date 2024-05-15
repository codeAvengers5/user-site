import { configureStore } from "@reduxjs/toolkit";
import jobApplyReducer from "../slices/jobSlice"; // Import the jobPostReducer
import eventSlice from "@/slices/eventSlice";

const reducer = {
  jobApply: jobApplyReducer,
  event: eventSlice
};
const store = configureStore({
  reducer: reducer,
  devTools: true
});

export default store;
