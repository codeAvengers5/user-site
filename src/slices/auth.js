import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "@/services/auth.service";
import { setMessage } from "./message";

export const register = createAsyncThunk(
  "auth/register",
  async (formData, thunkAPI) => {
    try {
      const response = await authService.registerUser(formData);
      return response;
    } catch (error) {
      console.log(error);
      const message =
        (error.response && error.response.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await authService.loginUser(email, password);
      console.log("res", response);
      thunkAPI.dispatch(setMessage(response.message));
      return response; // Assuming the response structure is { userInfo: {...} }
    } catch (error) {
      console.log(error);
      const message =
        (error.response && error.response.message) ||
        error.message ||
        error.toString();
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const forgotPassword = createAsyncThunk(
  "auth/forgotpassword",
  async (email, thunkAPI) => {
    try {
      const data = await authService.forgotPassword(email);
      thunkAPI.dispatch(setMessage(data.message));
      return data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue();
    }
  }
);

export const resetPassword = createAsyncThunk(
  "auth/resetPassword",
  async ({ id, token, password }, thunkAPI) => {
    try {
      const data = await authService.resetPassword({ id, token, password });
      thunkAPI.dispatch(setMessage(data.message));
      return data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue();
    }
  }
);
export const resetState = createAsyncThunk("auth/resetState", async () => {
  return {};
});

const initialState = {
  isLoggedIn: false,
  //   user:
  //   typeof window !== "undefined" && localStorage.getItem("userInfo")
  //     ? JSON.parse(localStorage.getItem("userInfo"))
  //     : null,
  loading: false,
  data: null,
  error: null,
  status: null,
  success: false,
  msg: null
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, (state, { payload }) => {
        state.isLoggedIn = true;
        state.loading = false;
        state.data = payload.userInfo;
        state.error = null;
        state.success = true; // Clearing any previous errors on successful registration
        state.msg = payload.message;
      })
      .addCase(register.pending, state => {
        state.loading = true;
        state.error = null; // Clearing any previous errors on login attempt
        state.success = false;
      })
      .addCase(register.rejected, (state, { payload }) => {
        console.log("rr", payload);
        state.isLoggedIn = false;
        state.loading = false;
        state.error = payload; // Setting the error message on registration failure
        state.success = false;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.msg = payload.message;
        state.isLoggedIn = true;
        state.loading = false;
        state.user = payload.userInfo;
        // if (typeof window !== "undefined") {
        //   localStorage.setItem("userInfo", JSON.stringify(state.user));
        // }
        state.error = null;
        state.success = true; // Clearing any previous errors on successful login
        state.msg = payload.message;
      })
      .addCase(login.pending, state => {
        state.loading = true;
        state.error = null; // Clearing any previous errors on login attempt
        state.success = false;
      })
      .addCase(login.rejected, (state, { payload }) => {
        state.isLoggedIn = false;
        state.loading = false;
        state.user = null;
        state.error = payload;
        console.log("pl", payload);
        state.success = false; // Setting the error message on login failure
      })
      .addCase(forgotPassword.pending, state => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(forgotPassword.fulfilled, state => {
        state.loading = false;
        state.error = null;
        state.success = true;
      })
      .addCase(forgotPassword.rejected, (state, action) => {
        state.loading = false;
        state.success = null;
        state.error = action.error.message;
      })
      .addCase(resetState.fulfilled, state => {
        return initialState;
      });
  }
});

export const { reducer } = authSlice.actions;
export default authSlice.reducer;
