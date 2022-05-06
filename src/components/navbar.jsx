import * as React from 'react';
import { AppBar, Toolbar, IconButton, Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import CalculateIcon from '@mui/icons-material/Calculate';

function Navbar() {
    const [state, setState] = React.useState({
        left: false,
    });

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
        <AppBar position="fixed" sx={{ backgroundColor: '#212121' }}>
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
                <a href="/"><img height="60" src="./images/logos/logo-white.svg" /></a>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar