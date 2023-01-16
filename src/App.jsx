import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css'
import AboutUs from './components/AboutUs';
import Gallery from './components/Gallery';
import Home from './components/Home'
import Menu from './components/Menu';

function App() {

    return (
        <Routes>
            <Route path='/' element={<Navigate replace to={"/home"} />} />
            <Route path='/home' element={<Home />} />
            <Route path='/menu' element={<Menu />} />
            <Route path='/gallery' element={<Gallery />} />
            <Route path='/about-us' element={<AboutUs />} />
        </Routes>
    );
}

export default App
