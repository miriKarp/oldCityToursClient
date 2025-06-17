import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import {
    fetchTours,
    updateTour,
    removeTour
} from '../../redux/slices/toursSlices';
import {
    Box,
    Button,
    TextField,
    Typography,
    Select,
    MenuItem,
    FormControl,
    InputLabel
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { BookATour } from '../bookATour.component';
import { Tour } from '../../types/Tour';

export const ToursList = () => {
    const dispatch = useAppDispatch();
    const { tours, loading, error } = useAppSelector(state => state.tours);
    const [sortBy, setSortBy] = useState<'date' | 'name'>('date');
    const [editMode, setEditMode] = useState(false);
    const [tourData, setTourData] = useState<any>({
        _id: '',
        time: '',
        invitingName: '',
        phone: '',
        note: '',
        group: false,
        tourType: 0
    });

    useEffect(() => {
        dispatch(fetchTours());
    }, [dispatch]);

    const sortedTours = [...tours].sort((a, b) => {
        return sortBy === 'date'
            ? new Date(a.time).getTime() - new Date(b.time).getTime()
            : a.invitingName.localeCompare(b.invitingName, 'he');
    });

    const handleEdit = (tour: Tour) => {
        setTourData(tour);
        setEditMode(true);
    };

    const handleDelete = (_id: string) => {
        dispatch(removeTour(_id));
    };

    const handleSave = async () => {
        await dispatch(updateTour(tourData));
        await dispatch(fetchTours());       

        setEditMode(false);
        setTourData({
            _id: '',
            time: '',
            invitingName: '',
            phone: '',
            note: '',
            group: false,
            tourType: 0
        });
    };

    return (
        <>
            <Box sx={{ padding: 2, maxWidth: 800, margin: '0 auto' }}>
                <Typography variant="h5" gutterBottom>רשימת סיורים</Typography>

                <FormControl sx={{ mb: 2 }}>
                    <InputLabel>מיין לפי</InputLabel>
                    <Select value={sortBy} onChange={(e) => setSortBy(e.target.value as 'date' | 'name')}>
                        <MenuItem value="date">תאריך</MenuItem>
                        <MenuItem value="name">שם המזמין</MenuItem>
                    </Select>
                </FormControl>

                {loading && <p>טוען סיורים...</p>}
                {error && <p>שגיאה: {error}</p>}

                <ul style={{ padding: 0 }}>
                    {sortedTours.map((tour) => (
                        <li key={tour._id} style={{ listStyle: 'none', marginBottom: '1rem' }}>
                            <strong>{tour.invitingName}</strong><br />
                            תאריך: {new Date(tour.time).toLocaleString()}<br />
                            טלפון: {tour.phone}<br />
                            סוג סיור: {tour.tourType}<br />
                            קבוצתי: {tour.group ? 'כן' : 'לא'}<br />
                            הערות: {tour.note}<br />
                            <Button
                                size="small"
                                variant="outlined"
                                color="primary"
                                onClick={() => handleEdit(tour)}
                                startIcon={<EditIcon />}
                                sx={{ mr: 1 }}
                            >
                                ערוך
                            </Button>
                            <Button
                                size="small"
                                variant="outlined"
                                color="error"
                                onClick={() => handleDelete(tour._id)}
                                startIcon={<DeleteIcon />}
                            >
                                מחק
                            </Button>
                        </li>
                    ))}
                </ul>

                {editMode && (
                    <>
                        <Typography variant="h6" sx={{ mt: 3 }}>עריכת סיור</Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 1 }}>
                            <TextField
                                label="שם המזמין"
                                value={tourData.invitingName}
                                onChange={(e) => setTourData({ ...tourData, invitingName: e.target.value })}
                            />
                            <TextField
                                label="טלפון"
                                value={tourData.phone}
                                onChange={(e) => setTourData({ ...tourData, phone: e.target.value })}
                            />
                            <TextField
                                label="הערות"
                                value={tourData.note}
                                onChange={(e) => setTourData({ ...tourData, note: e.target.value })}
                            />
                            <TextField
                                label="תאריך"
                                type="datetime-local"
                                value={tourData.time?.slice(0, 16)}
                                onChange={(e) => setTourData({ ...tourData, time: e.target.value })}
                                InputLabelProps={{ shrink: true }}
                            />
                            <TextField
                                label="סוג סיור"
                                type="number"
                                value={tourData.tourType}
                                onChange={(e) => setTourData({ ...tourData, tourType: Number(e.target.value) })}
                            />
                            <FormControl>
                                <InputLabel>קבוצתי</InputLabel>
                                <Select
                                    value={tourData.group ? 'yes' : 'no'}
                                    onChange={(e) => setTourData({ ...tourData, group: e.target.value === 'yes' })}
                                >
                                    <MenuItem value="yes">כן</MenuItem>
                                    <MenuItem value="no">לא</MenuItem>
                                </Select>
                            </FormControl>

                            <Button variant="contained" color="primary" onClick={handleSave}>
                                שמור שינויים
                            </Button>
                        </Box>
                    </>
                )}
            </Box>
            <BookATour />
        </>
    );
};
