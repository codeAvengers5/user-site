// // jobSlice.js
// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { applyToJob as applyToJobAPI} from "../services/job.service"

// export const applyToJob = createAsyncThunk(
//   'jobs/applyToJob',
//   async ({ jobId, formData }, { rejectWithValue }) => {
//     console.log("metoal",jobId,formData)
//     try {
//       const response = await applyToJobAPI(jobId, formData);
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

// const jobSlice = createSlice({
//   name: 'jobs',
//   initialState: {
//     loading: false,
//     success: false,
//     error: null,
//     appliedJob: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(applyToJob.pending, (state) => {
//         state.success=false;
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(applyToJob.fulfilled, (state, action) => {
//         state.success= true;
//         state.loading = false;
//         state.appliedJob = action.payload;
//       })
//       .addCase(applyToJob.rejected, (state, action) => {
//         state.success= false;
//         state.loading = false;
//         state.error = action.payload;
//       });
//   },
// });

// export default jobSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { job_apply } from "@/services/job.service";

// Create a new job post
export const applyToJob = createAsyncThunk(
  "jobApply/applyToJob",
  async ({ jobId, formData }, thunkAPI) => {
    console.log("metoal", jobId, formData);
    try {
      const response = await job_apply(jobId, formData);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const jobApplySlice = createSlice({
  name: "jobApply",
  initialState: {
    loading: false,
    error: null,
    success: false,
    jobApply: [] // Store job posts fetched from API
  },
  reducers: {
    clearStatus: state => {
      state.loading = false;
      state.error = null;
      state.success = false;
    }
  },
  extraReducers: builder => {
    builder
      .addCase(applyToJob.pending, state => {
        state.loading = true;
      })
      .addCase(applyToJob.fulfilled, state => {
        state.loading = false;
        state.success = true;
      })
      .addCase(applyToJob.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload
          ? action.payload.message
          : "Failed to create job post";
      });
  }
});

export const { clearStatus } = jobApplySlice.actions;

export default jobApplySlice.reducer;
