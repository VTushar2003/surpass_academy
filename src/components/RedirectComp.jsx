import React from 'react';
import { Link } from 'react-router-dom';

const RedirectComp = ({ bgColor, toptext, cuttext, title, arrowText, image }) => {
    return (
        <div className={`h-[12rem] flex items-center justify-evenly gap-10 relative w-full md:w-[35rem] rounded-2xl`} style={{ backgroundColor: bgColor }}>
            <h1 className='absolute left-8 top-0 -mt-3.5 text-xl font-extrabold'>{toptext}</h1>
            <span className='w-1/2 space-y-3'>
                <h1 className='line-through text-nowrap text-tthird font-bold text-lg'>{cuttext}</h1>
                <p className='text-[0.9rem] font-medium text-pretty tracking-tighter'>{title}</p>
                <h2 className='bg-white w-fit px-4 py-2 mt-5 rounded-xl text-sm font-semibold relative'>
                    <Link to="#" target="_blank" rel="noopener noreferrer">Click Me</Link>
                    <img src="./images/arrow.png" alt="arrow" className='absolute bg-transparent h-[3rem] object-contain w-[5rem] left-14' />
                    <h1 className='absolute font-semibold text-sm text-justify w-[16rem] top-20 left-20'>{arrowText}</h1>
                </h2>
            </span>
            <span>
                <img src={image} alt="image" className='object-contain h-32 w-32 md:h-40 md:w-40' />
            </span>
        </div>
    );
}

export default RedirectComp;
