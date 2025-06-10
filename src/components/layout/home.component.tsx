import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { fetchServices } from "../../redux/slices/servicesSlices";
// import { useDispatch } from 'react-redux';
// import { AppDispatch } from '../redux/store';
// import { logoutUser } from '../redux/actions/userAction';
// import { useNavigate } from 'react-router-dom';
import { Button, Box, Typography, List, ListItem, ListItemText, CircularProgress } from "@mui/material"
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

    const dispatch = useDispatch<AppDispatch>();

    const { services, loading, error } = useSelector((state: RootState) => state.services);

    useEffect(() => {
        dispatch(fetchServices());
    }, [dispatch]);

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

                {loading && <CircularProgress color="inherit" size={24} />}
                {error && <Typography color="error">{error}</Typography>}

                {!loading && !error && (
                    <>
                        <Typography variant="h5" color="white">השירותים שלנו:</Typography>
                        <ul style={{ padding: 0, color: "white" }}>
                            {services.map((service) => (
                                <li key={service._id} style={{ marginBottom: '0.5rem', listStyle: 'none' }}>
                                    {service.description} - ₪{service.price} - {service.durationTime} דקות
                                </li>
                            ))}
                        </ul>
                    </>
                )}
            </Box>
        </Box>
    );
}




