import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function TopCourses() {
    const location = useLocation();
    const { country, topCarrers, filteredImages } = location.state || {};
    const [currentIndex, setCurrentIndex] = useState(0);
    const navigate = useNavigate();

    const handleNextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % topCarrers.length);
    };

    const handlePrevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + topCarrers.length) % topCarrers.length);
    };

    return (
        <div className='w-full h-full bg-white relative mt-[65px] font-robotoCondensed'>
            {/* Header Section */}
            <div className='w-full h-1/2 bg-eduTheme flex justify-center items-baseline'>
                <h1 className='text-2xl h-1/2 sm:text-4xl flex justify-center items-center font-medium mt-5 text-center px-4'>
                    Here are Top 3 Careers for you in {country}
                </h1>
            </div>

            {/* Carousel for Mobile View */}
            <div className='absolute top-1/4 bottom-1/4 w-full flex justify-center items-center sm:hidden'>
                {topCarrers && topCarrers.length > 0 && (
                    <div
                        key={topCarrers[currentIndex]}
                        className="w-[297px] h-[290px] m-4 flex flex-col justify-center items-center text-white bg-white font-bold rounded-md border-b-[3px] border-eduTheme shadow-lg transition-transform duration-500"
                    >
                        {/* Matching image */}
                        {filteredImages && (
                            <img
                                src={`https://edulinks.io/wp-content/uploads/2024/10/${filteredImages.find(item => item.course === topCarrers[currentIndex])?.imgPath}`}
                                alt='img'
                                className='w-[297px] h-[170px] rounded-md'
                            />
                        )}
                        <h1
                            className='text-xl h-28 flex justify-center items-center font-adramalech text-wrap my-2 text-center px-1'
                            style={{
                                background: 'linear-gradient(to bottom, #53C2C2 0%, #248182 100%)',
                                WebkitBackgroundClip: 'text',
                                color: 'transparent',
                            }}
                        >
                            {topCarrers[currentIndex]}
                        </h1>
                        <a href={`https://edulinks.io/${country.toLowerCase()}-${topCarrers[currentIndex].toLowerCase().replace(/\s+/g, '-').replace(/&/g, '')}/`}>
                            <button className='px-4 py-[3px] text-eduTheme border border-eduTheme rounded-md mb-2'>
                                Explore {' >'}
                            </button>
                        </a>
                    </div>
                )}
            </div>

            {/* Slider Buttons for Mobile View */}
            <button
                onClick={handlePrevSlide}
                className="absolute sm:hidden left-4 text-2xl top-1/2 border-2 border-eduTheme transform -translate-y-1/2 text-eduTheme bg-white rounded-full shadow-lg"
            >
                &lt;
            </button>
            <button
                onClick={handleNextSlide}
                className="absolute sm:hidden right-4 text-2xl top-1/2 border-2 border-eduTheme transform -translate-y-1/2 text-eduTheme bg-white rounded-full shadow-lg"
            >
                &gt;
            </button>

            {/* Desktop View: Static Grid */}
            <div className='hidden w-full absolute top-1/4 bottom-1/4 sm:flex justify-center items-center gap-2 mt-6'>
                {topCarrers && topCarrers.length > 0 && topCarrers.map((career, index) => (
                    <div
                        key={career}
                        className="w-[297px] h-[290px] m-4 flex flex-col justify-center items-center text-white bg-white font-bold rounded-md border-b-[3px] border-eduTheme shadow-lg"
                    >
                        {filteredImages && (
                            <img
                                src={`https://edulinks.io/wp-content/uploads/2024/10/${filteredImages.find(item => item.course === career)?.imgPath}`}
                                alt='img'
                                className='w-[297px] h-[170px] rounded-md'
                            />
                        )}
                        <h1
                            className='text-2xl h-28 flex justify-center items-center font-adramalech text-wrap my-2 text-center px-1'
                            style={{
                                background: 'linear-gradient(to bottom, #53C2C2 0%, #248182 100%)',
                                WebkitBackgroundClip: 'text',
                                color: 'transparent',
                            }}
                        >
                            {career}
                        </h1>
                        <a href={`https://edulinks.io/${country.toLowerCase()}-${career.toLowerCase().replace(/\s+/g, '-').replace(/&/g, '')}/`}>
                            <button className='px-4 py-[2px] text-eduTheme border border-eduTheme rounded-md mb-2'>
                                Explore {' >'}
                            </button>
                        </a>
                    </div>
                ))}
            </div>

            {/* Footer Section */}
            <div className='w-full h-1/2 bg-eduThemePhase flex justify-center items-end'>
                <div className='flex justify-center items-center h-3/4 w-full'>
                    <button onClick={() => navigate('/edulinks-ai-assistant/chat-with-me')} className='px-5 py-1 bg-eduTheme text-base font-medium text-white rounded mt-6'> Chat with me   {" >"}</button>
                </div>
            </div>
        </div>
    );
}

export default TopCourses;
