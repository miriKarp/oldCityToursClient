import { useEffect, useState } from 'react';
import {
    Card, CardContent, Typography, Box, CircularProgress, TextField, Button, Stack
} from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBusiness, updateBusiness } from '../../redux/slices/businessSlice';
import { RootState, AppDispatch } from '../../redux/store';

export const BusinessDetails = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { business, loading, error } = useSelector((state: RootState) => state.business);

    const [editMode, setEditMode] = useState(false);
    const [formValues, setFormValues] = useState({
        address: '',
        phone: '',
        email: '',
        openingHours: ''
    });

    useEffect(() => {
        dispatch(fetchBusiness());
    }, [dispatch]);

    useEffect(() => {
        if (business) {
            setFormValues({
                address: business.address || '',
                phone: business.phone || '',
                email: business.email || '',
                openingHours: business.openingHours || ''
            });
        }
    }, [business]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value });
    };

    const handleSave = () => {
        dispatch(updateBusiness(formValues));
        setEditMode(false);
    };

    if (loading) return <CircularProgress />;
    if (error) return <Typography color="error">שגיאה: {error}</Typography>;
    if (!business) return <Typography>לא נמצאו פרטי עסק</Typography>;

    return (
        <Card
            sx={{
                maxWidth: 500,
                backgroundColor: '#f8f1e4',
                border: '1px solid #c9b798',
                borderRadius: 3,
                boxShadow: 3,
                fontFamily: `'David Libre', serif`,
                direction: 'rtl',
                padding: 2
            }}
        >
            <CardContent>
                <Typography
                    variant="h5"
                    sx={{
                        color: '#5a3e1b',
                        borderBottom: '2px solid #bfa87a',
                        paddingBottom: 1,
                        marginBottom: 2
                    }}
                >
                    פרטי העסק
                </Typography>

                <Stack spacing={2}>
                    {editMode ? (
                        <>
                            <TextField
                                name="address"
                                label="כתובת"
                                value={formValues.address}
                                onChange={handleChange}
                                fullWidth
                            />
                            <TextField
                                name="phone"
                                label="טלפון"
                                value={formValues.phone}
                                onChange={handleChange}
                                fullWidth
                            />
                            <TextField
                                name="email"
                                label="דואל"
                                value={formValues.email}
                                onChange={handleChange}
                                fullWidth
                            />
                            <TextField
                                name="openingHours"
                                label="שעות פעילות"
                                value={formValues.openingHours}
                                onChange={handleChange}
                                fullWidth
                            />
                            <Box sx={{ display: 'flex', gap: 2 }}>
                                <Button variant="contained" color="primary" onClick={handleSave}>
                                    שמור
                                </Button>
                                <Button variant="outlined" color="secondary" onClick={() => setEditMode(false)}>
                                    ביטול
                                </Button>
                            </Box>
                        </>
                    ) : (
                        <>
                            <Box>📍 {business.address || 'כתובת לא זמינה'}</Box>
                            <Box>📞 {business.phone || 'טלפון לא זמין'}</Box>
                            <Box>✉️ {business.email || 'דוא"ל לא זמין'}</Box>
                            <Box>🕰 {business.openingHours || 'שעות לא זמינות'}</Box>
                            <Button
                                variant="outlined"
                                sx={{ marginTop: 2 }}
                                onClick={() => setEditMode(true)}
                            >
                                ערוך פרטים
                            </Button>
                        </>
                    )}
                </Stack>
            </CardContent>
        </Card>
    );
};
