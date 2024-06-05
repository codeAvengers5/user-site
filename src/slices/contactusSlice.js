import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { contactus } from "@/services/contactus.service";
export const createContactus = createAsyncThunk(
    "user/contactus",
    async ( data , thunkAPI) => {
        try {
            const response = await contactus(data);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);
const contactSlice = createSlice({
    name: "contactus",
    initialState: {
        loading: false,
        error: null,
        success: false,
    },

    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(createContactus.pending, state => {
                state.loading = true;
            })
            .addCase(createContactus.fulfilled, state => {
                state.loading = false;
                state.success = true;
            })
            .addCase(createContactus.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload
                    ? action.payload.message
                    : "Failed to create contactus";
            });
    }
});

export const { reducer } = contactSlice.actions;

export default contactSlice.reducer;
