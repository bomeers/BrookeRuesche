import { createTheme } from '@mui/material/styles';

// Create a theme instance.
const BRFtheme = createTheme({
    palette: {
        primary: {
            main: '#7b52a0',
            contrastText: '#fff'
        },
        secondary: {
            main: '#401a51',
            contrastText: '#fff'
        },
        background: {
            default: '#1f1f1f',
            paper: '#353434',
        },
        text: {
            primary: '#fff',
            secondary: '#fff'
        },
    },
});

export default BRFtheme;
