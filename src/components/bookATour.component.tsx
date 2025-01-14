import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";

export const BookATour = () => {

    const order = () => { }

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
            </FormControl>
        </Box>

    </form>

}
