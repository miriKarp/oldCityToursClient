import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import { logOutUser } from '../../redux/actions/userAction';

export const Header = () => {

    const user = useSelector((state: RootState) => state.user.user);
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    const isAdmin = user && user.isManager;

    const handleLogout = () => {
        dispatch(logOutUser());
        navigate('/home');
    };

    return (
        <AppBar
            position="sticky"
            elevation={0}
            sx={{
                top: 0,
                zIndex: 1100,
                backgroundColor: '#e6d3b3',
                color: '#4d2e1a',
                padding: '0.5rem 2rem',
                borderBottom: '2px solid #a67c52',
                fontFamily: 'Cinzel, serif',
            }}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>

                <Box component={Link} to="/" sx={{
                    display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit',
                    '&:hover': {
                        color: 'inherit',
                    },
                }}>
                    <img src="/images/logo.png" alt="Logo" style={{ height: '40px', marginLeft: '8px', }} />
                    <span style={{ fontSize: '1.5rem', fontWeight: '600' }}>סיורי העיר העתיקה</span>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    {isAdmin && (
                        <IconButton component={Link} to="/Admin" sx={{ color: '#4d2e1a' }}>
                            <ManageAccountsOutlinedIcon />
                        </IconButton>
                    )}
                    {!user && (
                        <IconButton component={Link} to="/signin" sx={{ color: '#4d2e1a' }}>
                            <PersonOutlineOutlinedIcon />
                        </IconButton>
                    )}
                    {user && (
                        <>
                            <Typography sx={{ fontWeight: 500, fontSize: '1rem' }}>
                                שלום {user.name}
                            </Typography>
                            <IconButton onClick={handleLogout} sx={{ color: '#4d2e1a' }}>
                                <LogoutIcon sx={{ transform: 'scaleX(-1)' }} />
                            </IconButton>
                        </>
                    )}
                    <IconButton component={Link} to="/InvitedTours" sx={{ color: '#4d2e1a' }}>
                        <ShoppingCartOutlinedIcon sx={{ transform: 'scaleX(-1)' }} />
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
    );
};
