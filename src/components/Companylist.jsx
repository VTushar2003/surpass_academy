import React from 'react'
import RedirectComp from './RedirectComp'

const Companylist = () => {
    const image = [
        {
            id: 1,
            url: "./images/comp1.png"
        },
        {
            id: 2,
            url: "./images/comp2.png"
        },
        {
            id: 3,
            url: "./images/comp3.png"
        },
        {
            id: 4,
            url: "./images/comp4.png"
        },
        {
            id: 5,
            url: "./images/comp5.png"
        },
        {
            id: 6,
            url: "./images/comp6.png"
        },
    ]
    return (
        <>
            <div className='p-14 w-full h-[100vh] flex flex-col items-center justify-center'>
                <span className='text-center space-y-3'>
                    <h4 className='font-semibold text-base text-tsecondary'>Trusted By</h4>
                    <h2 className='font-semibold text-3xl'>500+ Leading Universities And Companies</h2>
                </span>
                <span className='flex  items-center  justify-center gap-x-16 w-full mt-8'>
                    {image.map((val) => <img key={val.id} src={val.url} alt='Comapnies' className='object-contain' />)}
                </span>
                <div className='flex  w-full mt-10 justify-center gap-x-6 items-center p-4'>
                    <RedirectComp toptext="EXAM PREP COURSES" bgColor="#ffdeda"
                        cuttext="Become An Instructor"
                        arrowText="It will redirect to surpass website all courses page"
                        title="Top Instructors From around the world teach millions of students on Mentoring."
                        image="./images/Learning.svg"
                    />
                    <RedirectComp toptext="OFFLINE COURSES" bgColor="#ffe88f"
                        cuttext="Transform Access To Education"
                        title="Create an account to Receive our newsletter , courses recommnendations and promotions."
                        arrowText="it will redirect to surpass website subscription page"
                        image="./images/Forms.svg"
                    />
                </div>
            </div>
        </>
    )
}

export default Companylist
    