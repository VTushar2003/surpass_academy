import React, { useState } from 'react';
import Profile from './Profile';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false); // State to manage the hamburger menu

    const toggleMenu = () => {
        setIsOpen(!isOpen); // Toggle menu visibility
    };

    return (
        <>
            <nav className='flex flex-col lg:flex-row items-center justify-between px-4 lg:px-8 py-4'>
                <img src="./images/surpassLogo.png" alt="logo" className='w-32 object-contain mb-4 lg:mb-0' />

                {/* Hamburger Icon for Small Screens */}
                <div className="lg:hidden flex items-center">
                    <button onClick={toggleMenu} className="text-tprimary focus:outline-none">
                        {isOpen ? (
                            <i className="ri-close-fill text-2xl" /> // Close icon
                        ) : (
                            <i className="ri-menu-2-line text-2xl" /> // Hamburger icon
                        )}
                    </button>
                </div>

                {/* Navigation Links */}
                <ul className={`flex-col lg:flex-row text-tprimary text-sm font-semibold items-center space-y-2 lg:space-y-0 lg:space-x-10 w-full lg:w-1/2 ${isOpen ? 'flex' : 'hidden lg:flex'}`}>
                    <li>Courses</li>
                    <li>Instructors</li>
                    <li>Placements</li>
                    <li>FAQ</li>
                    <li>Contact Us</li>
                </ul>

                {/* Icons and Profile Section */}
                <div className={`flex items-center space-x-4 ${isOpen ? 'flex-col lg:flex-row' : 'lg:flex-row'}`}>
                    <h2 className='text-tsecondary text-sm text-nowrap underline font-bold'>Go to Website</h2>
                    <span className='border-2 p-2 border-slate-300 rounded-full h-10 w-10 flex items-center justify-center'>
                        <i className="ri-notification-2-fill text-tprimary" />
                    </span>
                    {/* Profile component */}
                    <Profile />
                </div>
            </nav>

            {/* Optional: Adding a backdrop for the mobile menu */}
            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={toggleMenu}></div>
            )}
        </>
    );
}

export default Header;
