import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { deleteTour, getTours, postTour, putTour } from '../../api/data.api';
// import { Service } from '../../types/Service';
import { Tour, NewTour } from '../../types/Tour';

// interface Tour {
//     _id: string;
//     time: string;
//     invitingName: string;
//     phone: string;
//     note: string;
//     group: boolean;
//     tourType: Service;
// }

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

// export const fetchTours = createAsyncThunk(
//     'tours/fetchTours',
//     async (_, thunkAPI) => {
//         try {
//             const data = await getTours();

//             const adaptedData = data.map((tour: any) => ({
//                 _id: tour._id,
//                 time: tour.time,
//                 invitingName: tour.invitingName,
//                 phone: tour.phone,
//                 note: tour.note,
//                 group: tour.group,
//                 tourType: tour.tourType,
//             }));

//             return adaptedData as Tour[];
//         } catch (error: any) {
//             return thunkAPI.rejectWithValue("שגיאה בטעינת הסיורים");
//         }
//     }
// );
export const fetchTours = createAsyncThunk<Tour[], void, { rejectValue: string }>(
    'tours/fetchTours',
    async (_, thunkAPI) => {
        try {
            const data = await getTours();
            return data as Tour[];
        } catch (error: any) {
            return thunkAPI.rejectWithValue('שגיאה בטעינת הסיורים');
        }
    }
);

export const addTour = createAsyncThunk<Tour, NewTour, { rejectValue: string }>(
    'tours/addTour',
    async (tourData: NewTour, thunkAPI) => {
        try {
            const response = await postTour(tourData);
            return response as Tour;
        } catch (error: any) {
            return thunkAPI.rejectWithValue("שגיאה בהוספת הסיור");
        }
    }
);

export const updateTour = createAsyncThunk<Tour, Tour, { rejectValue: string }>(
    'tours/updateTour',
    async (tourData: Tour, thunkAPI) => {
        try {
            const updated = await putTour(tourData);
            return updated as Tour;
        } catch (error: any) {
            return thunkAPI.rejectWithValue("שגיאה בעדכון הסיור");
        }
    }
);

export const removeTour = createAsyncThunk<string, string, { rejectValue: string }>(
    'tours/removeTour',
    async (id, thunkAPI) => {
        try {
            await deleteTour(id);
            return id;
        } catch (error: any) {
            return thunkAPI.rejectWithValue('שגיאה במחיקת הסיור');
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
            })
            .addCase(addTour.fulfilled, (state, action) => {
                state.tours.push(action.payload);
            })
            .addCase(updateTour.fulfilled, (state, action) => {
                const index = state.tours.findIndex(t => t._id === action.payload._id);
                if (index !== -1) {
                    state.tours[index] = action.payload;
                }
            })
            .addCase(removeTour.fulfilled, (state, action) => {
                state.tours = state.tours.filter(t => t._id !== action.payload);
            });

    },
});

export default toursSlice.reducer;