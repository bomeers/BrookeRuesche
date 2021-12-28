import Head from 'next/head'
import { setBackground } from './setBackground'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const name = 'Brooke Ruesche'
export const siteTitle = 'BR Fitness'

export default function Layout({ children, home }) {
    return (
        <div>
            <Head>
                <link rel="icon" type="image/png" href="/images/logos/R-Logo.svg" />
                <meta
                    name="Brooke Ruesche Fitness"
                    content="Brooke Ruesche Fitness Website"
                />
                <meta name="og:title" content={siteTitle} />
            </Head>
            <header>
                {home ? (
                    <>
                        {/* <div class="navbar-background">
                            <a href="#"><img class="navbar-logo" src="/images/logos/logo-white.svg" /></a>
                            <ul class="navbar-icons">
                                <li><a href="https://www.instagram.com/brookeruesche/" target="_blank"><img src="/images/icons/instagram.svg" /></a></li>
                                <li><a href="#"><img src="/images/icons/mail.svg" /></a></li>
                                <li><a href="#"><img src="/images/icons/phone.svg" /></a></li>
                            </ul>
                        </div>

                        <div class="navbar">
                            <ul>
                                <li><a href="#home"><strong>Home</strong></a></li>
                                <li><a href="#about"><strong>About</strong></a></li>
                                <li><a href="#schedule"><strong>Schedule</strong></a></li>
                                <li><a href="#shop"><strong>Shop</strong></a></li>
                                <li><a href="#contact"><strong>Contact</strong></a></li>
                            </ul>
                        </div> */}
                        <Box sx={{ flexGrow: 1 }}>
                            <AppBar position="static">
                                <Toolbar>
                                    <IconButton
                                        size="large"
                                        edge="start"
                                        color="inherit"
                                        aria-label="menu"
                                        sx={{ mr: 2 }}
                                    >
                                        <MenuIcon />
                                    </IconButton>
                                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                        News
                                    </Typography>
                                    <Button color="inherit">Login</Button>
                                </Toolbar>
                            </AppBar>
                        </Box>

                        <div id="home" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url("images/background/brfitness-${setBackground()}.jpg")` }}>
                            <img class="center-logo" src="/images/logos/logo-white.svg" />
                        </div>
                    </>
                ) : (
                    <>
                        <div class="navbar-background">
                            <a href="#"><img class="navbar-logo" src="/images/logos/logo-white.svg" /></a>
                            <ul class="navbar-icons">
                                <li><a href="https://www.instagram.com/brookeruesche/" target="_blank"><img src="/images/icons/instagram.svg" /></a></li>
                                <li><a href="#"><img src="/images/icons/mail.svg" /></a></li>
                                <li><a href="#"><img src="/images/icons/phone.svg" /></a></li>
                            </ul>
                        </div>

                        <div class="navbar">
                            <ul>
                                <li><a href="#home"><strong>Home</strong></a>
                                </li>
                                <li><a href="#about"><strong>About</strong></a>
                                </li>
                                <li><a href="#schedule"><strong>Schedule</strong></a>
                                </li>
                                <li><a href="#shop"><strong>Shop</strong></a>
                                </li>
                                <li><a href="#contact"><strong>Contact</strong></a></li>
                            </ul>
                        </div>
                    </>
                )}
            </header>
            <main>{children}</main>
        </div>
    )
}
