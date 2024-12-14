import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import drop from '../Images/drop.png';
import vid from '../Images/record.png';
import { Link } from 'react-router-dom';
import EDULINKS from '../Images/EDULINKS 1.png';

function Header() {
    const location = useLocation();
    const navigate = useNavigate();

    const hiddenLinksRoutes = ['/signup', '/signup/verifymail', '/login', '/login/verifymail', '/edulinks-ai-assistant/chat-with-me'];
    const hideLinks = hiddenLinksRoutes.includes(location.pathname);

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const showLogout = location.pathname === '/signup' || location.pathname === '/signup/verifymail' || location.pathname === '/login' || location.pathname === '/login/verifymail';

    function handleLogout() {
        console.log("Hi you are logged out");
        localStorage.removeItem("authenticatedToken");
        localStorage.removeItem('setUserData');
        navigate('/signup');
    }

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
        <header className="py-2 fixed w-full z-50 top-0 bg-white shadow-md flex flex-wrap tablet-range:justify-between items-center">
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
                    (<div className="w-full hidden mlg:flex justify-center font-robotoCondensed md:text-base text-sm">
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
                                <button className="py-1 px-3.5 rounded-lg text-base border-0.7 border-black  text-black font-normal hover:bg-eduTheme flex items-center justify-center">
                                    Edulinks AI Assistance
                                </button>
                            </div>
                            <div className="book_btn">
                                <button className="py-1.6 px-2 rounded-lg border-0.7 border-black  text-black text-sm font-bold hover:bg-eduTheme flex flex-wrap items-center justify-between">
                                    <img src={vid} alt="rec" width={33} height={33} className='mr-[10px]' />
                                    Book online counselling
                                </button>
                            </div>
                        </div>
                    </div>)
                }
                <div className={`${hideLinks ? 'flex mr-10' : 'hidden'} mlg:flex`}>
                    {!showLogout && (
                        <div
                            className="flex justify-center items-center text-base rounded-md cursor-pointer font-bold font-robotoCondensed"
                            onClick={handleLogout}
                        >
                            <div className="flex items-center justify-center h-7 w-7">
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 shrink-0"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M6 4C5.44772 4 5 4.44772 5 5V19C5 19.5523 5.44772 20 6 20H10C10.5523 20 11 20.4477 11 21C11 21.5523 10.5523 22 10 22H6C4.34315 22 3 20.6569 3 19V5C3 3.34315 4.34315 2 6 2H10C10.5523 2 11 2.44772 11 3C11 3.55228 10.5523 4 10 4H6ZM15.2929 7.29289C15.6834 6.90237 16.3166 6.90237 16.7071 7.29289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L16.7071 16.7071C16.3166 17.0976 15.6834 17.0976 15.2929 16.7071C14.9024 16.3166 14.9024 15.6834 15.2929 15.2929L17.5858 13H11C10.4477 13 10 12.5523 10 12C10 11.4477 10.4477 11 11 11H17.5858L15.2929 8.70711C14.9024 8.31658 14.9024 7.68342 15.2929 7.29289Z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </div>
                            Logout
                        </div>
                    )}
                </div>


                {!hideLinks &&
                    <>
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
                                <div className="book_btn">
                                    <button className="py-1.6 px-2 rounded-lg border-0.7 border-black  text-black text-sm font-bold hover:bg-eduTheme flex flex-wrap items-center justify-between">
                                        <img src={vid} alt="rec" width={33} height={33} className='mr-[10px]' />
                                        Book online counselling
                                    </button>
                                </div>
                            </div>
                            <div
                                className="flex justify-start m-4 items-center text-base rounded-md font-bold font-robotoCondensed"
                            >
                                <div className="flex items-center justify-center h-7 w-7">
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 shrink-0"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M6 4C5.44772 4 5 4.44772 5 5V19C5 19.5523 5.44772 20 6 20H10C10.5523 20 11 20.4477 11 21C11 21.5523 10.5523 22 10 22H6C4.34315 22 3 20.6569 3 19V5C3 3.34315 4.34315 2 6 2H10C10.5523 2 11 2.44772 11 3C11 3.55228 10.5523 4 10 4H6ZM15.2929 7.29289C15.6834 6.90237 16.3166 6.90237 16.7071 7.29289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L16.7071 16.7071C16.3166 17.0976 15.6834 17.0976 15.2929 16.7071C14.9024 16.3166 14.9024 15.6834 15.2929 15.2929L17.5858 13H11C10.4477 13 10 12.5523 10 12C10 11.4477 10.4477 11 11 11H17.5858L15.2929 8.70711C14.9024 8.31658 14.9024 7.68342 15.2929 7.29289Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </div>
                                <p className="cursor-pointer" onClick={handleLogout}>
                                    Logout
                                </p>
                            </div>
                        </div>
                    </>
                }
            </div>

        </header>
    )
}

export default Header
