import React from 'react';
import { useGlobalContext } from '../Context/Context';

const Profile = () => {
    const { handleLogout, user } = useGlobalContext();

    const list = [
        { id: 1, text: "Dashboard", icon: "ri-slow-down-line" },
        { id: 2, text: "My Profile", icon: "ri-user-3-fill" },
        { id: 3, text: "Order History", icon: "ri-shopping-cart-2-fill" },
        { id: 4, text: "Question & Answer", icon: "ri-bookmark-2-fill" },
        { id: 5, text: "Messages / Live Chat", icon: "ri-question-answer-fill" },
    ];

    return (
        <div className='relative w-60 group'>
            {/* Profile Info */}
            <div className='flex items-center space-x-3'>
                <span className='h-10 w-10 bg-black rounded-full overflow-hidden'>
                    <img src="./images/profileimg.jpg" alt="profile" className='object-cover' />
                </span>
                <span className='hidden lg:block'> {/* Show only on large screens */}
                    <h2 className='text-tthird font-semibold text-sm'>{user.name}</h2>
                    <h2 className='text-tprimary text-sm'>Student</h2>
                </span>
            </div>

            {/* Dropdown Menu */}
            <ul className='absolute bg-white pt-5 space-y-1 p-5 w-full opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 shadow-lg z-10'>
                <h1 className='text-tthird text-lg font-semibold'>Dashboard</h1>
                {list.map((val, indx) => (
                    <li key={indx} className='hover:text-tsecondary pl-2 text-sm cursor-pointer flex items-center'>
                        <i className={`${val.icon} pr-1`} />{val.text}
                    </li>
                ))}
                <h1 className='text-tthird text-lg font-semibold'>Account Settings</h1>
                <li className='hover:text-tsecondary pl-2 text-sm cursor-pointer flex items-center'>
                    <i className="ri-settings-3-fill pr-1" />Settings
                </li>
                <li className='hover:text-tsecondary pl-2 text-sm cursor-pointer flex items-center' onClick={handleLogout}>
                    <i className="ri-logout-box-fill pr-1" />Logout
                </li>
            </ul>

            {/* Mobile Profile Info */}
            <div className='block lg:hidden'> {/* Show only on small screens */}
                <h2 className='text-tthird font-semibold text-sm'>{user.username}</h2>
                <h2 className='text-tprimary text-sm'>Student</h2>
            </div>
        </div>
    );
}

export default Profile;
