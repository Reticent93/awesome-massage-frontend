import {useState} from 'react'
import {Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './Home'
import Massage from './Massage'
import ContactUs from "./ContactUs.jsx";
import Team from "./Team.jsx";
import Book from "./Book.jsx";
import NotFound from "./NotFound.jsx";
import Nav from "./Nav.jsx";
import Services from "./Services.jsx";
import Footer from "./Footer.jsx";

function App() {
    const [count, setCount] = useState(0)

    return (
        <div>
            <Nav />
        <div >
            <div className="row mh-100">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="massage" element={<Massage/>}/>
                    <Route path="team" element={<Team/>}/>
                    <Route path="services" element={<Services/>}/>
                    <Route path="contact" element={<ContactUs/>}/>
                    <Route path="book" element={<Book/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </div>
            <Footer />
        </div>
        </div>
    )
}

export default App
