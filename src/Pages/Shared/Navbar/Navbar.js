import React, { createContext, useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FiAlignJustify } from "react-icons/fi";
import { ImCross } from "react-icons/im";
import DarkModeToggle from "react-dark-mode-toggle";
import { DarkLightTheme } from '../../../contexts/ThemeContext';
import './Navbar.scss';
import { AuthContext } from '../../../contexts/UserContext';
import { HiUser } from "react-icons/hi";
import Profile from '../Profile/Profile';
const Navbar = () => {
    const { user } = useContext(AuthContext);
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const { isDarkMode, setIsDarkMode } = useContext(DarkLightTheme);
    const [isOpen, setIsOpen] = useState(false);

    //this is for suddenly logout set profile open false

    return (
        <div className='relative'>
            <div className='shadow-lg '>
                <div className='lg:w-[90%] mx-auto h-[80px] flex align-middle relative'>
                    {/* two div for logo and nav links */}

                    {/* Left Logo */}
                    <div className='flex lg:w-[30%] mt-2 ml-10 lg:ml-0'>
                        <div>
                            <Link to='/'>  </Link>
                        </div>
                        <div>
                            <Link to='/'> <h4 className='text-white text-xl font-bold'>Daily <br /> Task</h4></Link>
                        </div>
                    </div>


                    {/* Navlinks for large display*/}
                    <div className='hidden lg:block lg:w-[70%] mt-5 lg:ml-40 mr-0'>
                        <ul className='lg:flex justify-around w-[90%] align-middle mx-auto text-xl text-white font-bold'>
                            <li><NavLink className={({ isActive }) =>
                                isActive ? 'active' : undefined
                            } to='/'>Home</NavLink></li>
                            <li><NavLink to='/addTask'>Add Task</NavLink></li>
                            <li><NavLink to='/myTask'>My Task</NavLink></li>
                            <li><NavLink to='/completedTask'>Completed Task</NavLink></li>
                            {
                                user?.email ?
                                    <HiUser
                                        onClick={() => setIsProfileOpen(!isProfileOpen)} className='text-3xl cursor-pointer'>

                                    </HiUser>
                                    :
                                    <li><NavLink to='/login'>Log In</NavLink></li>
                            }
                            <li>
                                <DarkModeToggle
                                    onChange={setIsDarkMode}
                                    checked={isDarkMode}
                                    size={50}
                                />
                            </li>

                        </ul>
                    </div>


                    {/* This div is for navigation bar toggle bars.  */}
                    <div className='lg:hidden mt-5 w-[70%] flex justify-end mr-10 text-white select-none'>
                        {
                            isOpen ? <ImCross onClick={() => setIsOpen(false)} className='text-2xl cursor-pointer '></ImCross>
                                :
                                <FiAlignJustify onClick={() => setIsOpen(true)} className='text-3xl cursor-pointer'></FiAlignJustify>
                        }
                    </div>
                </div>
            </div>


            {/* This Navlinks for small display. these navlinks will show in small devices and after clicking the green bar and will be disappeared after clicking the cross sign */}

            <div className={`lg:hidden w-full mt-[80px] absolute ${isOpen ? `top-0` : `top-[-500px]`} duration-500 z-10`}>
                <ul className='text-white font-bold '>
                    <li className=' bg-blue-700 block p-5'><NavLink to='/'>Home</NavLink></li>
                    <li className=' bg-blue-700 w-full p-5'><NavLink to='/addTask'>Add Task</NavLink></li>
                    <li className=' bg-blue-700 w-full p-5'><NavLink to='/myTask'>My Task</NavLink></li>
                    <li className=' bg-blue-700 w-full p-5'><NavLink to='/completedTask'>Completed Task</NavLink></li>
                    {
                        user?.email ?
                            <h1
                                onClick={() => setIsProfileOpen(!isProfileOpen)} className='text-xl bg-blue-700 cursor-pointer  w-full p-5'>
                                Profile
                            </h1>
                            :
                            <li><NavLink className='bg-blue-700 w-full p-5' to='/login'>Log In</NavLink></li>
                    }
                    <li className='bg-blue-700 w-full p-5'> <DarkModeToggle
                        onChange={setIsDarkMode}
                        checked={isDarkMode}
                        size={50}
                    /></li>

                </ul>

            </div>
            <div className='absolute top-[80px] right-[40px] z-50'>
                {isProfileOpen ? <Profile setIsProfileOpen={setIsProfileOpen}></Profile> : ''}
            </div>
        </div>
    )
};

export default Navbar;