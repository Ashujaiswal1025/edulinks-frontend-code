import React from 'react'
import { useNavigate } from 'react-router-dom';

function TopCourses() {
    const boxes = [1, 2, 3];
    const navigate = useNavigate();
    return (
        <div className='w-full h-full relative mt-[65px] font-robotoCondensed'>
            <div className='w-full h-1/2 bg-eduTheme flex justify-center items-center'>
               <h1 className='text-4xl font-medium mt-5'>
                Here are top 3 careers for you in Germany
               </h1>
            </div>
            <div className='absolute w-full top-1/4 bottom-1/4 flex justify-center items-center'>
                {boxes.map((box, index) => (
                    <div
                        key={index} // Always provide a unique key for each item in the loop
                        className="min-w-60 h-64 m-4 border flex flex-col text-white font-bold"
                    >
                        <img src='../Images/' alt='img'/>
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