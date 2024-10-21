import React from 'react';

const Footer = () => {
    return (
        <footer className='bg-[#f0f7ff] flex flex-col items-center justify-between p-4'>
            <div className='grid grid-cols-1 md:grid-cols-4 w-full md:w-3/4 h-auto justify-items-center pt-7 gap-4'>
                <span className='space-y-5 text-center'>
                    <img src="./images/surpasslogotrans.png" alt="" className="w-32 md:w-48" /> {/* Responsive logo size */}
                    <p className="text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat mauris Lorem ipsum dolor sit amet.</p>
                </span>
                <span className='space-y-3'>
                    <h1 className='text-tthird font-bold text-lg'>Quick Links</h1>
                    <ul className='text-sm space-y-2 font-semibold'>
                        <li>Courses</li>
                        <li>Instructors</li>
                        <li>Placements</li>
                        <li>FAQ</li>
                        <li>Contact Us</li>
                    </ul>
                </span>
                <span className='space-y-3'>
                    <h1 className='text-tthird font-bold text-lg'>For Students</h1>
                    <ul className='text-sm space-y-2 font-semibold'>
                        <li>Dashboard</li>
                        <li>Profile</li>
                        <li>Questions & Answers</li>
                        <li>Live Chat</li>
                        <li>Order History</li>
                    </ul>
                </span>
                <span className='space-y-3'>
                    <h1 className='text-tthird font-bold text-lg'>Contact Us</h1>
                    <ul className='text-sm space-y-2 font-semibold'>
                        <li className='flex items-start'>
                            <i className="ri-map-pin-fill text-[#58247E] pr-2"></i>
                            <span>
                                <p>421-425 S.M. Lodha Complex, Udaipur-313001 (Raj.)</p>
                            </span>
                        </li>
                        <li>
                            <i className="ri-global-line text-tsecondary pr-2"></i>
                            <a href="https://surpass.academy/" className="hover:underline">https://surpass.academy/</a>
                        </li>
                        <li>
                            <i className="ri-message-2-line text-tsecondary pr-2"></i>
                            <a href="mailto:learn@surpass.co.in" className="hover:underline">learn@surpass.co.in</a>
                        </li>
                        <li className='flex items-start'>
                            <i className="ri-phone-line text-tsecondary pr-2"></i>
                            <span>
                                <p>+91-9636043246</p>
                                <p>+91-9636212273</p>
                            </span>
                        </li>
                    </ul>
                </span>
            </div>
            <div className='flex flex-col md:flex-row items-center justify-between text-xs w-full md:w-3/4 p-4'>
                <h2 className='mb-2 md:mb-0'>Terms | Privacy</h2>
                <h2 className='text-center md:text-right'>Copyright © 2024 Surpass Prowess India Pvt. Ltd. All Rights Reserved.</h2>
            </div>
        </footer>
    );
}

export default Footer;
