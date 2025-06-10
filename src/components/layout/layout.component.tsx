import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import { Header } from '../layout/header.component';
import { Footer } from '../layout/footer.component';

const Layout = () => {
    return (
        <Box
            sx={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: '#fdfaf5',
            }}
        >
            <Header />
            <Box component="main" sx={{ flex: 1 }}>
                <Outlet />
            </Box>
            <Footer />
        </Box>
    );
};

export default Layout;
