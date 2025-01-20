import * as React from 'react';
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { prefixer } from 'stylis';
import { CacheProvider } from '@emotion/react';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import rtlPlugin from 'stylis-plugin-rtl';
import createCache from '@emotion/cache';
// import dayjs from 'dayjs';

const cacheRtl = createCache({
    key: 'pickers-rtl-demo',
    stylisPlugins: [prefixer, rtlPlugin],
});

export const BookATour = () => {

    const order = () => { }

    const existingTheme = useTheme();

    const theme = React.useMemo(
        () => createTheme(existingTheme, { direction: 'rtl' }),
        [existingTheme],
    );

    return <form onSubmit={order}>
        <Box sx={{ minWidth: 300 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">סוג השרות</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    // value={"age"}
                    label="Age"
                    // onChange={handleChange}
                >
                    <MenuItem value={1}>עם מדריך</MenuItem>
                    <MenuItem value={0}>ללא מדריך</MenuItem>
                </Select>

                <CacheProvider value={cacheRtl}>
                    <ThemeProvider theme={theme}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DateTimePicker
                                label="תאריך וזמן לסיור"
                                // defaultValue={dayjs('2022-04-17')}
                                slotProps={{
                                    desktopPaper: {
                                        dir: 'rtl',
                                    },
                                    mobilePaper: {
                                        dir: 'rtl',
                                    },
                                }}
                            />
                        </LocalizationProvider>
                    </ThemeProvider>
                </CacheProvider>

            </FormControl>
        </Box>

    </form>

}