import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Options from '../components/Options';
import CoursesCard from '../components/CoursesCard';
import Slider from '../components/Slider';
import Companylist from '../components/Companylist';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <>
            <Header />
            <Banner />

            {/* Options Section */}
            <section className='bg-[#fafafa] py-8 flex flex-col lg:flex-row items-center justify-center space-y-4 lg:space-y-0 lg:space-x-10'>
                <Options text="Completed Courses" image="./images/pencile.png" arrow={`--->`} extrastyles="font-semibold" width="w-full lg:w-52" />
                <Options text="Rewards" image="./images/rewards.png" arrow={`--->`} extrastyles="font-semibold" width="w-full lg:w-52" />
                <Options text="Challenges" image="./images/challenges.png" arrow={`--->`} extrastyles="font-semibold" width="w-full lg:w-52" />
                <Options text="Live Classes" image="./images/liveclasses.png" arrow={`--->`} extrastyles="font-semibold" width="w-full lg:w-52" />
            </section>

            {/* Courses Section */}
            <section className='py-8 px-4 sm:px-10 md:px-20 relative'>
                <div className='bg-[#fafafa] p-4'>
                    <h1 className='text-tthird font-semibold text-2xl pb-2'>Recently Enrolled Courses</h1>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-y-10'>
                        <CoursesCard />
                        <CoursesCard />
                        <CoursesCard />
                        <CoursesCard />
                        <CoursesCard />
                        <CoursesCard />
                    </div>
                </div>

                <div className='mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 px-2'>
                    <span className='space-y-3'>
                        <h4 className='text-tsecondary font-semibold'>What's New</h4>
                        <h2 className='text-3xl md:text-4xl text-nowrap font-semibold'>Master the Skills to Drive Your Career</h2>
                        <p className='text-sm md:text-base text-tprimary'> {/* Added responsive text size */}
                            Get certified, master modern tech skills, and level up your career — whether you’re starting
                            out or a seasoned pro. 95% of eLearning learners report our hands-on content directly
                            helped their careers.
                        </p>
                        <span className='grid grid-cols-1 sm:grid-cols-2 gap-4 text-ellipsis pt-8'>
                            <Options
                                image="./images/icon-1.svg.png"
                                extrastyles="text-tprimary text-xs"
                                text="Stay motivated with engaging instructors"
                            />
                            <Options
                                image="./images/icon-2.svg.png"
                                extrastyles="text-tprimary text-xs"
                                text="Keep up with the latest in cloud"
                            />
                            <Options
                                image="./images/icon-3.svg.png"
                                extrastyles="text-tprimary text-xs"
                                text="Get certified with 100+ certification courses"
                            />
                            <Options
                                image="./images/icon-4.svg.png"
                                extrastyles="text-tprimary text-xs"
                                text="Build skills your way, from labs to courses"
                            />
                        </span>
                    </span>
                    <span className='flex justify-center items-center pt-10'>
                        <img src="./images/lady.png" alt="lady" className='w-64 sm:w-80 md:w-96' /> {/* Adjusted widths for responsiveness */}
                    </span>
                </div>
            </section>

            <Slider />
            <Companylist />
            <Footer />
        </>
    );
}

export default Home;
