import { Box, Typography } from '@mui/material';

export const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: '#e6d3b3',
                color: '#4d2e1a',
                textAlign: 'center',
                padding: '1rem',
                fontFamily: 'Cormorant Garamond, serif',
                borderTop: '2px solid #a67c52',
                mt: 'auto',
            }}
        >
            <Typography variant="body2">
                © {new Date().getFullYear()} סיורי העיר העתיקה | כל הזכויות שמורות
            </Typography>
        </Box>
    );
};
