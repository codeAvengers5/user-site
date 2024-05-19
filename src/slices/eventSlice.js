import {
  createEvent,
  deleteEvent,
  updateEventId
} from "@/services/event.serivce";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const createEventappoint = createAsyncThunk(
  "event/appointevent",
  async (eventData, thunkAPI) => {
    try {
      const response = await createEvent(eventData);
      console.log(response);
      return response;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const updateExistingEvent = createAsyncThunk(
  "event/updateevent",
  async (eventData, thunkAPI) => {
    try {
      const response = await updateEventId(eventData);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
export const deleteExistingEvent = createAsyncThunk(
  "event/deleteevent",
  async (id, thunkAPI) => {
    try {
      const response = await deleteEvent(id);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
const eventSlice = createSlice({
  name: "event",
  initialState: {
    FormStage: 1,
    FormEvent: "",
    FormPersonal: "",
    FormInfo: "",
    FormPayment: "",
    loading: false,
    error: null,
    success: false,
    eventData: {}
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
    },
    formInfo: (state, action) => {
      state.FormInfo = action.payload;
    }
  },
  extraReducers: builder => {
    builder
      .addCase(createEventappoint.pending, state => {
        state.loading = true;
      })
      .addCase(createEventappoint.fulfilled, state => {
        state.loading = false;
        state.success = true;
      })
      .addCase(createEventappoint.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload
          ? action.payload.message
          : "Failed to create event";
      })
      .addCase(updateExistingEvent.pending, state => {
        state.loading = true;
      })
      .addCase(updateExistingEvent.fulfilled, state => {
        state.loading = false;
        state.success = true;
      })
      .addCase(updateExistingEvent.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload
          ? action.payload.message
          : "Failed to update event";
      })
      .addCase(deleteExistingEvent.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(deleteExistingEvent.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

// Actions
export const { formStage, formEvent, formPersonal, formPayment, formInfo } =
  eventSlice.actions;
export default eventSlice.reducer;
