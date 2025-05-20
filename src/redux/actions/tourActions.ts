import { AppDispatch } from '../store';
import { fetchTours, addTour } from '../slices/toursSlices';

export const loadTours = () => async (dispatch: AppDispatch) => {
    try {
        await dispatch(fetchTours()).unwrap();
    } catch (err) {
        console.error("שגיאה בטעינת סיורים:", err);
    }
};

export const createTour = (tourData: {
    time: string;
    invitingName: string;
    phone: string;
    note: string;
    group: boolean;
    tourType: number;
}) => async (dispatch: AppDispatch) => {
    try {
        const res = await dispatch(addTour(tourData)).unwrap();
        return res;
    } catch (err) {
        console.error("שגיאה ביצירת סיור:", err);
        throw err;
    }
};
