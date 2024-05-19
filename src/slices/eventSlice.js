import { createSlice } from "@reduxjs/toolkit";

// Slice
const eventSlice = createSlice({
  name: "event",

  initialState: {
    FormStage: 1, // default page stage to show on page load
    FormEvent: "",
    FormPersonal: "",
    FormPayment: ""
  },

  reducers: {
    formStage: (state, action) => {
      state.FormStage = action.payload;
    },
    formEvent: (state, action) => {
      state.FormEvent = action.payload;
    },
    formPersonal: (state, action) => {
      state.FormPersonal = action.payload;
    },
    formPayment: (state, action) => {
      state.FormPayment = action.payload;
    }
  }
});

// Actions
export const { formStage, formEvent, formPersonal } = eventSlice.actions;
export default eventSlice.reducer;
