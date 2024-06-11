"use client";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import promoService from "@/services/promo.service";

export const fetchPromoData = createAsyncThunk(
  "promo/fetchPromo",
  async (_, thunkAPI) => {
    try {
      const response = await promoService.fetchPromo();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const initialState = {
  error: null,
  message: null,
  loading: false,
  data: []
};

const promoSlice = createSlice({
  name: "promo",
  initialState,
  reducers: {
    clearStatus: state => {
      state.loading = false;
      state.error = null;
      state.message = null;
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchPromoData.pending, state => {
        state.loading = true;
        state.error = null; // Clearing any previous errors on data fetch
      })
      .addCase(fetchPromoData.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.data = payload;
      })
      .addCase(fetchPromoData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message; // Setting the error message on data fetch failure
      });
  }
});

export const { clearStatus } = promoSlice.actions;
export default promoSlice.reducer;
