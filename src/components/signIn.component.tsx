// import { Input } from '@mui/base/Input';
// import { FormControl } from '@mui/base/FormControl';
// import { Label } from '@mui/icons-material';
// import { StyledInput } from '@mui/material/';
// import { HelperText } from '@mui/base/';
import { TextField } from '@mui/material';


export const SignIn = () => {
    return <>
        <h3>לכניסה</h3>
        <TextField fullWidth label="email" id="email" />
        <TextField fullWidth label="סיסמה" id="password" />
        <button type='button'>עוד לא מחוברים? להרשמה לחצו כאן</button>
        {/* <FormControl defaultValue="" required>
            <Label>Name</Label>
            <StyledInput placeholder="Write your name here" />
            <HelperText />
        </FormControl> */}

    </>
}
