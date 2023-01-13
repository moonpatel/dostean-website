import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css'
import Gallery from './components/Gallery';
import Home from './components/home'

function App() {

    return (
        <Routes>
            <Route path='/' element={<Navigate replace to={"/home"} />} />
            <Route path='/home' element={<Home />} />
            <Route path='/gallery' element={<Gallery />} />
        </Routes>
    );
}

export default App
