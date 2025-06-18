import { Box, Typography } from '@mui/material';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';

export const Footer = () => {

    const address = "רחוב משגב לדך 12, העיר העתיקה";
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;


    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: '#e6d3b3',
                color: '#4d2e1a',
                textAlign: 'center',
                padding: '1.5rem 1rem',
                fontFamily: 'Cormorant Garamond, serif',
                borderTop: '2px solid #a67c52',
                mt: 'auto',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: { xs: 1, sm: 2, md: 3 },
                    mb: 2,
                    maxWidth: '1000px',
                    mx: 'auto',
                }}
            >

                <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', gap: 0.5, whiteSpace: 'nowrap' }}>
                    <LocationOnOutlinedIcon sx={{ fontSize: '1rem', color: '#a67c52' }} />
                    <a
                        href={googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: 'inherit', textDecoration: 'none' }}
                    >
                        כתובת: רחוב משגב לדך 12, העיר העתיקה
                    </a>
                </Typography>
                <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    <PhoneOutlinedIcon sx={{ fontSize: '1rem', color: '#a67c52' }} />
                    טלפון: <a href="tel:+97221234567" style={{ color: 'inherit', textDecoration: 'none' }}>02-1234567</a>
                </Typography>
                <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    <EmailOutlinedIcon sx={{ fontSize: '1rem', color: '#a67c52' }} />
                    דוא"ל: <a href="mailto:excitingtours100@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>excitingtours100@gmail.com</a>
                </Typography>
                <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    <AccessTimeOutlinedIcon sx={{ fontSize: '1rem', color: '#a67c52' }} />
                    שעות פעילות: א'-ה' 9:00–17:00
                </Typography>
            </Box>

            <Typography variant="body2">
                © {new Date().getFullYear()} סיורי העיר העתיקה | כל הזכויות שמורות
            </Typography>
        </Box>
    );
};
