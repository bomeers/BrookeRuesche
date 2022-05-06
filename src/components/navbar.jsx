import * as React from 'react';
import { useState, useEffect } from 'react';
import { AppBar, Toolbar, IconButton, Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import CalculateIcon from '@mui/icons-material/Calculate';
import { ThemeProvider } from '@mui/material/styles';
import BRFtheme from '../styles/theme'
import { Link } from 'react-router-dom';

function Navbar() {
    const [state, setState] = React.useState({ left: false, });
    const [navColor, setnavColor] = useState("transparent");
    const [navShadow, setnavShadow] = useState("none");

    const listenScrollEvent = () => {
        window.scrollY > 10 ? setnavColor("#212121") : setnavColor("transparent");
        window.scrollY > 10 ? setnavShadow('0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)') : setnavShadow("none");
    };

    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);
        return () => {
            window.removeEventListener("scroll", listenScrollEvent);
        };
    }, []);

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, ['left']: open });
    };

    const list = (
        <Box
            sx={{ width: 'left' === 'top' || 'left' === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List sx={{ color: '#fff' }}>
                <ListItem>
                    <ListItemButton component="a" href="/">
                        <ListItemIcon>
                            <HomeIcon sx={{ color: '#fff' }} />
                        </ListItemIcon>
                        <ListItemText primary={'Home'} />
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton component="a" href="/bmiCalculator">
                        <ListItemIcon>
                            <CalculateIcon sx={{ color: '#fff' }} />
                        </ListItemIcon>
                        <ListItemText primary={'BMI Calculator'} />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );

    return (
        <ThemeProvider theme={BRFtheme}>
            <AppBar position="fixed" sx={{ backgroundColor: navColor, boxShadow: navShadow }}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 1 }}
                        onClick={toggleDrawer(true)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Drawer
                        anchor={'left'}
                        open={state['left']}
                        onClose={toggleDrawer(false)}
                    >
                        {list}
                    </Drawer>
                    <Link to='/'><img height="60" src="./images/logos/logo-white.svg" /></Link>
                </Toolbar>
            </AppBar>
        </ThemeProvider>

    );
}

export default Navbar