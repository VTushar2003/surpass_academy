import React from 'react';

const Options = ({ text, image, arrow, extrastyles, width }) => {
    return (
        <main className={`p-4 flex items-center space-x-4 bg-white h-24 rounded-xl shadow-sm border ${width}`}>
            <img src={image} alt="options" className='object-cover h-12 w-12' />
            <span className='flex flex-col'>
                <h2 className={`text-xs sm:text-sm md:text-base ${extrastyles}`}>{text}</h2>
                <h1 className='text-sm sm:text-lg md:text-base lg:text-sm'>{arrow}</h1>
            </span>
        </main>
    );
}

export default Options;
