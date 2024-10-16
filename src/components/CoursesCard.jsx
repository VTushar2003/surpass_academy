import React from 'react'

const CoursesCard = () => {
    return (
        <>
            <div className='p-4 bg-white w-[25vw] flex-col flex items-center rounded-xl border shadow-sm'>
                {/* Image */}
                <span className='w-full rounded-xl overflow-hidden border'>
                    <img src="./images/surpassLogo.png" alt="courses" className='h-56 object-cover' />
                </span>

                <span className='h-20 w-full'></span>

                {/* Course Info */}
                <span className='border-b w-full border-slate-400 pb-3 space-y-4'>
                    {/* Truncate text with ellipsis */}
                    <p className='text-tthird font-semibold text-lg truncate-ellipsis'>
                        Wordpress for beginners Master Wordpress Quickly
                    </p>
                    <h5 className='flex items-center gap-2 text-tprimary text-sm'>
                        <i className="ri-book-open-line text-tsecondary" />
                        12+ Lessons
                    </h5>
                </span>

                <span className='h-8 w-full'></span>
            </div>
        </>
    )
}

export default CoursesCard
