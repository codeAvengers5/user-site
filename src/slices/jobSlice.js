import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getUserJob, job_apply } from "@/services/job.service";
import axios from "axios";
const API_URI = "http://localhost:8000/";
axios.defaults.withCredentials = true;

export const applyToJob = createAsyncThunk(
  "jobApply/applyToJob",
  async ({ jobId, formData }, thunkAPI) => {
    try {
      const response = await job_apply(jobId, formData);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
export const fetchJob = createAsyncThunk(
  "jobApply/fetchjob",
  async (_, thunkAPI) => {
    try {
      const data = await getUserJob();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
const jobApplySlice = createSlice({
  name: "jobApply",
  initialState: {
    loading: false,
    error: null,
    success: false,
    jobApply: [
      {
        title: "",
        closingDate: "",
        status: "",
      }
    ]
  },
  reducers: {
    setJobs: (state, action) => {
      return action.payload;
    },
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
      })
      .addCase(fetchJob.pending, state => {
        state.loading = true;
      })
      .addCase(fetchJob.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.jobApply = action.payload.map((item) => ({
          title: item.job.title,
          closingDate: item.job.closingDate,
          status: item.jobVacancy.status,
        }));
      })
      .addCase(fetchJob.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload
          ? action.payload.message
          : "Failed to create job post";
      });
  }
});

export const { clearStatus, setJobs } = jobApplySlice.actions;

export default jobApplySlice.reducer;
