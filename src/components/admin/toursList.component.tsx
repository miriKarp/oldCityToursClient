import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchTours } from '../../redux/slices/toursSlices';

export const ToursList = () => {
    const dispatch = useAppDispatch();
    const { tours, loading, error } = useAppSelector((state) => state.tours);

    const [sortBy, setSortBy] = useState<'date' | 'name'>('date');

    useEffect(() => {
        dispatch(fetchTours());
    }, [dispatch]);

    const sortedTours = [...(tours || [])].sort((a, b) => {
        if (sortBy === 'date') {
            return new Date(a.time).getTime() - new Date(b.time).getTime();
        } else if (sortBy === 'name') {
            return a.invitingName.localeCompare(b.invitingName, 'he');
        }
        return 0;
    });

    return (
        <div>
            <h2>רשימת סיורים:</h2>

            <div style={{ marginBottom: '1rem' }}>
                <label>מיין לפי: </label>
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value as 'date' | 'name')}>
                    <option value="date">תאריך</option>
                    <option value="name">שם המזמין</option>
                </select>
            </div>

            {loading && <p>טוען סיורים...</p>}
            {error && <p>שגיאה: {error}</p>}

            {sortedTours.length > 0 ? (
                <ul>
                    {sortedTours.map((tour) => (
                        <li key={tour.id}>
                            <strong>{tour.invitingName}</strong><br />
                            תאריך: {new Date(tour.time).toLocaleString()}<br />
                            טלפון: {tour.phone}<br />
                            סוג סיור: {tour.tourType}<br />
                            קבוצתי: {tour.group ? 'כן' : 'לא'}<br />
                            הערות: {tour.note}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>לא נמצאו סיורים</p>
            )}
        </div>
    );
};
