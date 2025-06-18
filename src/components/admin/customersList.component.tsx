import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchCustomers } from '../../redux/slices/customersSlices';
import { Typography, Box, List, ListItem, ListItemText, CircularProgress, Alert } from '@mui/material';

export const CustomersList = () => {
    const dispatch = useAppDispatch();

    const { customers, loading, error } = useAppSelector((state) => state.customers);

    useEffect(() => {
        dispatch(fetchCustomers());
    }, [dispatch]);

    if (loading) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" minHeight="200px" dir="rtl">
                <CircularProgress color="primary" />
                <Typography variant="h6" sx={{ mr: 2, color: 'text.primary' }}>
                    טוען לקוחות...
                </Typography>
            </Box>
        );
    }

    if (error) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" minHeight="200px" dir="rtl">
                <Alert severity="error" sx={{ width: '80%' }}>
                    <Typography variant="h6" color="error">
                        שגיאה: {error}
                    </Typography>
                </Alert>
            </Box>
        );
    }

    return (
        <Box sx={{ p: 3 }} dir="rtl">
            <Typography variant="h5" gutterBottom align="center" sx={{ color: 'primary.main', mb: 3 }}>
                רשימת לקוחות:
            </Typography>
            {customers.length === 0 ? (
                <Typography variant="body1" align="center" sx={{ p: 3, color: 'text.secondary' }}>
                    אין לקוחות להציג.
                </Typography>
            ) : (
                <List>
                    {customers.map((customer) => (
                        <ListItem
                            key={customer.id}
                            divider
                            sx={{
                                '&:hover': {
                                    backgroundColor: '#f0e5d4',
                                },
                                textAlign: 'right',
                            }}
                        >
                            <ListItemText
                                primary={
                                    <Typography variant="body1" sx={{ fontWeight: 'bold', color: 'primary.dark' }}>
                                        <Box component="span" sx={{ color: 'primary.main', fontWeight: 'normal' }}>שם:</Box> {customer.name}
                                    </Typography>
                                }
                                secondary={
                                    <Box>
                                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                            <Box component="span" sx={{ color: 'primary.main', fontWeight: 'normal' }}>אימייל:</Box>
                                            <a href="mailto:{customer.email}" style={{ color: 'inherit', textDecoration: 'none' }}>{customer.email}</a>
                                        </Typography>
                                        {customer.phone && (
                                            <Typography variant="body2" sx={{ color: 'text.secondary', mt: 0.5 }}>
                                                <Box component="span" sx={{ color: 'primary.main', fontWeight: 'normal' }}>פלאפון:</Box>
                                                <a href="tel:+97221234567" style={{ color: 'inherit', textDecoration: 'none' }}> {customer.phone}</a>
                                            </Typography>
                                        )}
                                    </Box>
                                }
                            />
                        </ListItem>
                    ))}
                </List>
            )}
        </Box>
    );
};