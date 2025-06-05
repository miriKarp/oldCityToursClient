import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getServices, postService, deleteService, putService } from '../../api/data.api';
import { Service } from '../../types/Service';

interface ServicesState {
    services: Service[];
    loading: boolean;
    error: string | null;
}

const initialState: ServicesState = {
    services: [],
    loading: false,
    error: null,
};

export const fetchServices = createAsyncThunk<Service[], void, { rejectValue: string }>(
    'services/fetchServices',
    async (_, thunkAPI) => {
        try {
            const data = await getServices();
            return data;
        } catch (error: any) {
            return thunkAPI.rejectWithValue('שגיאה בטעינת השירותים');
        }
    }
);

export const addService = createAsyncThunk<Service, Omit<Service, 'id'>, { rejectValue: string }>(
    'services/addService',
    async (serviceData, thunkAPI) => {
        try {
            const added = await postService(serviceData);
            return added;
        } catch (error: any) {
            return thunkAPI.rejectWithValue('שגיאה בהוספת השירות');
        }
    }
);
export const updateService = createAsyncThunk(
    'services/updateService',
    async (serviceData: Service, thunkAPI) => {
        try {
            const response = await putService(serviceData); 
            return response;
        } catch (error: any) {
            return thunkAPI.rejectWithValue("שגיאה בעדכון השירות");
        }
    }
);

export const removeService = createAsyncThunk<string, string, { rejectValue: string }>(
    'services/removeService',
    async (serviceId, thunkAPI) => {
        try {
            await deleteService(serviceId);
            return serviceId;
        } catch (error: any) {
            return thunkAPI.rejectWithValue('שגיאה במחיקת השירות');
        }
    }
);

const servicesSlice = createSlice({
    name: 'services',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchServices.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchServices.fulfilled, (state, action) => {
                state.loading = false;
                state.services = action.payload;
            })
            .addCase(fetchServices.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload ?? 'שגיאה כללית';
            })
            .addCase(addService.fulfilled, (state, action) => {
                state.services.push(action.payload);
            })
            .addCase(removeService.fulfilled, (state, action) => {
                state.services = state.services.filter(service => service._id !== action.payload);
            });
    }
});

export default servicesSlice.reducer;
