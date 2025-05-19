import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getUsers } from '../../api/data.api';

interface Customer {
    id: number;
    name: string;
    email: string;
    phone: string;
}

interface CustomersState {
    customers: Customer[];
    loading: boolean;
    error: string | null;
}

const initialState: CustomersState = {
    customers: [],
    loading: false,
    error: null,
};

export const fetchCustomers = createAsyncThunk(
    'customers/fetchCustomers',
    async (_, thunkAPI) => {
        try {
            const usersData = await getUsers();
            return usersData as Customer[];
        } catch (error: any) {
            const message = error.response?.data?.message || error.message || "שגיאה בטעינת הלקוחות";
            return thunkAPI.rejectWithValue(message);
        }
    }
);

const customersSlice = createSlice({
    name: 'customers',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCustomers.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchCustomers.fulfilled, (state, action) => {
                state.loading = false;
                state.customers = action.payload;
            })
            .addCase(fetchCustomers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    },
});

export default customersSlice.reducer;