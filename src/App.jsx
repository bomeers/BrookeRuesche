import { useState } from 'react'
import './styles/App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/home'

function App() {
    const [count, setCount] = useState(0)

    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/' element={<Navigate replace to='/home' />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
