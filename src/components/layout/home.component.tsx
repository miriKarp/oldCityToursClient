// import { useDispatch } from 'react-redux';
// import { AppDispatch } from '../redux/store';
// import { logoutUser } from '../redux/actions/userAction';
// import { useNavigate } from 'react-router-dom';
import { Button, Box, Typography } from "@mui/material"
import { Link } from "react-router-dom"
// import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import HikingOutlinedIcon from '@mui/icons-material/HikingOutlined';
// import LogoutIcon from '@mui/icons-material/Logout';

export const Home = () => {

    // const isConnected: Boolean = true;
    const user = JSON.parse(localStorage.getItem("Name")!);

    // const dispatch = useDispatch<AppDispatch>();
    // const navigate = useNavigate();

    // const handleLogout = () => {
    //     localStorage.removeItem("user");
    //     localStorage.removeItem("token");
    //     localStorage.removeItem("name");
    //     dispatch(logoutUser());
    //     navigate('/home');
    // };

    return (
        <Box
            sx={{
                backgroundImage: 'url("/images/night-view-old-narrow-street.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '99vw',
                height: '40vw',
                position: 'relative',
            }}
        >
            <Box
                sx={{
                    position: 'absolute',
                    top: '2rem',
                    right: '2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex',
                    gap: 2,
                }}
            >
                <Typography
                    variant="h5"
                    sx={{
                        color: 'white',
                        textShadow: '1px 1px 3px #000',
                        fontFamily: 'Cinzel, serif',
                    }}
                >
                    {user ? `שלום ${user}` : ""}
                </Typography>

                <Button
                    variant="outlined"
                    component={Link}
                    to="/BookATour"
                    startIcon={<HikingOutlinedIcon
                        sx={{
                            transform: 'rotateY(180deg)',
                        }}
                    />}
                    sx={{
                        color: 'white',
                        borderColor: 'white',
                        '& .MuiButton-startIcon': {
                            marginLeft: 1,
                            marginRight: 0,
                        },
                    }}
                >
                    לקביעת סיור
                </Button>
            </Box>
        </Box>
    );
}