import { useState } from 'react';
import { Button, TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../redux/actions/userAction';
import { AppDispatch, RootState } from '../redux/store';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export const SignUp = () => {
    const dispatch: AppDispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const signUpLoading = useSelector((state: RootState) => state.user.loading);
    const signUpError = useSelector((state: RootState) => state.user.signUpError);
    const navigate = useNavigate();

    const handleRegister = async () => {
        try {
            const response = await dispatch(registerUser(name, email, password, phone));
            if (response) {
                localStorage.setItem("Name", name);
                navigate('/Home');
            }
        } catch (err) {
            console.error('Registration failed', err);
        }
    };

    return (
        <>
            <h3>להרשמה</h3>
            <TextField fullWidth label="שם" id="name" value={name} onChange={(e) => setName(e.target.value)} />
            <TextField fullWidth label="סיסמה" id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <TextField fullWidth label="אימייל" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <TextField fullWidth label="פלאפון" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
            <Button variant="outlined" onClick={handleRegister} disabled={signUpLoading}>
                {signUpLoading ? 'טוען...' : 'הרשמה'}
            </Button>
            {signUpError && <p style={{ color: 'red' }}>{signUpError}</p>}
            <Button variant="outlined" href="#outlined-buttons" component={Link} to="/signin">
                מחוברים? לחצו כאן לכניסה
            </Button>
        </>
    );
};