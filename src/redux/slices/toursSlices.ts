import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getTours, postTour } from '../../api/data.api';
import { ToursTypes } from '../../enums/toursTypes';

interface Tour {
    id: number;
    time: string;
    invitingName: string;
    phone: string;
    note: string;
    group: boolean;
    tourType: ToursTypes;
}

interface ToursState {
    tours: Tour[];
    loading: boolean;
    error: string | null;
}

const initialState: ToursState = {
    tours: [],
    loading: false,
    error: null,
};

export const fetchTours = createAsyncThunk(
    'tours/fetchTours',
    async (_, thunkAPI) => {
        try {
            const data = await getTours();
            return data as Tour[];
        } catch (error: any) {
            return thunkAPI.rejectWithValue("שגיאה בטעינת הסיורים");
        }
    }
);

export const addTour = createAsyncThunk(
  'tours/addTour',
  async (tourData: Omit<Tour, 'id'>, thunkAPI) => {
    try {
      const response = await postTour(tourData);
      return response as Tour;
    } catch (error: any) {
      return thunkAPI.rejectWithValue("שגיאה בהוספת הסיור");
    }
  }
);


const toursSlice = createSlice({
    name: 'tours',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTours.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchTours.fulfilled, (state, action) => {
                state.loading = false;
                state.tours = action.payload;
            })
            .addCase(fetchTours.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    },
});


export default toursSlice.reducer;
