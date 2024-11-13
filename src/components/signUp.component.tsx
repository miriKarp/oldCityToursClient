// import { Input } from '@mui/base/Input';
// import { FormControl } from '@mui/base/FormControl';
// import { Label } from '@mui/icons-material';
// import { StyledInput } from '@mui/material/';
// import { HelperText } from '@mui/base/';
import { TextField } from '@mui/material';


export const SignUp = () => {
    return <>
        <h3>להרשמה</h3>
        <TextField fullWidth label="שם" id="name" />
        <TextField fullWidth label="סיסמה" id="password" />
        <TextField fullWidth label="אימייל" id="email" />
        <TextField fullWidth label="פלאפון" id="phone" />
<button type='button'> מחוברים? לחצו כאן לכניסה</button>
        {/* <FormControl defaultValue="" required>
            <Label>Name</Label>
            <StyledInput placeholder="Write your name here" />
            <HelperText />
        </FormControl> */}

    </>
}