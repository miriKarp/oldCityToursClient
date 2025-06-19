import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { fetchServices } from "../../redux/slices/servicesSlices";
import { Button, Box, Typography, CircularProgress, CardContent, Card } from "@mui/material"
import { Link } from "react-router-dom"
import HikingOutlinedIcon from '@mui/icons-material/HikingOutlined';
import { styled } from '@mui/system';

export const Home = () => {

    const dispatch = useDispatch<AppDispatch>();

    const { services, loading, error } = useSelector((state: RootState) => state.services);

    const ServiceCard = styled(Card)({
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        border: '1px solid white',
        boxShadow: 'none',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
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
                width: '99vw',
                display: 'flex',
                justifyContent: { xs: 'center', md: 'flex-start' },
                alignItems: { xs: 'flex-start', md: 'flex-start' },
                padding: { xs: '1rem', md: '2rem' },
                boxSizing: 'border-box',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 2,
                    borderRadius: '8px',
                    width: { xs: '95%', sm: '80%', md: '80%' },
                    color: 'white',
                    margin: '0 auto',
                }}
            >

                {loading && <CircularProgress color="inherit" size={24} />}
                {error && <Typography color="error">{error}</Typography>}

                {!loading && !error && (
                    <Box sx={{ p: 0, width: '100%' }}>
                        <Typography
                            variant="h5"
                            color="white"
                            gutterBottom
                            sx={{
                                textAlign: 'right',
                                fontSize: { xs: '1.1rem', sm: '1.3rem', md: '1.5rem' },
                                marginBottom: '1.5rem'
                            }}
                        >
                            סוגי הסיורים שלנו:
                        </Typography>

                        <Box
                            sx={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                justifyContent: 'center',
                                alignItems: 'stretch',
                                gap: '16px',
                            }}
                        >
                            {services.map((service) => (
                                <Box
                                    key={service._id}
                                    sx={{
                                        width: {
                                            xs: '100%',
                                            sm: 'calc(50% - 8px)',
                                            md: 'calc(25% - 12px)',
                                            lg: 'calc(25% - 12px)',
                                        },
                                        minWidth: '200px',
                                        maxWidth: {
                                            xs: '100%',
                                            sm: 'calc(50% - 8px)',
                                            md: 'calc(25% - 12px)',
                                            lg: 'calc(25% - 12px)',
                                        },
                                        minHeight: '200px',
                                        display: 'flex',
                                        cursor: 'pointer',
                                        transition: 'transform 0.3s ease-in-out',
                                        '&:hover': {
                                            transform: 'scale(1.05)',
                                            boxShadow: '0px 0px 15px rgba(255, 255, 255, 0.5)',
                                        }
                                    }}
                                >
                                    {/* <Link to="/BookATour" */}
                                    <Link to={`/BookATour/${service._id}`}
                                        style={{ textDecoration: 'none', width: '100%' }}>
                                        <ServiceCard sx={{ width: '100%' }}>
                                            <CardContent
                                                sx={{
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                    textAlign: 'center',
                                                    flexGrow: 1,
                                                }}
                                            >
                                                <Typography
                                                    variant="h6"
                                                    color="text.primary"
                                                    sx={{ marginBottom: '0.5rem' }}
                                                >
                                                    {service.description}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    מחיר:  ₪{service.price}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    אורך: {service.durationTime}  דקות
                                                </Typography>
                                            </CardContent>
                                        </ServiceCard>
                                    </Link>
                                </Box>
                            ))}
                        </Box>
                    </Box>
                )}
                <Box
                    sx={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'flex-end',
                        marginTop: '1rem',
                        paddingRight: { xs: 0, sm: 2 }
                    }}
                >
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
                            width: { xs: '100%', sm: 'auto' },
                        }}
                    >
                        להזמנת סיור
                    </Button>
                </Box>
            </Box>
        </Box>
    );
}