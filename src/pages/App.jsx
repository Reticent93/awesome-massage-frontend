import {useState} from 'react'
import {Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './Home'
import Massage from './Massage'
import ContactUs from "./ContactUs.jsx";
import About from "./About.jsx";
import NotFound from "./NotFound.jsx";
import Nav from "./Nav.jsx";
import Services from "./Services.jsx";

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <Nav />
        <div className="container">
            <div className="row">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="massage" element={<Massage/>}/>
                    <Route path="about" element={<About/>}/>
                    <Route path="services" element={<Services/>}/>
                    <Route path="contact" element={<ContactUs/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </div>
        </div>
        </>
    )
}

export default App
