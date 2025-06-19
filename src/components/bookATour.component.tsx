import * as React from 'react';
import { useEffect, useState } from 'react';
import { Box, Button, FormControl, FormControlLabel, InputLabel, MenuItem, Select, Switch, TextField } from "@mui/material";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { prefixer } from 'stylis';
import { CacheProvider } from '@emotion/react';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import rtlPlugin from 'stylis-plugin-rtl';
import createCache from '@emotion/cache';
import { useDispatch, useSelector } from 'react-redux';
import { createTour } from '../redux/actions/tourActions';
import { AppDispatch, RootState } from '../redux/store';
import dayjs, { Dayjs } from 'dayjs';
import { getAllServices } from '../api/services.api';

const cacheRtl = createCache({
    key: 'pickers-rtl-demo',
    stylisPlugins: [prefixer, rtlPlugin],
});

export const BookATour = () => {
    const dispatch = useDispatch<AppDispatch>();
    const user = useSelector((state: RootState) => state.user.user);

    useEffect(() => {
        if (user) {
            setInvitingName(user.name || '');
            setPhone(user.phone || '');
        }
    }, [user]);

    const existingTheme = useTheme();
    const theme = React.useMemo(
        () => createTheme(existingTheme, { direction: 'rtl' }),
        [existingTheme]
    );
    const [services, setServices] = useState<any[]>([]);
    const [selectedServiceId, setSelectedServiceId] = useState('');

    const [dateTime, setDateTime] = useState<Dayjs | null>(dayjs());
    const [invitingName, setInvitingName] = React.useState('');
    const [phone, setPhone] = useState('');
    const [note, setNote] = useState('');
    const [group, setGroup] = useState(false);

    useEffect(() => {
        const fetchServices = async () => {
            try {
                const data = await getAllServices();
                setServices(data);
                if (data.length > 0) {
                    setSelectedServiceId(data[0]._id);
                }
            } catch (error) {
                console.error('שגיאה בטעינת שירותים:', error);
            }
        };
        fetchServices();
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!dateTime) return alert("יש לבחור תאריך");

        const selectedService = services.find(service => service._id === selectedServiceId);
        if (!selectedService) return alert("שירות לא נבחר כראוי");

        const newTour = {
            time: dateTime.toDate().toISOString(),
            invitingName,
            phone,
            note,
            group,
            tourType: selectedService,
        };

        try {
            await dispatch(createTour(newTour));
            alert("הסיור נשלח בהצלחה!");

            setDateTime(dayjs());
            setInvitingName(' ');
            setPhone(' ');
            setNote(' ');
            setGroup(false);
            setSelectedServiceId(services[0]?._id || '');
        } catch (err) {
            alert("שגיאה בשליחת הסיור");
        }
    };

return (
    <form onSubmit={handleSubmit}>
        <Box sx={{ minWidth: 300 }}>
            <FormControl fullWidth sx={{ gap: 2 }}>
                <InputLabel id="tour-type-label">סוג הסיור</InputLabel>
                <InputLabel id="tour-type-label">סוג הסיור</InputLabel>
                <Select
                    labelId="tour-type-label"
                    value={selectedServiceId}
                    onChange={(e) => setSelectedServiceId(e.target.value)}
                    label="סוג הסיור"
                >
                    {services.map(service => (
                        <MenuItem key={service._id} value={service._id}>
                            {service.description}
                        </MenuItem>
                    ))}
                </Select>


                <CacheProvider value={cacheRtl}>
                    <ThemeProvider theme={theme}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DateTimePicker
                                label="תאריך ושעה"
                                value={dateTime}
                                onChange={(newValue) => setDateTime(newValue)}
                                sx={{ marginTop: 2, marginBottom: 1 }}
                                slotProps={{
                                    desktopPaper: { dir: 'rtl' },
                                    mobilePaper: { dir: 'rtl' },
                                }}
                            />
                        </LocalizationProvider>
                    </ThemeProvider>
                </CacheProvider>

                <TextField
                    label="הערה לבעל העסק"
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    variant="outlined"
                    margin="dense"
                />

                <TextField
                    label="שם משתמש"
                    value={invitingName}
                    onChange={(e) => setInvitingName(e.target.value)}
                    variant="outlined"
                    margin="dense"
                />

                <TextField
                    label="טלפון משתמש"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    variant="outlined"
                    margin="dense"
                />

                <FormControlLabel
                    control={
                        <Switch
                            checked={group}
                            onChange={(e) => setGroup(e.target.checked)}
                        />
                    }
                    label="סיור קבוצתי"
                />

                <Button type="submit" variant="contained" sx={{ marginTop: 2 }}>
                    שלח הזמנה
                </Button>
            </FormControl>
        </Box>
    </form>
);
};
