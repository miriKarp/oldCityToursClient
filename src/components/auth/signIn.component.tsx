import { useState } from 'react';
import { Box, Button, TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../redux/actions/userAction';
import { AppDispatch, RootState } from '../../redux/store';
import { Link, useNavigate } from 'react-router-dom';

export const SignIn = () => {

    const dispatch: AppDispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const signInLoading = useSelector((state: RootState) => state.user.loading);
    const signInError = useSelector((state: RootState) => state.user.signInError);
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await dispatch(loginUser(email, password));
            if (response && response.user) {
                localStorage.setItem("user", JSON.stringify(response.user));
                localStorage.setItem("token", response.token);
                navigate('/Home');
            }
        } catch (err) {
            console.error('Login failed', err);
        }
    };


    return (
        <Box sx={{ minWidth: 300, margin: 2 }}>
            <h3>להתחברות</h3>
            <TextField fullWidth label="אימייל" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <TextField fullWidth label="סיסמה" id="password" type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
            <Button variant="outlined" href="#outlined-buttons" onClick={handleLogin} disabled={signInLoading}>
                {signInLoading ? 'טוען...' : 'כניסה'}
            </Button>
            {signInError && <p style={{ color: 'red' }}>{signInError}</p>}
            <Link to="/signup">
                <Button variant="outlined">
                    עוד לא מחוברים? להרשמה לחצו כאן
                </Button>
            </Link>
        </Box>
    );
}