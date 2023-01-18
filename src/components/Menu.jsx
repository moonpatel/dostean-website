/** @format */

import React from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import Navbar from './home_component/Navbar'
import { dishes } from '../menu.json'
import Dishes from './Dishes'
import Footer from './home_component/Footer'
import Mocktail from '../svg/mocktail.svg'
import shake from '../svg/shake.svg'
import tea from '../svg/tea.svg'
import coffee from '../svg/coffee.svg'
import soup from '../svg/soup.svg'
import continental from '../svg/continental.svg'
import chinese from '../svg/chinese.svg'
import fries from '../svg/fries.svg'
import bread from '../svg/bread.svg'
import curry from '../svg/curry.svg'
import wrap from '../svg/wrap.svg'
import bun from '../svg/bun.svg'
import pizza from '../svg/pizza.svg'
import maggie from '../svg/maggie.svg'
import salad from '../svg/salad.svg'
import dessert from '../svg/dessert.svg'

console.log(dishes)
const Menu = () => {
    const activeStateFunction = ({ isActive }) => {
        return isActive
            ? 'bg-primary-300 text-white scale-[1.15] -z-10 rounded transition-all duration-300'
            : 'bg-gray-300 hover:bg-primary-300 rounded'
    }
    return (
        <>
            <Navbar />
            <div className='h-32'></div>
            <h1 className='text-4xl text-center my-5'>Our Menu</h1>
            <div className='mb-32'>
                <ul className='flex flex-wrap gap-5 gap-x-3 justify-center px-10 my-3'>
                    <NavLink className={activeStateFunction} to='mocktail'>
                        <li className='p-2 flex items-center'>
                            <img src={Mocktail} alt='' className=' w-5' />
                            <span className='fontmerienda font-bold'>Mocktail</span>
                            <span></span>
                        </li>
                    </NavLink>
                    <NavLink className={activeStateFunction} to='shake'>
                        <li className='p-2 flex items-center'>
                            <img src={shake} alt='' className='w-5' />
                            <span className='fontmerienda font-bold'>Shake</span>
                            <span></span>
                        </li>
                    </NavLink>
                    <NavLink className={activeStateFunction} to='tea'>
                        <li className='p-2 flex items-center'>
                            <img src={tea} alt='' className='w-5 mb-0.5' />
                            <span className='fontmerienda font-bold'>Tea</span>
                            <span></span>
                        </li>
                    </NavLink>
                    <NavLink className={activeStateFunction} to='hot-coffee'>
                        <li className='p-2 flex items-center'>
                            <img src={coffee} alt='' className='w-5 mb-0.5' />
                            <span className='fontmerienda font-bold'>Hot Coffee</span>
                            <span></span>
                        </li>
                    </NavLink>
                    <NavLink className={activeStateFunction} to='soup'>
                        <li className='p-2 flex items-center'>
                            <img src={soup} alt='' className='w-5' />
                            <span className='fontmerienda font-bold'>Soup</span>
                            <span></span>
                        </li>
                    </NavLink>
                    <NavLink className={activeStateFunction} to='continental'>
                        <li className='p-2 flex items-center'>
                            <img src={continental} alt='' className='w-5' />
                            <span className='fontmerienda font-bold'>Continental</span>
                            <span></span>
                        </li>
                    </NavLink>
                    <NavLink className={activeStateFunction} to='chinese'>
                        <li className='p-2 flex items-center'>
                            <img src={chinese} alt='' className='w-5' />
                            <span className='fontmerienda font-bold'>Chinese</span>
                            <span></span>
                        </li>
                    </NavLink>
                    <NavLink className={activeStateFunction} to='fries'>
                        <li className='p-2 flex items-center'>
                            <img src={fries} alt='' className='w-5' />
                            <span className='fontmerienda font-bold'>Fries</span>
                            <span></span>
                        </li>
                    </NavLink>
                    <NavLink className={activeStateFunction} to='bread'>
                        <li className='p-2 flex items-center'>
                            <img src={bread} alt='' className='w-5' />
                            <span className='fontmerienda font-bold'>Bread</span>
                            <span></span>
                        </li>
                    </NavLink>
                    <NavLink className={activeStateFunction} to='lebanese'>
                        <li className='p-2 flex items-center'>
                            <img src={curry} alt='' className='w-5 mb-1.5' />
                            <span className='fontmerienda font-bold'>Lebanase</span>
                            <span></span>
                        </li>
                    </NavLink>
                    <NavLink className={activeStateFunction} to='wrap'>
                        <li className='p-2 flex items-center'>
                            <img src={wrap} alt='' className='w-5' />
                            <span className='fontmerienda font-bold'>Wrap</span>
                            <span></span>
                        </li>
                    </NavLink>
                    <NavLink className={activeStateFunction} to='sandwich'>
                        <li className='p-2 flex items-center'>
                            <img src={bread} alt='' className='w-5' />
                            <span className='fontmerienda font-bold'>Sandwich</span>
                            <span></span>
                        </li>
                    </NavLink>
                    <NavLink className={activeStateFunction} to='buns'>
                        <li className='p-2 flex items-center'>
                            <img src={bun} alt='' className='w-5' />
                            <span className='fontmerienda font-bold'>Buns</span>
                            <span></span>
                        </li>
                    </NavLink>
                    <NavLink className={activeStateFunction} to='pizza'>
                        <li className='p-2 flex items-center'>
                            <img src={pizza} alt='' className='w-5' />
                            <span className='fontmerienda font-bold'>Pizza</span>
                            <span></span>
                        </li>
                    </NavLink>
                    <NavLink className={activeStateFunction} to='pasta'>
                        <li className='p-2 flex items-center'>
                            <img src={bread} alt='' className='w-5' />
                            <span className='fontmerienda font-bold'>Pasta</span>
                            <span></span>
                        </li>
                    </NavLink>
                    <NavLink className={activeStateFunction} to='baked-dish'>
                        <li className='p-2 flex items-center'>
                            <img src={curry} alt='' className='w-5 mb-1.5' />
                            <span className='fontmerienda font-bold'>Baked dish</span>
                            <span></span>
                        </li>
                    </NavLink>
                    <NavLink className={activeStateFunction} to='maggie'>
                        <li className='p-2 flex items-center'>
                            <img src={maggie} alt='' className='w-5 mb-1' />
                            <span className='fontmerienda font-bold'>Maggie</span>
                            <span></span>
                        </li>
                    </NavLink>
                    <NavLink className={activeStateFunction} to='indian'>
                        <li className='p-2 flex items-center'>
                            <img src={curry} alt='' className='w-5 mb-1.5' />
                            <span className='fontmerienda font-bold'>Indian</span>
                            <span></span>
                        </li>
                    </NavLink>
                    <NavLink className={activeStateFunction} to='sizzler'>
                        <li className='p-2 flex items-center'>
                            <img src={salad} alt='' className='w-5' />
                            <span className='fontmerienda font-bold'>Sizzler</span>
                            <span></span>
                        </li>
                    </NavLink>
                    <NavLink className={activeStateFunction} to='salad'>
                        <li className='p-2 flex items-center'>
                            <img src={salad} alt='' className='w-5' />
                            <span className='fontmerienda font-bold'>Salad</span>
                            <span></span>
                        </li>
                    </NavLink>
                    <NavLink className={activeStateFunction} to='dessert'>
                        <li className='p-2 flex items-center'>
                            <img src={dessert} alt='' className='w-5' />
                            <span className='fontmerienda font-bold'>Dessert</span>
                            <span></span>
                        </li>
                    </NavLink>
                    <NavLink className={activeStateFunction} to='accomplishment'>
                        <li className='p-2 flex items-center'>
                            <img src={curry} alt='' className='w-5 mb-1.5' />
                            <span className='fontmerienda font-bold'>Accomplishment</span>
                            <span></span>
                        </li>
                    </NavLink>
                </ul>
                <div className='h-10'></div>
                <Routes>
                    <Route path='' element='Nothing' />
                    {dishes.map((dish, index) => {
                        return (
                            <Route
                                path={dish.name}
                                key={index}
                                element={<Dishes dishes={dish.dishes} name={dish.name} />}
                            />
                        )
                    })}
                </Routes>
            </div>
            <Footer />
        </>
    )
}

export default Menu
