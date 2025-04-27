import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getProfileAPI, updateProfileAPI } from '../../services/api/profileService';

export const getProfile = createAsyncThunk(
    'profile/getProfile', 
    async (_, { rejectWithValue }) => {
        try {
            const response = await getProfileAPI();
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || error.message);
        }
});

export const updateProfile = createAsyncThunk(
    'profile/updateProfile', 
    async (data, { rejectWithValue }) => {
        try {
            const response = await updateProfileAPI(data);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || error.message);
        }
});

const profileSlice = createSlice({
    name: 'profile',
    initialState: {
        profile: null,
        loading: false,
        error: null,
    },
    reducers: {
        clearProfile: (state) => {
            state.profile = null;
            state.loading = false;
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getProfile.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getProfile.fulfilled, (state, action) => {
                state.loading = false;
                state.profile = action.payload;
            })
            .addCase(getProfile.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(updateProfile.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(updateProfile.fulfilled, (state, action) => {
                state.loading = false;
                state.profile = action.payload;
            })
            .addCase(updateProfile.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    }
});

export const { clearProfile } = profileSlice.actions;
export default profileSlice.reducer;