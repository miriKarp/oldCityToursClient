import { useState } from 'react';
import { Button, TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../redux/actions/userAction';
import { AppDispatch, RootState } from '../redux/store';
import { Link, useNavigate } from 'react-router-dom';

export const SignIn = () => {

    const dispatch: AppDispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loading = useSelector((state: RootState) => state.user.loading);
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await dispatch(loginUser(email, password));
            if (response) {
                navigate('/Home');
            }
        } catch (err) {
            console.error('Registration failed', err);
        }
    };

    return <>
        <h3>לכניסה</h3>
        <TextField fullWidth label="אימייל" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <TextField fullWidth label="סיסמה" id="password" type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
        <Button variant="outlined" href="#outlined-buttons" onClick={handleLogin} disabled={loading}>
            {loading ? 'טוען...' : 'כניסה'}
        </Button>
        <Link to="/signup">
            <Button variant="outlined">
                עוד לא מחוברים? להרשמה לחצו כאן
            </Button>
        </Link>
    </>
}