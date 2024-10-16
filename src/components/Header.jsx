import React from 'react'
import Profile from './Profile'

const Header = () => {
    return (
        <>
            <nav className='flex  items-center justify-around px-8 space-x-10'>
                <img src="./images/surpassLogo.png" alt="logo" className='w-32 object-contain' />
                <ul className='flex text-tprimary text-sm font-semibold items-center space-x-10 w-1/2'>
                    <li>Courses</li>
                    <li>Instructors</li>
                    <li>Placements</li>
                    <li>FAQ</li>
                    <li>Contact Us</li>
                </ul>
                <h2 className='text-tsecondary text-sm text-nowrap underline font-bold'>Go to Website</h2>
                <span className='border-2 p-2 border-slate-300 rounded-full h-10 w-10 flex items-center justify-center '><i className="ri-notification-2-fill text-tprimary " /></span>
                {/* profile component */}
                <Profile />
            </nav>
        </>
    )
}

export default Header
