import { Card, CardContent, Typography, Box } from '@mui/material';

export const BusinessDetails = () => {
    return (
        <Card
            sx={{
                maxWidth: 400,
                backgroundColor: '#f8f1e4',
                border: '1px solid #c9b798',
                borderRadius: 3,
                boxShadow: 3,
                fontFamily: `'David Libre', serif`,
                direction: 'rtl'
            }}
        >
            <CardContent>
                <Typography
                    variant="h5"
                    component="div"
                    sx={{
                        color: '#5a3e1b',
                        borderBottom: '2px solid #bfa87a',
                        paddingBottom: 1,
                        marginBottom: 2
                    }}
                >
                    צור קשר
                </Typography>

                <Box sx={{ color: '#3b2f1b', fontSize: '1.1rem', lineHeight: 1.8 }}>
                    <div>📍 כתובת: רחוב השלום 12, העיר העתיקה</div>
                    <div>📞 טלפון: 02-1234567</div>
                    <div>✉️ דוא"ל: tours@oldcity.co.il</div>
                    <div>🕰 שעות פעילות: א'-ה' 9:00–17:00</div>
                </Box>
            </CardContent>
        </Card>
    );
};