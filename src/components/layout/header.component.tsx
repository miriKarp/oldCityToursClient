import { AppBar, Box, IconButton, Toolbar } from '@mui/material';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';

export const Header = () => {
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

                <Box sx={{ display: 'flex', gap: 2 }}>
                    <IconButton component={Link} to="/signin" sx={{ color: '#4d2e1a' }}>
                        <PersonOutlineOutlinedIcon />
                    </IconButton>
                    <IconButton component={Link} to="/cart" sx={{ color: '#4d2e1a' }}>
                        <ShoppingCartOutlinedIcon />
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
    );
};
