import { AppDispatch } from '../store';
import { fetchTours, addTour } from '../slices/toursSlices';
import type { NewTour } from '../../types/Tour';

export const loadTours = () => async (dispatch: AppDispatch) => {
    try {
        await dispatch(fetchTours()).unwrap();
    } catch (err) {
        console.error("שגיאה בטעינת סיורים:", err);
    }
};

export const createTour = (tourData: NewTour) => async (dispatch: AppDispatch) => {
    try {
        const res = await dispatch(addTour(tourData)).unwrap();
        return res;
    } catch (err) {
        console.error("שגיאה ביצירת סיור:", err);
        throw err;
    }
};
