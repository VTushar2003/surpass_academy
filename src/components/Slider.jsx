import React, { useEffect, useRef, useState } from 'react';
import SliderCard from './SliderCard';

const Slider = () => {
    const list = [
        { id: 1, image: "./images/human.jpg", name: "David Lee", title: "Web Developer" },
        { id: 2, image: "./images/instructor2.png", name: "Daziy Millar", title: "PHP Expert" },
        { id: 3, image: "./images/instructor3.png", name: "Patricia Mendoza", title: "Web Developer" },
        { id: 4, image: "./images/instructor4.jpg", name: "Skyler Whites", title: "UI Designer" },
        { id: 5, image: "./images/human.jpg", name: "James Wilson", title: "DevOps Engineer" },
        { id: 6, image: "./images/instructor2.png", name: "Daziy Millar", title: "PHP Expert" },
        { id: 7, image: "./images/instructor3.png", name: "Patricia Mendoza", title: "Web Developer" },
        { id: 8, image: "./images/instructor4.jpg", name: "Skyler Whites", title: "UI Designer" },
    ];

    const [sliderId, setSliderId] = useState(1);
    const [visibleCards, setVisibleCards] = useState(4);
    const intervalRef = useRef(null);

    // Determine visible cards based on screen width
    const updateVisibleCards = () => {
        const width = window.innerWidth;
        if (width < 640) return 1; // Mobile
        if (width < 1024) return 2; // Tablet
        return 4; // Laptop and above
    };

    useEffect(() => {
        const handleResize = () => setVisibleCards(updateVisibleCards());

        window.addEventListener('resize', handleResize);
        setVisibleCards(updateVisibleCards());

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const totalSlides = Math.ceil(list.length / visibleCards);

    const moveDot = (index) => {
        setSliderId(index);
        resetAutoSlide();
    };

    const resetAutoSlide = () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        autoSlide();
    };

    const autoSlide = () => {
        intervalRef.current = setInterval(() => {
            setSliderId(prev => (prev !== totalSlides ? prev + 1 : 1));
        }, 5000);
    };

    useEffect(() => {
        autoSlide();
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [totalSlides]);

    return (
        <div className='relative bg-gradient-to-r from-[#D9EEFE] to-[#e3e3f8] min-h-screen w-full mt-10 text-center flex flex-col items-center justify-evenly py-10'>
            <div className='h-fit w-11/12 md:w-1/2 space-y-10'>
                <h1 className='text-tthird text-3xl font-semibold'>Featured Instructor</h1>
                <p className='text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan bibendum gravida maecenas augue elementum et neque. Suspendisse imperdiet.</p>
            </div>

            {/* Slider Container */}
            <div className='overflow-hidden w-[90%] md:w-[76%]'>
                <div className='flex transition-all duration-500 ease-in-out'
                    style={{ transform: `translateX(-${(sliderId - 1) * 100 / totalSlides}%)`, width: `${totalSlides * 100}%` }}>
                    {list.map((val) => (
                        <SliderCard key={val.id} name={val.name} image={val.image} title={val.title} />
                    ))}
                </div>
            </div>

            {/* Dots for navigation */}
            <div className="flex justify-center absolute w-full top-[92%]">
                {Array.from({ length: totalSlides }, (_, index) => (
                    <div
                        key={index}
                        onClick={() => moveDot(index + 1)}
                        className={`cursor-pointer w-4 h-4 mx-2 rounded-full ${sliderId === index + 1 ? 'bg-[#DB4444] border-2 border-white' : 'bg-slate-300'}`}
                    ></div>
                ))}
            </div>
        </div>
    );
}

export default Slider;
