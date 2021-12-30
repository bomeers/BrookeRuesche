import Head from 'next/head'
import { setBackground } from './setBackground'
import Navbar from './navbar'
import Footer from './footer'
import { createTheme, ThemeProvider } from '@mui/material/styles';

const name = 'Brooke Ruesche'
export const siteTitle = 'BR Fitness'
const BRFtheme = createTheme({
    palette: {
        mode: 'dark',
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
            <ThemeProvider theme={BRFtheme}>
                <header>
                    {home ? (
                        <>
                            <Navbar />

                            <div id="home" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url("images/background/brfitness-${setBackground()}.jpg")` }}>
                                <img class="center-logo" src="/images/logos/logo-white.svg" />
                            </div>
                        </>
                    ) : (
                        <>
                            <Navbar />
                        </>
                    )}
                </header>
                <main>{children}</main>
                <Footer />
            </ThemeProvider>
        </div>
    )
}
