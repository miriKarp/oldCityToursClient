import * as React from 'react';
import { Box, Button, FormControl, FormControlLabel, InputLabel, MenuItem, Select, Switch, TextField } from "@mui/material";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { prefixer } from 'stylis';
import { CacheProvider } from '@emotion/react';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import rtlPlugin from 'stylis-plugin-rtl';
import createCache from '@emotion/cache';
import { useDispatch } from 'react-redux';
import { createTour } from '../redux/actions/tourActions';
import { AppDispatch } from '../redux/store';
import { ToursTypes } from '../enums/toursTypes';
import dayjs, { Dayjs } from 'dayjs';

const cacheRtl = createCache({
    key: 'pickers-rtl-demo',
    stylisPlugins: [prefixer, rtlPlugin],
});

export const BookATour = () => {

    const dispatch = useDispatch<AppDispatch>();

    const [dateTime, setDateTime] = React.useState<Dayjs | null>(dayjs());
    const [invitingName, setInvitingName] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [note, setNote] = React.useState('');
    const [group, setGroup] = React.useState(false);
    const [tourType, setTourType] = React.useState<ToursTypes>(ToursTypes.WesternWallTunnels);


    const existingTheme = useTheme();

    const theme = React.useMemo(
        () => createTheme(existingTheme, { direction: 'rtl' }),
        [existingTheme],
    );

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!dateTime) return alert("יש לבחור תאריך");

        const newTour = {
            time: dateTime.toDate().toISOString(),
            invitingName,
            phone,
            note,
            group,
            tourType,
        };

        try {
            await dispatch(createTour(newTour));
            alert("הסיור נשלח בהצלחה!");
        } catch (err) {
            alert("שגיאה בשליחת הסיור");
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            <Box sx={{ minWidth: 300 }}>
                <FormControl fullWidth sx={{ gap: 2 }}>

                    <InputLabel id="tour-type-label">סוג הסיור</InputLabel>
                    <Select
                        value={tourType}
                        onChange={(e) => setTourType(Number(e.target.value))}
                        label="סוג הסיור"
                    >
                        <MenuItem value={ToursTypes.WesternWallTunnels}>מנהרות הכותל</MenuItem>
                        <MenuItem value={ToursTypes.DavidCityTour}> עיר דוד</MenuItem>
                        <MenuItem value={ToursTypes.jewishQuarterTour}> הרובע היהודי</MenuItem>
                        <MenuItem value={ToursTypes.tourBetweenWalls}> סיור בין החומות</MenuItem>

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
