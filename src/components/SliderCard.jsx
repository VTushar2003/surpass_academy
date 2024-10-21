import React from 'react';

const SliderCard = ({ image, name, title }) => {
    return (
        <div className='h-80 w-[14rem] mx-2 rounded-xl overflow-hidden bg-white flex-shrink-0 flex flex-col space-y-2 '>
            <span className='h-3/4'>
                <img src={image} alt={name} className='object-cover w-full h-full' />
            </span>

            <h2 className='font-semibold text-xl  '>{name}</h2>
            <h4 className='text-base text-gray-600 '>{title}</h4>

        </div>
    );
}

export default SliderCard;
