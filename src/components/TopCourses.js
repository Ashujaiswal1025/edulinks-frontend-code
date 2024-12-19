import React from 'react'

function TopCourses() {
    const boxes = [1, 2, 3]
    return (
        <div className='w-full h-full relative'>
            <div className='w-full h-1/2 bg-eduTheme'>
            </div>
            <div className='absolute w-full top-1/4 bottom-1/4 flex justify-center items-center'>
                {boxes.map((box, index) => (
                    <div
                        key={index} // Always provide a unique key for each item in the loop
                        className="min-w-60 h-52 m-4 bg-blue-500 flex flex-col text-white font-bold"
                    >
                        <img src='../Images/' alt='img'/>
                    </div>
                ))}
            </div>
            <div className='w-full h-1/2 bg-white'>
            </div>
        </div>
    )
}

export default TopCourses