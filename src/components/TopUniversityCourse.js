import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function TopUniversityCourse() {

    const location = useLocation();
    const { selectedCountry, top3Courses, top3Universities, filteredImages } = location.state || {};

    // Separate state variables for university and course carousels
    const [currentUniversityIndex, setCurrentUniversityIndex] = useState(0);
    const [currentCourseIndex, setCurrentCourseIndex] = useState(0);

    console.log(selectedCountry, top3Universities, top3Courses, filteredImages);

    const navigate = useNavigate();

    // University Carousel Handlers
    const handleNextSlideForUniversity = () => {
        setCurrentUniversityIndex((prevIndex) => (prevIndex + 1) % top3Universities.length);
    };

    const handlePrevSlideForUniversity = () => {
        setCurrentUniversityIndex((prevIndex) => (prevIndex - 1 + top3Universities.length) % top3Universities.length);
    };

    // Course Carousel Handlers
    const handleNextSlideForCourse = () => {
        setCurrentCourseIndex((prevIndex) => (prevIndex + 1) % top3Courses.length);
    };

    const handlePrevSlideForCourse = () => {
        setCurrentCourseIndex((prevIndex) => (prevIndex - 1 + top3Courses.length) % top3Courses.length);
    };

    return (
        <div className='w-full h-full bg-eduTheme mt-24 flex-col justify-center items-center font-robotoCondensed'>
            {/* Universities Section */}
            <div className='flex flex-col justify-center items-center mt-5'>
                <div className='w-full flex justify-center items-center'>
                    <h1 className='text-2xl sm:text-[32px] flex justify-center items-center font-adramalech font-medium mt-5 text-center px-4'>
                        Here are Top 3 Universities for you in {selectedCountry}
                    </h1>
                </div>

                {/* Carousel for Mobile View */}
                <div className='w-full flex justify-center items-center sm:hidden relative'>
                    {top3Universities && top3Universities.length > 0 && (
                        <div
                            key={top3Universities[currentUniversityIndex]}
                            className="w-[297px] h-[290px] py-2 m-4 flex flex-col justify-center items-center text-white bg-white font-bold border-b-[3px] border-eduTheme shadow-lg transition-transform duration-500"
                        >
                            {/* Matching image */}
                            {filteredImages && (
                                <img
                                    src={`https://edulinks.io/wp-content/uploads/2024/10/${filteredImages.find(item => item.universityName === top3Universities[currentUniversityIndex])?.imgPath}`}
                                    alt='img'
                                    className='w-[276px] h-[170px] rounded-md'
                                />
                            )}
                            <h1
                                className='text-xl text-black h-28 flex justify-center items-center font-robotoCondensed text-wrap my-2 text-center px-1'
                            >
                                {top3Universities[currentUniversityIndex]}
                            </h1>
                            <a href={`https://edulinks.io/${selectedCountry === "New Zealand" ? "nz" : selectedCountry.toLowerCase()}-${top3Universities[currentUniversityIndex].toLowerCase().replace(/\s+/g, '-').replace(/&/g, '')}/`}>
                                <button className='px-4 py-[3px] text-eduTheme border border-eduTheme rounded-md mb-2'>
                                    Explore  <span> &gt; </span>
                                </button>
                            </a>
                        </div>
                    )}

                    {/* Slider Buttons for Mobile View */}
                    <button
                        onClick={handlePrevSlideForUniversity}
                        className="w-8 h-8 absolute sm:hidden left-2 text-2xl top-1/2 border-2 border-eduTheme transform -translate-y-1/2 text-eduTheme bg-white rounded-full shadow-lg flex justify-center items-center"
                    >
                        &lt;
                    </button>
                    <button
                        onClick={handleNextSlideForUniversity}
                        className="w-8 h-8 absolute sm:hidden right-2 text-2xl top-1/2 border-2 border-eduTheme transform -translate-y-1/2 text-eduTheme bg-white rounded-full shadow-lg flex justify-center items-center"
                    >
                        &gt;
                    </button>
                </div>

                {/* Desktop View: Static Grid */}
                <div className="hidden w-full sm:flex justify-center items-center gap-2 my-3">
                    {top3Universities && top3Universities.length > 0 && top3Universities.map((university, index) => (
                        <div
                            key={university}
                            className="w-[378px] h-[290px] m-4 py-3 flex flex-col justify-center items-center text-white bg-white font-bold border-b-[3px] border-eduTheme shadow-lg"
                        >
                            {/* Matching image */}
                            {filteredImages && (
                                <img
                                    src={`https://edulinks.io/wp-content/uploads/2024/10/${filteredImages.find(item => item.universityName === university)?.imgPath}`}
                                    alt={university}
                                    className="w-[354px] h-[174px] rounded-md"
                                />
                            )}
                            <h1
                                className="text-xl text-black h-28 flex justify-center items-center font-robotoCondensed text-wrap my-2 text-center px-1"
                            >
                                {university}
                            </h1>
                            <a
                                href={`https://edulinks.io/${selectedCountry === "New Zealand" ? "nz" : selectedCountry.toLowerCase()}-${university.toLowerCase().replace(/\s+/g, '-').replace(/&/g, '')}/`}
                            >
                                <button className="px-4 py-[2px] text-eduTheme border border-eduTheme rounded-md mb-2">
                                    Explore  <span> &gt; </span>
                                </button>
                            </a>
                        </div>
                    ))}
                </div>
            </div>

            {/* Courses Section */}
            <div className='flex flex-col justify-center items-center mt-5'>
                <div className='w-full flex justify-center items-center'>
                    <h1 className='text-2xl sm:text-[32px] flex justify-center items-center font-adramalech font-medium mt-5 text-center px-4'>
                        Here are Top 3 Courses for you in {selectedCountry}
                    </h1>
                </div>

                {/* Carousel for Mobile View */}
                <div className='w-full flex justify-center items-center sm:hidden relative'>
                    {top3Courses && top3Courses.length > 0 && (
                        <div
                            key={top3Courses[currentCourseIndex]}
                            className="w-[297px] h-[170px] m-4 flex flex-col justify-center items-center text-white bg-white font-bold rounded-md border-b-[3px] border-eduTheme shadow-lg transition-transform duration-500"
                        >
                            <h1
                                className='text-xl text-black flex justify-center items-center font-robotoCondensed text-wrap my-2 text-center px-1'
                            >
                                {top3Courses[currentCourseIndex]}
                            </h1>
                            <a href="https://cal.com/edulink-9gf5fp/30min">
                                <button className='px-4 py-[3px] text-eduTheme border border-eduTheme rounded-md mb-2'>
                                    Contact
                                    <span> &gt; </span>
                                </button>
                            </a>
                        </div>
                    )}

                    {/* Slider Buttons for Mobile View */}
                    <button
                        onClick={handlePrevSlideForCourse}
                        className="w-8 h-8 absolute sm:hidden left-2 text-2xl top-1/2 border-2 border-eduTheme transform -translate-y-1/2 text-eduTheme bg-white rounded-full shadow-lg flex justify-center items-center"
                    >
                        &lt;
                    </button>
                    <button
                        onClick={handleNextSlideForCourse}
                        className="w-8 h-8 absolute sm:hidden right-2 text-2xl top-1/2 border-2 border-eduTheme transform -translate-y-1/2 text-eduTheme bg-white rounded-full shadow-lg flex justify-center items-center"
                    >
                        &gt;
                    </button>
                </div>

                {/* Desktop View: Static Grid */}
                <div className="hidden w-full sm:flex justify-center items-center gap-2 my-5">
                    {top3Courses && top3Courses.length > 0 && top3Courses.map((course, index) => (
                        <div
                            key={course}
                            className="w-[378px] h-[170px] py-3 m-4 flex flex-col justify-center items-center text-white bg-white font-bold rounded-md border-b-[3px] border-eduTheme shadow-lg"
                        >
                            <h1
                                className="text-xl h-16 text-black flex justify-center items-center font-robotoCondensed text-wrap my-2 text-center px-1"
                            >
                                {course}
                            </h1>
                            <a
                                href="https://cal.com/edulink-9gf5fp/30min"
                            >
                                <button className="px-4 py-[2px] text-eduTheme border border-eduTheme rounded-md mb-2">
                                    Contact
                                    <span> &gt; </span>
                                </button>
                            </a>
                        </div>
                    ))}
                </div>
            </div>

            {/* Footer Section */}
            <div className='w-full flex justify-center items-end'>
                <div className='flex justify-center items-center w-full'>
                    <button onClick={() => window.location.href = "https://cal.com/edulink-9gf5fp/30min"} className='px-5 py-3 bg-white text-2xl font-medium text-eduTheme rounded-full mt-6'> Booking 1:1 Counseling </button>
                </div>
            </div>
        </div>
    );
}

export default TopUniversityCourse;
