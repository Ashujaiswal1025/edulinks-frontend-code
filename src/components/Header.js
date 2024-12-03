import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import drop from '../Images/drop.png';
import group from '../Images/book.png'
import { Link } from 'react-router-dom';
import EDULINKS from '../Images/EDULINKS 1.png';

function Header() {
    const location = useLocation();

    const hiddenLinksRoutes = ['/signup', '/signup/verifymail', '/login', '/login/verifymail', '/edulinks-ai-assistant/chat-with-me'];
    const hideLinks = hiddenLinksRoutes.includes(location.pathname);

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen((prev) => !prev);
    };

    const study = [
        { country: 'Germany', url: 'https://edulinks.io/study-in-germany/' },
        { country: 'Canada', url: 'https://edulinks.io/study-in-canada/' },
        { country: 'USA', url: 'https://edulinks.io/study-in-usa/' },
        { country: 'Australia', url: 'https://edulinks.io/study-in-australia/' },
        { country: 'Newzealand', url: 'https://edulinks.io/study-in-newzealand/' },
        { country: 'UK', url: 'https://edulinks.io/study-in-uk/' },
    ];

    const career = [
        { name: 'Student Visa', url: 'https://edulinks.io/student-visa/' },
        { name: 'Personalised Career Guidance', url: 'https://edulinks.io/services-personalised-career-guidance/' },
        { name: 'Edulinks AI Jackpot', url: 'https://edulinks.io/services-edulinks-ai-jackpot/' },
        { name: 'Scholarship Assessment', url: 'https://edulinks.io/services-scholarship-assessment/' },
        { name: 'Loan Guidance', url: 'https://edulinks.io/services-loan-guidance/' },
        { name: 'Post Landing Services', url: 'https://edulinks.io/services-post-landing-services/' },
    ]

    const University = [
        { country: 'Germany', url: 'https://edulinks.io/germany-top-20-universities/' },
        { country: 'Canada', url: 'https://edulinks.io/canada-top-20-universities/' },
        { country: 'USA', url: 'https://edulinks.io/usa-top-20-universities/' },
        { country: 'Australia', url: 'https://edulinks.io/australia-top-20-universities/' },
        { country: 'Newzealand', url: 'https://edulinks.io/newzealand-top-20-universities/' },
        { country: 'UK', url: 'https://edulinks.io/uk-top-20-universities/' },
    ]

    return (
        <header className="py-1 fixed w-full z-50 top-0 bg-white shadow-md flex tablet-range:justify-between items-center h-65">
            <div className='container mx-auto flex items-center gap-14 justify-between'>
                <Link href='/' className='site_logo'>
                    <img
                        src={EDULINKS}
                        alt="EDULINK-logo"
                        className=""
                        width={'100%'}

                    />
                </Link>

                {!hideLinks &&
                    (<div className="w-full hidden mlg:flex items-center font-robotoCondensed md:text-base text-sm">
                        <div className='flex justify-center items-center flex-wrap gap-3.5'>

                            <div className="text-nowrap font-bold">
                                <Link to="https://edulinks.io/">Home</Link>
                            </div>
                            <div className="text-nowrap font-bold">
                                <Link to="https://edulinks.io/about-us/">About Us</Link>
                            </div>
                            <div className="group relative">
                                <span className="cursor-pointer font-bold flex items-center">
                                    Study Destination <img src={drop} alt="drop" className="ml-1" />
                                </span>
                                <div className="w-64 absolute hidden group-hover:block bg-white rounded-md shadow-md mt-1">
                                    {study.map((item, index) => (
                                        <Link
                                            key={index}
                                            to={item.url}
                                            className="block px-4 py-2 text-gray-800 border-y hover:bg-eduTheme"
                                        >
                                            Study in {item.country}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                            {/* Services Dropdown */}
                            <div className="group relative">
                                <span className="cursor-pointer font-bold flex items-center">
                                    Services <img src={drop} alt="drop" className="ml-1" />
                                </span>
                                <div className="w-64 absolute hidden group-hover:block bg-white rounded-md shadow-md mt-1">
                                    {career.map((item, index) => (
                                        <Link
                                            key={index}
                                            to={item.url}
                                            className="block px-4 py-2 text-gray-800 border-y hover:bg-eduTheme"
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                            {/* Top Universities Dropdown */}
                            <div className="group relative">
                                <span className="cursor-pointer font-bold flex items-center">
                                    Top Universities <img src={drop} alt="drop" className="ml-1" />
                                </span>
                                <div className="w-64 absolute hidden group-hover:block bg-white rounded-md shadow-md mt-1">
                                    {University.map((item, index) => (
                                        <Link
                                            key={index}
                                            to={item.url}
                                            className="block px-4 py-2 text-gray-800 border-y hover:bg-eduTheme"
                                        >
                                            Top 20 Universities in {item.country}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                            {/* Top Careers Dropdown */}
                            <div className="group relative">
                                <span className="cursor-pointer font-bold flex items-center">
                                    Top Careers <img src={drop} alt="drop" className="ml-1" />
                                </span>
                                <div className="w-64 absolute hidden group-hover:block text-base bg-white font-normal rounded-md shadow-md mt-1">
                                    {study.map((item, index) => (
                                        <Link
                                            key={index}
                                            to={item.url}
                                            className="block px-4 py-2 text-gray-800 border-y hover:bg-eduTheme"
                                        >
                                            Top Careers in {item.country}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                            {/* Edulink AI Assistance */}
                            <div className="bot_btn">
                                <button className="py-1.6 px-3.5 rounded-lg text-base border-0.7 border-black  text-black font-normal hover:bg-eduTheme hover:text-white h-[30px] flex items-center justify-center">
                                    Edulink AI Assistance
                                </button>
                            </div>
                            <div className="book_btn h-[30px]">
                                <Link className="rounded-md hover:bg-eduTheme">
                                    <img src={group} alt="gr" width={200} />
                                </Link>
                            </div>
                        </div>
                    </div>)
                }


                {/* Mobile Menu Button */}
                <div className="mx-4 mlg:hidden">
                    <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4h18M3 8h18M3 12h18M3 16h18" />
                        </svg>
                    </button>
                </div>
                {/* sidebar */}
                <div
                    className={`fixed top-0 left-0 h-full w-72 bg-white shadow-lg transform transition-transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'
                        }`}
                >
                    <div className="flex justify-end items-center p-3">
                        <button onClick={closeMenu} className="text-gray-700 focus:outline-none">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>
                    <div className="flex flex-col mt-4 ml-4 space-y-2 text-sm font-robotoCondensed">
                        <Link to="https://edulinks.io/" className="block px-4 py-2 hover:text-green-500">Home</Link>
                        <Link to="https://edulinks.io/about-us/" className="block px-4 py-2 hover:text-green-500">About Us</Link>
                        <div className="relative px-4 py-2">
                            {/* Trigger Button */}
                            <span
                                className="cursor-pointer flex items-center justify-between"
                            >
                                <p className='font-normal hover:text-green-500'>
                                    Study Destination{" "}
                                </p>
                                <img
                                    src={drop}
                                    onClick={toggleDropdown}
                                    alt="drop"
                                    className={`p-1 hover:border hover:border-green-500 transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : "rotate-0"
                                        }`}
                                />
                            </span>

                            {/* Dropdown Menu */}
                            {isDropdownOpen && (
                                <div className="w-64 absolute bg-white rounded-md shadow-md mt-1">
                                    {study.map((item, index) => (
                                        <Link
                                            key={index}
                                            to={item.url}
                                            className="block px-4 py-2 text-gray-800 border-y hover:bg-eduTheme"
                                        >
                                            Study in {item.country}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                        <div className="relative px-4 py-2">
                            {/* Trigger Button */}
                            <span
                                className="cursor-pointer flex items-center justify-between"
                            >
                                <p className='font-normal hover:text-green-500'>
                                    Services{" "}
                                </p>
                                <img
                                    src={drop}
                                    onClick={toggleDropdown}
                                    alt="drop"
                                    className={`p-1 hover:border hover:border-green-500 transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : "rotate-0"
                                        }`}
                                />
                            </span>

                            {/* Dropdown Menu */}
                            {isDropdownOpen && (
                                <div className="w-64 absolute bg-white rounded-md shadow-md mt-1">
                                    {career.map((item, index) => (
                                        <Link
                                            key={index}
                                            to={item.url}
                                            className="block px-4 py-2 text-gray-800 border-y hover:bg-eduTheme"
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                        <div className="relative px-4 py-2">
                            {/* Trigger Button */}
                            <span
                                className="cursor-pointer flex items-center justify-between"
                            >
                                <p className='font-normal hover:text-green-500'>
                                    Top Universities{" "}
                                </p>
                                <img
                                    src={drop}
                                    onClick={toggleDropdown}
                                    alt="drop"
                                    className={`p-1 hover:border hover:border-green-500 transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : "rotate-0"
                                        }`}
                                />
                            </span>

                            {/* Dropdown Menu */}
                            {isDropdownOpen && (
                                <div className="w-64 absolute bg-white rounded-md shadow-md mt-1">
                                    {University.map((item, index) => (
                                        <Link
                                            key={index}
                                            to={item.url}
                                            className="block px-4 py-2 text-gray-800 border-y hover:bg-eduTheme"
                                        >
                                            Top 20 Univerities in {item.country}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                        <Link to="/" className="block px-4 py-2 hover:text-green-500">Edulinks AI Assistant</Link>
                        <div className="flex-grow"></div>
                        <div className="block md:hidden">
                            <button className="px-2 py-1 rounded-lg text-base border-0.7 font-normal hover:bg-eduTheme">
                                <img src={group} alt="gr" />
                            </button>
                        </div>
                    </div>
                    <div className='button_group flex flex-col items-center gap-5'>
                        {/* Edulink AI Assistance */}
                        <div className="bot_btn">
                            <button className="px-4 py-2 rounded-lg text-base border-0.7 border-black font-normal hover:bg-eduTheme">
                                Edulink AI Assistance
                            </button>
                        </div>
                        <div className="book_btn">
                            <button className="px-2 py-1 rounded-lg text-base border-0.7 font-normal hover:bg-eduTheme">
                                <img src={group} alt="gr" width={200} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </header>
    )
}

export default Header
