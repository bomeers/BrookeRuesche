import { useState } from 'react'
import logo from '/images/logos/logo-white.svg'
import Footer from '../../components/footer'
import Navbar from '../../components/navbar'
import { Button } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import BRFtheme from '../../styles/theme'

function Home() {
    const [count, setCount] = useState(0)

    return (
        <div className="App">
            <Navbar />
            <ThemeProvider theme={BRFtheme}>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <div className='Dark-Overlay'></div>
                    <video autoPlay muted loop id="myVideo">
                        <source src="/video/promo.mp4" type="video/mp4" />
                        Your browser does not support HTML5 video.
                    </video>
                    <p className='links'>
                        <Button variant="outlined" size="large"><a href='https://www.picktime.com/2ace4f86-b2db-46a7-81b1-428857ff9dd7' target="_blank">SCHEDULE AN APPOINTMENT</a></Button>
                    </p>
                    <p id='Scroll'>scroll down</p>
                    <div id='Arrow'>^</div>
                </header>
                <div id='body'>
                    <div id='About-Me'>
                        <h2>Hey! I'm Brooke</h2>
                        <br />
                        I have been a personal trainer since 2018, studying everything from example 1, example 2, and example 3,
                        all the way to the more detailed things like example 1 and example 2. I am dedicated to making your experience here great
                        all while acheiving your goals. Once I've gotten to know you and your goals, I create a custom workout routine to fit your needs.
                        You also have the option to train from wherever you prefer, so you don't have to worry about an additional cost for a gym membership
                        if you want to train with me!
                        <br />
                        <br />
                        If you are interested,
                        <br />
                        <br />
                        <Button variant="contained" size="large"><a href='https://www.picktime.com/2ace4f86-b2db-46a7-81b1-428857ff9dd7' target="_blank">schedule an appointment today!</a></Button>
                    </div>
                </div>
                <Footer />
            </ThemeProvider>
        </div>
    )
}

export default Home
