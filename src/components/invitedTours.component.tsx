import { useAppSelector } from '../hooks';

export const InvitedTours = () => {

    const { tours, loading, error } = useAppSelector((state) => state.tours);

    return (
        <div>
            <h2>רשימת סיורים שלי:</h2>

            {loading && <p>טוען סיורים...</p>}
            {error && <p>שגיאה: {error}</p>}

            {tours.length > 0 ? (
                <ul>
                    {tours.map((tour) => (
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
}