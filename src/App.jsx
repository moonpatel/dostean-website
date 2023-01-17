import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css'
import AboutUs from './components/AboutUs';
import Dishes from './components/Dishes';
import Gallery from './components/Gallery';
import Home from './components/Home'
import Menu from './components/Menu';
import { dishes } from './menu.json'


function App() {

    return (
        <Routes>
            <Route path='/' element={<Navigate replace to={"/home"} />} />
            <Route path='/home' element={<Home />} />
            <Route path='/menu/*' element={<Menu />} />
            <Route path='/gallery' element={<Gallery />} />
            <Route path='/about-us' element={<AboutUs />} />
        </Routes>
    );
}

export default App
