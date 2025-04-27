import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { loginAPI, registerAPI } from '../../services/api/authService';

export const loginUser = createAsyncThunk(
    'auth/loginUser', 
    async (credentials, { rejectWithValue }) => {
        try {
            const response = await loginAPI(credentials);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data || error.message);
        }
    }    
);

export const registerUser = createAsyncThunk(
    'auth/registerUser', 
    async (data, { rejectWithValue }) => {
        try {
            const response = await registerAPI(data);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data || error.message);
        }
    }    
);

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        loading: false,
        error: null,
        registerSuccess: false
    },
    reducers: {
        logout: (state) => {
            state.user = null;
            state.registerSuccess = false;
        },
        resetRegisterStatus: (state) => {
            state.registerSuccess = false;
        } 
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
                state.error = null;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || 'Login failed';
            })
            .addCase(registerUser.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.registerSuccess = false;
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.loading = false;
                state.registerSuccess = true;
                state.error = null;
                state.user = action.payload;
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || 'Registration failed';
                state.registerSuccess = false;
            });
    },
});

export const { logout, resetRegisterStatus } = authSlice.actions;
export default authSlice.reducer;