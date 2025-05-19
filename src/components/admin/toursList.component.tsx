import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchTours } from '../../redux/slices/toursSlices';

export const ToursList = () => {
    const dispatch = useAppDispatch();
    const { tours, loading, error } = useAppSelector((state) => state.tours);

    useEffect(() => {
        dispatch(fetchTours());
    }, [dispatch]);

    if (loading) return <p>Loading tours...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        console.log(tours),

        <div>
            <h2>רשימת סיורים:</h2>
            <ul>
                {tours && tours.length > 0 ? (
                    tours.map((tour) => (
                        <li key={tour.id}>
                            <strong>{tour.invitingName}</strong><br />
                            תאריך: {new Date(tour.time).toLocaleString()}<br />
                            טלפון: {tour.phone}<br />
                            סוג סיור: {tour.tourType}<br />
                            קבוצתי: {tour.group ? 'כן' : 'לא'}<br />
                            הערות: {tour.note}
                        </li>
                    ))
                ) : (
                    <p>לא נמצאו סיורים</p>
                )}
            </ul>
        </div>
    );
};