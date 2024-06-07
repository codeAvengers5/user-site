import {
  createEvent,
  deleteEvent,
  getEventId,
  getUserEventId,
  updateEventId
} from "@/services/event.serivce";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const createEventappoint = createAsyncThunk(
  "event/appointevent",
  async (eventData, thunkAPI) => {
    try {
      const response = await createEvent(eventData);
      return response;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const updateExistingEvent = createAsyncThunk(
  "event/updateevent",
  async (event, thunkAPI) => {
    console.log(event);
    try {
      const response = await updateEventId(event);
      console.log(response);
      return response;
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
export const fetchEvent = createAsyncThunk(
  "event/fetchevent",
  async (_, thunkAPI) => {
    try {
      const eventData = await getUserEventId();
      return eventData;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const getEventById = createAsyncThunk(
  "event/getEvent",
  async (id, thunkAPI) => {
    try {
      const eventData = await getEventId(id);
      console.log(eventData);
      return eventData;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
const eventSlice = createSlice({
  name: "event",
  initialState: {
    updateventId: "",
    FormStage: 1,
    FormEvent: {
      event: "", time: "", date: ""
    },
    FormPersonal: {
      fullName: "",
      phoneNumber: ""
    },
    FormInfo: {
      people: "",
      foodType: "",
      pay: ""
    },
    loading: false,
    error: null,
    success: false,
    eventData: []
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
      .addCase(fetchEvent.pending, state => {
        state.loading = true;
      })
      .addCase(fetchEvent.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.eventData = action.payload

      })
      .addCase(fetchEvent.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload
          ? action.payload.message
          : "Failed to create event";
      })
      .addCase(getEventById.pending, state => {
        state.loading = true;
      })
      .addCase(getEventById.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.updateventId = action.payload._id;
        state.FormEvent.event = action.payload.event_type;
        state.FormEvent.date = action.payload.date_of_event;
        state.FormEvent.time = action.payload.food_time;
        state.FormPersonal.fullName = action.payload.full_name;
        state.FormPersonal.phoneNumber = action.payload.phone_no;
        state.FormInfo.people = action.payload.no_of_ppl;
        state.FormInfo.foodType = action.payload.fasting;
        state.FormInfo.pay = action.payload.with_cash;
      })
      .addCase(getEventById.rejected, (state, action) => {
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
        state.success = true
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
