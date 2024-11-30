import React from 'react'
import { useLocation } from 'react-router-dom';
import drop from '../Images/drop.png';
import group from '../Images/Group 9.png'
import { Link } from 'react-router-dom';
import EDULINKS from '../Images/EDULINKS 1.png';

function Header() {
    const location = useLocation();

    const hiddenLinksRoutes = ['/signup', '/signup/verifymail', '/login', '/login/verifymail'];
    const hideLinks = hiddenLinksRoutes.includes(location.pathname);

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
        <div className="h-[8%] ml-4 md:ml-20 flex items-center justify-start bg-white">
            <img
                src={EDULINKS}
                alt="EDULINK-logo"
                className="max-h-full object-contain"
            />

            {!hideLinks &&
                (<div className="flex justify-center items-center font-robotoCondensed ml-16">

                    <div className="mx-3 font-bold">
                        <Link to="https://edulinks.io/">Home</Link>
                    </div>

                    <div className="mx-3 font-bold">
                        <Link to="https://edulinks.io/about-us/">About Us</Link>
                    </div>


                    <div className="group relative mx-3">
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
                    <div className="group relative mx-3">
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
                    <div className="group relative mx-3">
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
                    <div className="group relative mx-3">
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
                    <div className="mx-3">
                        <button className="px-4 py-2 rounded-lg text-base border-0.7 font-normal hover:bg-eduTheme">
                            Edulink AI Assistance
                        </button>
                    </div>

                    <div className="mx-3">
                        <button className="px-2 py-1 rounded-lg text-base border-0.7 font-normal hover:bg-eduTheme">
                            <img src={group} alt="gr" />
                        </button>
                    </div>
                </div>)
            }

        </div>
    )
}

export default Header