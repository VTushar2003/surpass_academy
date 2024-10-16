import React from 'react'

const Options = ({ text, image, arrow, extrastyles, width }) => {
    return (
        <>
            <main className={`p-4 flex items-center space-x-4 bg-white h-24 w-${width} rounded-xl shadow-sm border`}>
                <img src={image} alt="images" className='object-cover h-12 w-12' />
                <span>
                    <h2 className={` text-sm ${extrastyles}`}>{text}</h2>
                    <h1 >{arrow}</h1>
                </span>
            </main >
        </>
    )
}

export default Options
