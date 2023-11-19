import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../Firebase/FirebaseAuth';
import { signOut } from 'firebase/auth';
import logo from '../Image/logo (10).png'
import { IoIosSearch } from "react-icons/io";

const Navbar = () => {
const [isMobileMenuOpen, setMobileMenuOpen] =useState(false);
const toggleMobileMenu = () => {
setMobileMenuOpen(!isMobileMenuOpen);
};

const [user]=useAuthState(auth)
console.log(user)
const handleSignOut=()=>{
signOut(auth)
}

return (
<div>

    <nav className=" bg-white  border-gray-200  dark:bg-gray-900 shadow-sm">
        <div className="flex flex-wrap items-center justify-between  max-w-screen-xl px-4 mx-auto">
            <NavLink to={'/'}>
                <a href="#" className="flex items-center">
                    <img className='h-[50px]' src={logo} alt="logo img" />
                </a>
            </NavLink>
            <div className="flex items-center lg:order-2">
                <div className="hidden mt-2 mr-4 sm:inline-block">
                    <span></span>
                </div>



                {
                user ? (
                <NavLink to={'/login'}>
                    <a href="#" onClick={handleSignOut}
                        className="  text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800">
                        Login
                    </a>
                </NavLink>
                ):(
                <NavLink to={'/signUp'}>
                    <a href="#"
                        className="   font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800">
                        SignUp
                    </a>
                </NavLink>
                )
                }

                <button data-collapse-toggle="mobile-menu-2" type="button" onClick={toggleMobileMenu}
                    className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="mobile-menu-2" aria-expanded="true">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd"
                            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                            clipRule="evenodd"></path>
                    </svg>
                    <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"></path>
                    </svg>
                </button>
            </div>
            <div className={` items-center justify-between w-full lg:flex lg:w-auto lg:order-1 ${ isMobileMenuOpen
                ? 'block' : 'hidden' }`} id="mobile-menu-2">
                <ul className="  flex  flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                    <li>

                        <NavLink to={'/home'}>
                            <a href="#"
                                className="block py-2 pl-3 pr-4 bg-purple-700 text-white md:text-black  rounded lg:bg-transparent lg:p-0  font-mono font-semibold text-[17px]"
                                aria-current="page">
                                Home
                            </a>
                        </NavLink>

                    </li>
                    <li>
                        <NavLink to={'/movie'}>
                            <a href="#"
                                className="block py-2 pl-3 pr-4  border-b border-gray-100 hover-bg-gray-50 lg:hover-bg-transparent lg:border-0 lg:hover-text-purple-700 lg:p-0 dark-text-gray-400 lg-dark-hover-text-white dark-hover-bg-gray-700 dark-hover-text-white lg-dark-hover-bg-transparent dark-border-gray-700 font-mono font-semibold text-[17px]"
                                aria-current="page">
                                Movie
                            </a>
                        </NavLink>

                    </li>

                    <div className='flex justify-center items-center'>
                        <li className='pb-2 md:pb-0 relative'>
                            <input className='border-2 rounded-md px-2 py-1 md:py-0.5 w-full mt-1 md:mt-0 pr-8'
                                type="text" placeholder='Search' />
                            <IoIosSearch
                                className='absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500' />
                        </li>
                    </div>

                </ul>
            </div>
        </div>
    </nav>
</div>
);
};

export default Navbar;
