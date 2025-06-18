import { useEffect, useState } from 'react';
import { getMyTours } from '../api/data.api';

export const InvitedTours = () => {
    const [tours, setTours] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchTours = async () => {
            try {
                const data = await getMyTours();
                setTours(data);
            } catch (err: any) {
                setError(err.message || 'שגיאה בטעינת הסיורים');
            } finally {
                setLoading(false);
            }
        };
        fetchTours();
    }, []);

    return (
        <div>
            <h2>רשימת סיורים שלי:</h2>
            {loading && <p>טוען סיורים...</p>}
            {error && <p>שגיאה: {error}</p>}
            {tours.length > 0 ? (
                <ul>
                    {tours.map((tour: any) => (
                        <li key={tour._id}>
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
