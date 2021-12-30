import Head from 'next/head'
import { setBackground } from './setBackground'
import Navbar from './navbar'
import Footer from './footer'

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
        </div>
    )
}
