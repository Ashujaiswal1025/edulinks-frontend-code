import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function TopCourses() {
    const location = useLocation();
    const { country, topCarrers } = location.state || {};
    const navigate = useNavigate();
    return (
        <div className='w-full h-full relative mt-[65px] font-robotoCondensed'>
            <div className='w-full h-1/2 bg-eduTheme flex justify-center items-center'>
               <h1 className='text-4xl font-medium mt-5'>
                Here are top 3 careers for you in {country}
               </h1>
            </div>
            <div className='absolute w-full top-1/4 bottom-1/4 flex justify-center items-center'>
                {topCarrers && topCarrers.map((career, index) => (
                    <div
                        key={index} // Always provide a unique key for each item in the loop
                        className="min-w-60 h-64 m-4 border flex flex-col text-white font-bold"
                    >
                        <h1 key={index}>{career}</h1>
                    </div>
                ))}
            </div>
            <div className='w-full h-1/2 bg-white flex justify-center items-center'>
               <button onClick={()=>navigate('/edulinks-ai-assistant/chat-with-me')} className='px-5 py-2 bg-eduTheme text-base font-medium text-white rounded mt-6'> Chat with me   {" >"}</button>
            </div>
        </div>
    )
}

export default TopCourses