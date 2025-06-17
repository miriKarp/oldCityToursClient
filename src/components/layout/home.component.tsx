import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { fetchServices } from "../../redux/slices/servicesSlices";
import { Button, Box, Typography, CircularProgress, CardContent, Card } from "@mui/material"
import { Link } from "react-router-dom"
import HikingOutlinedIcon from '@mui/icons-material/HikingOutlined';
import { styled } from '@mui/system';

export const Home = () => {

    const user = JSON.parse(localStorage.getItem("user")!);

    const dispatch = useDispatch<AppDispatch>();

    const { services, loading, error } = useSelector((state: RootState) => state.services);

    const StyledListItem = styled('li')({
        marginBottom: '0.5rem',
        listStyle: 'none',
    });

    const ServiceCard = styled(Card)({
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        border: '1px solid white',
        marginBottom: '1rem',
        boxShadow: 'none',
    });

    useEffect(() => {
        dispatch(fetchServices());
    }, [dispatch]);

    return (
        <Box
            sx={{
                backgroundImage: 'url("/images/night-view-old-narrow-street.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
                minHeight: '100vh',
                width: '100vw',
                display: 'flex',
                justifyContent: { xs: 'center', md: 'flex-start' },
                alignItems: { xs: 'flex-start', md: 'flex-start' },
                padding: { xs: '1rem', md: '2rem' },
                boxSizing: 'border-box',
                py: { xs: 4, md: 8 }
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: { xs: 'center', md: 'flex-end' },
                    gap: 2,
                    padding: '1.5rem',
                    borderRadius: '8px',
                    width: { xs: '95%', sm: '80%', md: '400px' },
                    color: 'white',
                    textAlign: { xs: 'center', md: 'right' }
                }}
            >
                <Typography
                    variant="h5"
                    sx={{
                        color: 'white',
                        textShadow: '1px 1px 3px #000',
                        fontFamily: 'Cinzel, serif',
                        textAlign: 'inherit',
                        fontSize: { xs: '1.2rem', sm: '1.5rem', md: '2.125rem' }
                    }}
                >
                    {user.name ? `שלום ${user.name}` : ""}
                </Typography>

                {loading && <CircularProgress color="inherit" size={24} />}
                {error && <Typography color="error">{error}</Typography>}

                {!loading && !error && (
                    <Box sx={{ p: 2, width: '100%' }}>
                        <Typography variant="h5" color="white" gutterBottom sx={{ textAlign: 'inherit', fontSize: { xs: '1.1rem', sm: '1.3rem', md: '1.5rem' } }}>
                            השירותים שלנו:
                        </Typography>
                        <ul style={{ padding: 0 }}>
                            {services.map((service) => (
                                <StyledListItem key={service._id}>
                                    <ServiceCard>
                                        <CardContent>
                                            <Typography variant="body1" color="text.primary" sx={{ textAlign: 'inherit' }}>
                                                {service.description} - ₪{service.price} - {service.durationTime} דקות
                                            </Typography>
                                        </CardContent>
                                    </ServiceCard>
                                </StyledListItem>
                            ))}
                        </ul>
                    </Box>
                )}
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
                        marginTop: '1rem',
                        width: { xs: '100%', sm: 'auto' }
                    }}
                >
                    לקביעת סיור
                </Button>
            </Box>
        </Box>
    );
}




