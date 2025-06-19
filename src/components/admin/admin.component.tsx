import { Link, Route, Routes } from "react-router-dom";
import { CustomersList } from "./customersList.component";
import { ToursList } from "./toursList.component";
import { ServicesList } from "./servicesList.component";
import { BusinessDetails } from './businessDetails.component';
import { Box, Typography, ThemeProvider } from '@mui/material';
import { vintageTheme } from '../../theme/vintageTheme';

export const Admin = () => {

    return (
        <ThemeProvider theme={vintageTheme}>
            <Box
                sx={{
                    backgroundColor: vintageTheme.palette.background.default,
                    minHeight: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: '2rem 1rem',
                    color: vintageTheme.palette.text.primary,
                    fontFamily: vintageTheme.typography.fontFamily,
                }}
            >
                <Typography
                    variant="h2"
                    component="h2"
                    sx={{
                        fontFamily: 'Cinzel, serif',
                        fontSize: '2.5rem',
                        fontWeight: 'bold',
                        color: '#4d2e1a',
                        marginBottom: '2rem',
                        textShadow: '1px 1px 3px rgba(0,0,0,0.2)',
                    }}
                >
                    איזור ניהול
                </Typography>

                <Box
                    component="nav"
                    sx={{
                        display: 'flex',
                        gap: '2.5rem',
                        marginBottom: '2.5rem',
                        backgroundColor: vintageTheme.palette.background.paper,
                        padding: '1.2rem 2.5rem',
                        borderRadius: vintageTheme.shape.borderRadius,
                        boxShadow: '0px 4px 8px rgba(0,0,0,0.1)',
                        border: '1px solid',
                        borderColor: vintageTheme.palette.secondary.main,
                        alignItems: 'center',
                        justifyContent: 'center',
                        '& a': {
                            fontFamily: vintageTheme.typography.fontFamily,
                            fontSize: '1.2rem',
                            fontWeight: 500,
                            color: vintageTheme.palette.primary.main,
                            textDecoration: 'none',
                            padding: '0.6rem 1.5rem',
                            borderRadius: '8px',
                            transition: 'all 0.3s ease',
                            position: 'relative',
                            '&:hover': {
                                color: vintageTheme.palette.secondary.main,
                                backgroundColor: 'rgba(166, 124, 82, 0.08)',
                            },
                        },
                    }}
                >
                    <Link to="BusinessDetails">פרטי העסק</Link>
                    <Link to="CustomersList">לקוחות</Link>
                    <Link to="TourList">סיורים</Link>
                    <Link to="ServicesList">שירותים</Link>
                </Box>

                <Box
                    sx={{
                        flexGrow: 1,
                        display: "flex",
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '100%',
                        maxWidth: '900px',
                        backgroundColor: vintageTheme.palette.background.paper,
                        border: '1px solid',
                        borderColor: vintageTheme.palette.secondary.light,
                        borderRadius: vintageTheme.shape.borderRadius,
                        boxShadow: '0px 4px 10px rgba(0,0,0,0.05)',
                        padding: '1.5rem',
                    }}
                >
                    <Routes>
                        <Route path="BusinessDetails" element={<BusinessDetails />} />
                        <Route path="CustomersList" element={<CustomersList />} />
                        <Route path="TourList" element={<ToursList />} />
                        <Route path="ServicesList" element={<ServicesList />} />
                        <Route path="*" element={
                            <Typography
                                variant="body1"
                                sx={{
                                    textAlign: 'center',
                                    color: vintageTheme.palette.text.secondary,
                                    fontFamily: vintageTheme.typography.fontFamily,
                                    fontSize: '1.1rem',
                                }}
                            >
                                בחר אפשרות מהתפריט
                            </Typography>
                        } />
                    </Routes>
                </Box>
            </Box>
        </ThemeProvider>
    );
};