import { useEffect, useState } from 'react';
import { getMyTours } from '../api/data.api';
import { Button } from '@mui/material';
import { Link } from "react-router-dom"
import HikingOutlinedIcon from '@mui/icons-material/HikingOutlined';

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
            <Button
                variant="outlined"
                component={Link}
                to="/BookATour"
                startIcon={<HikingOutlinedIcon
                    sx={{
                        transform: 'rotateY(180deg)',
                    }}
                />}
                sx={{
                    backgroundColor: '#e6d3b3',
                    color: '#4d2e1a',
                    borderColor: '#4d2e1a',
                    '& .MuiButton-startIcon': {
                        marginLeft: 1,
                        marginRight: 0,
                    },
                    width: { xs: '100%', sm: 'auto' },
                }}
            >
                להזמנת סיור
            </Button>
        </div>
    );
};
