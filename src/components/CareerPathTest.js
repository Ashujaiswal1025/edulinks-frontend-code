
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import robo from '../Images/edulinks robo.png';
// import icon from '../Images/brain-icon.png';

// function CareerPathTest() {
//     const [isChecked, setIsChecked] = useState(false);

//     return (
//         <div className="w-full h-full flex flex-wrap flex-col md:flex-row justify-center items-center pt-20 relative">
//             {/* Background Icon */}
//             <img
//                 src={icon}
//                 alt="Brain Icon"
//                 className="opacity-70 bg-blend-overlay absolute top-1/4 right-1/2 md:bottom-12 md:left-48 md:top-auto md:right-auto md:w-auto max-w-64 h-auto"
//             />

//             {/* Text Content */}
//             <div className="font-robotoCondensed text-center md:text-left md:ml-8 xl:ml-0">
//                 <h3 className="text-2xl md:text-4xl text-white font-medium my-5">Welcome to your</h3>
//                 <h2 className="font-adramalech text-4xl text-wrap md:text-[64px] leading-none my-3">Career Pathway Test</h2>
//                 <h4 className="md:text-2xl text-xl text-white font-medium">
//                     Which will help you discover the top career paths based on your <br />
//                     interests and strengths.
//                 </h4>

//                 {/* Ready Section */}
//                 <div className="mt-5">
//                     <h1 className="font-adramalech text-2xl md:text-4xl my-6">Are You Ready?</h1>
//                     <Link to='/edulinks-ai-assistant/career-path-test/phase'>
//                         <button className="bg-white md:text-2xl py-1 px-3 rounded-[57px] shadow-sm shadow-white">
//                             Get Started
//                         </button>
//                     </Link>

//                     {/* Terms and Conditions Checkbox */}
//                     <div className="flex text-white items-center justify-center md:justify-start md:my-8 my-3">
//                         <span
//                             className="w-4 h-4 border-2 border-white flex justify-center items-center rounded cursor-pointer"
//                             onClick={() => setIsChecked(!isChecked)}
//                         >
//                             {isChecked && (
//                                 <svg
//                                     xmlns="http://www.w3.org/2000/svg"
//                                     viewBox="0 0 24 24"
//                                     fill="none"
//                                     stroke="white"
//                                     strokeWidth="3"
//                                     className="w-4 h-4"
//                                 >
//                                     <path
//                                         fillRule="evenodd"
//                                         d="M20.207 7.207a1 1 0 0 0-1.414-1.414l-9.5 9.5-4.5-4.5a1 1 0 1 0-1.414 1.414l5.207 5.207a1 1 0 0 0 1.414 0l10.207-10.207Z"
//                                         clipRule="evenodd"
//                                     />
//                                 </svg>
//                             )}
//                         </span>
//                         <p className="ml-1 text-sm text-nowrap font-medium">Accept Terms and Condition</p>
//                     </div>
//                 </div>
//             </div>

//             {/* Robot Image */}
//             <img src={robo} alt="Robot-Image" className="w-auto" />
//         </div>
//     );
// }

// export default CareerPathTest;


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import robo from '../Images/edulinks robo.png';
import icon from '../Images/brain-icon.png';

function CareerPathTest() {
    const [isChecked, setIsChecked] = useState(false);

    return (
        <div className="relative w-full h-full">
            {/* Background Icon */}
            <img
                src={icon}
                alt="Brain Icon"
                className="opacity-70 bg-blend-overlay absolute top-1/4 right-1/2 md:bottom-12 md:left-48 md:top-auto md:right-auto md:w-auto w-64 h-auto"
                style={{ zIndex: 0 }}
                width={525}
                height={725}
            />

            {/* Foreground Content */}
            <div className="relative z-10 w-full h-full flex flex-wrap flex-col md:flex-row justify-center items-center pt-20">
                {/* Text Content */}
                <div className="font-robotoCondensed text-center md:text-left md:ml-8 xl:ml-0">
                    <h3 className="text-2xl md:text-4xl text-white font-medium my-5">Welcome to your</h3>
                    <h2 className="font-adramalech text-4xl text-wrap md:text-[64px] leading-none my-3">
                        Career Pathway Test
                    </h2>
                    <h4 className="md:text-2xl text-xl text-white font-medium">
                        Which will help you discover the top career paths based on your <br />
                        interests and strengths.
                    </h4>

                    {/* Ready Section */}
                    <div className="mt-5">
                        <h1 className="font-adramalech text-2xl md:text-4xl my-6">Are You Ready?</h1>
                        <Link to="/edulinks-ai-assistant/career-path-test/phase">
                            <button
                                className="bg-white md:text-2xl py-2 px-5 rounded-[57px] shadow-sm shadow-white"
                                disabled={!isChecked}
                            >
                                Get Started
                            </button>
                        </Link>


                        {/* Terms and Conditions Checkbox */}
                        <div className="flex text-white items-center justify-center md:justify-start md:my-6 my-3">
                            <span
                                className="w-4 h-4 border border-white flex justify-center items-center rounded cursor-pointer"
                                onClick={() => setIsChecked(!isChecked)}
                            >
                                {isChecked && (
                                    <svg
                                        xmlns="https://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="white"
                                        strokeWidth="3"
                                        className="w-4 h-4"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M20.207 7.207a1 1 0 0 0-1.414-1.414l-9.5 9.5-4.5-4.5a1 1 0 1 0-1.414 1.414l5.207 5.207a1 1 0 0 0 1.414 0l10.207-10.207Z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                )}
                            </span>
                            <p className="ml-1 text-xs text-nowrap font-medium">
                                Accept Terms and Condition
                            </p>
                        </div>
                    </div>
                </div>

                {/* Robot Image */}
                <img src={robo} alt="Robot-Image" className="w-auto" />
            </div>
        </div>

    );
}

export default CareerPathTest;