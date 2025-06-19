import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface Business {
    address?: string;
    phone?: string;
    email?: string;
    openingHours?: string;
    manager?: string;
    password?: string;
    _id?: string;
}

interface BusinessState {
    business: Business | null;
    loading: boolean;
    error: string | null;
}

const initialState: BusinessState = {
    business: null,
    loading: false,
    error: null
};

export const fetchBusiness = createAsyncThunk(
    'business/fetchBusiness',
    async (_, thunkAPI) => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.get('/api/business', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            return response.data;
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.response?.data?.message || 'שגיאת שרת');
        }
    }
);

export const updateBusiness = createAsyncThunk(
    'business/updateBusiness',
    async (updatedFields: Partial<Business>, thunkAPI) => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.put('/api/business/updateBusiness', updatedFields, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            return response.data;
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.response?.data?.message || 'שגיאת עדכון');
        }
    }
);

const businessSlice = createSlice({
    name: 'business',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchBusiness.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchBusiness.fulfilled, (state, action) => {
                state.business = action.payload;
                state.loading = false;
            })
            .addCase(fetchBusiness.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })
            .addCase(updateBusiness.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(updateBusiness.fulfilled, (state, action) => {
                state.business = action.payload;
                state.loading = false;
            })
            .addCase(updateBusiness.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    },
});

export default businessSlice.reducer;
