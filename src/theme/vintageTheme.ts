import { createTheme } from '@mui/material/styles';

export const vintageTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#5e3b1e',
        },
        secondary: {
            main: '#a67c52',
        },
        background: {
            default: '#f7f2e3',
            paper: '#fffbe6',
        },
        text: {
            primary: '#3e2b1f',
        },
    },
    typography: {
        fontFamily: 'Georgia, serif',
        h5: {
            fontWeight: 'bold',
            color: '#5e3b1e',
        },
        button: {
            textTransform: 'none',
            fontWeight: 'bold',
        },
    },
    shape: {
        borderRadius: 12,
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderWidth: 2,
                    borderStyle: 'solid',
                    '&:hover': {
                        backgroundColor: '#e6d3b3',
                        color: '#4d2e1a',
                        borderColor: '#4d2e1a',
                    },
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    padding: '1.5rem',
                    backgroundColor: '#fffbe6',
                    border: '1px solid #d2b48c',
                },
            },
        },
    },
});
