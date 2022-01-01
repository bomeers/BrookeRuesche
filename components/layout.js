import Head from 'next/head'
import { setBackground } from './setBackground'
import Navbar from './navbar'
import Footer from './footer'
import Image from 'next/image'
import { Container, Box } from '@mui/material'

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
                        <Navbar />

                        <Box id="home" sx={{
                            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url("images/background/brfitness-${setBackground()}.jpg")`,
                            marginTop: '60px'
                        }}>
                            <Container>
                                <Image layout="intrinsic" width='900' height='564' src="/images/logos/logo-white.svg" />
                            </Container>
                        </Box>
                    </>
                ) : (
                    <>
                        <Navbar />
                    </>
                )}
            </header>
            <main>{children}</main>
            <Footer />
        </div>
    )
}
