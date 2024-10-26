import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {

    window.onscroll = () => {
        const header = document.querySelector('header');
        const scrollY = window.scrollY;
        if (scrollY > 0) {
            header.classList.add('bg-secondary', scrollY > 500);
        } else {
            header.classList.remove('bg-secondary', scrollY > 500);
        }
    }

    // Navlinks
    const navlinks = (
        <>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about-us">about us</NavLink></li>
            <li><NavLink to="/services">services</NavLink></li>
            <li><NavLink to="/projects">projects</NavLink></li>
            <li><NavLink to="/blog">Blog</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
        </>
    )
    return (
        <header className='fixed top-0 z-50 w-full py-3 duration-500'>
            <div className="navbar container mx-auto">
                <a className="flex items-end gap-1">
                    <span className='uppercase font-spline text-3xl logo'>  shrabon </span>
                    <div class="flex justify-center items-center">
                        <div class="relative inline-flex">
                            <div class="w-3 h-3 bg-[#c7d300] rounded-full"></div>
                            <div class="w-3 h-3 bg-[#c7d300] rounded-full absolute top-0 left-0 animate-ping"></div>
                            <div class="w-3 h-3 bg-[#c7d300] rounded-full absolute top-0 left-0 animate-pulse"></div>
                        </div>
                    </div>
                </a>
                <div className="navbar-end">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow uppercase">
                            {navlinks}
                        </ul>
                    </div>

                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 uppercase text-white font-semibold">
                        {navlinks}
                    </ul>
                </div>

            </div>
        </header>
    );
};

export default Header;