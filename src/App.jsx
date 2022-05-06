import { useState } from 'react'
import logo from '/images/logos/logo-white.svg'
import Navbar from './components/navbar'
import './App.css'

function App() {
    const [count, setCount] = useState(0)

    return (
        <div className="App">
            <Navbar />
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <video autoplay muted loop id="myVideo">
                    <source src="/public/video/promo.mp4" type="video/mp4" />
                    Your browser does not support HTML5 video.
                </video>
            </header>
        </div>
    )
}

export default App
