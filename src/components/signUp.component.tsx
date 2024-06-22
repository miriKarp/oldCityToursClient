// import { Input } from '@mui/base/Input';
// import { FormControl } from '@mui/base/FormControl';
// import { Label } from '@mui/icons-material';
// import { StyledInput } from '@mui/material/';
// import { HelperText } from '@mui/base/';
import { TextField } from '@mui/material';


export const SignUp = () => {
    return <>
        <TextField fullWidth label="name" id="name" />
        <TextField fullWidth label="email" id="email" />
        <TextField fullWidth label="phone" id="phone" />

        {/* <FormControl defaultValue="" required>
            <Label>Name</Label>
            <StyledInput placeholder="Write your name here" />
            <HelperText />
        </FormControl> */}

    </>
}