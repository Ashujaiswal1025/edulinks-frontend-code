import React from 'react'
import { Link } from 'react-router-dom'
import icon from '../Images/icon 4.png'
import book from '../Images/books 1.png'
import career from '../Images/Career Pathway Test 1.png'
import visa from '../Images/Visa Query Solver 1.png'
import chat from '../Images/Chat With Me1 1.png'
import group from '../Images/Group 1854.png'
import start from '../Images/startNow.png'
import vector from '../Images/Vector 1.png'

function Welcome() {
  return (
    <div className='h-full flex flex-col justify-center items-center '>
      <div className='w-full h-full flex flex-col justify-center items-center py-24'>
        <div className='flex  justify-center xl:gap-24 items-center w-full tablet-range:mb-4 mb-6'>
          <div className='md:ml-64'>
            <h1 className='text-3xl lg:text-4xl font-adramalech text-center text-wrap font-normal'>Welcome to Edulinks AI Assistance</h1>
          </div>
          <span className=''>
            <img src={icon} alt="link-logo" className='md:w-[237px] md:h-[108px] w-40 h-20 md:-ml-10 mt-10' />
          </span>
        </div>

        <div className="w-full flex flex-wrap justify-center items-center font-robotoCondensed tablet-range:flex-col">
          <div className="flex justify-center items-center flex-wrap med">
            <div className='w-[265px] h-[514px] bg-white rounded-[131px] mt-5 md:mt-0'>
              <div className='w-[182px] h-[182px] bg-eduThemeOP mx-10 mt-10 flex justify-center items-center rounded-full'>
                <img src={book} alt="book" />
              </div>
              <h2 className='text-center font-bold text-2xl mt-1'>University/Course</h2>
              <h2 className='text-center font-bold text-2xl '>Shortlisting</h2>
              <p className='text-center text-lg my-2 mx-7 h-[90px] font-light'>Helps you find universities and courses that align your career goals.</p>
              <div className='flex justify-center items-center text-slate-500'>
                <img src={group} alt="history" className='w-[15px] h-[15px]' />
                <p className='text-sm mx-[3px]'>5 mins</p>
              </div>
              <div className='flex justify-center mt-3'>
                <Link to=''>
                  <img src={start} alt="start" />
                </Link>
              </div>
            </div>
            <img src={vector} alt="vect" className='h-[181px] hidden md:block vect' />
            <div className='w-[265px] h-[514px] bg-white rounded-[131px] mt-5 md:mt-0'>
              <div className='w-[182px] h-[182px] bg-eduThemeOP mx-10 mt-10 flex justify-center items-center rounded-full'>
                <img src={career} alt="book" />
              </div>
              <h2 className='text-center font-bold text-2xl mt-1'>Career Pathway</h2>
              <h2 className='text-center font-bold text-2xl '>Test</h2>
              <p className='text-center text-lg my-2 mx-7 h-[90px] font-light'>Helps you discover the top career paths based on your interests and strengths.</p>
              <div className='flex justify-center items-center text-slate-500'>
                <img src={group} alt="history" className='w-[15px] h-[15px]' />
                <p className='text-sm mx-[3px]'>5 mins</p>
              </div>
              <div className='flex justify-center mt-3'>
                <Link to='/edulinks-ai-assistant/career-path-test'>
                  <img src={start} alt="start" />
                </Link>
              </div>
            </div>
          </div>
          <img src={vector} alt="vect" className='h-[181px] hidden md:block tablet-range:hidden' />
          <div className="flex justify-center items-center flex-wrap med">
            <div className='w-[265px] h-[514px] bg-white rounded-[131px] mt-5 md:mt-0 tablet-range:my-6'>
              <div className='w-[182px] h-[182px] bg-eduThemeOP mx-10 mt-10 flex justify-center items-center rounded-full'>
                <img src={visa} alt="book" />
              </div>
              <h2 className='text-center font-bold text-2xl mt-1'>Visa Query</h2>
              <h2 className='text-center font-bold text-2xl '>Solver</h2>
              <p className='text-center text-lg my-2 mx-7 h-[90px] font-light'>Helps you estimate your eligibility for a specific country's visa.</p>
              <div className='flex justify-center items-center text-slate-500'>
                <img src={group} alt="history" className='w-[15px] h-[15px]' />
                <p className='text-sm mx-[3px]'>5 mins</p>
              </div>
              <div className='flex justify-center mt-3'>
                <Link to=''>
                  <img src={start} alt="start" />
                </Link>
              </div>
            </div>
            <img src={vector} alt="vect" className='h-[181px] hidden md:block vect' />
            <div className='w-[265px] h-[514px] bg-white rounded-[131px] mt-5 md:mt-0'>
              <div className='w-[182px] h-[182px] bg-eduThemeOP mx-10 mt-10 flex justify-center items-center rounded-full'>
                <img src={chat} alt="book" />
              </div>
              <h2 className='text-center font-bold text-2xl mt-1'>Chat With</h2>
              <h2 className='text-center font-bold text-2xl '>Me!</h2>
              <p className='text-center text-lg my-2 mx-7 h-[90px] font-light'>Helps you get real-time support for any study, visa, or career-related questions</p>
              <div className='flex justify-center items-center text-slate-500'>
                <img src={group} alt="history" className='w-[15px] h-[15px]' />
                <p className='text-sm mx-[3px]'>5 mins</p>
              </div>
              <div className='flex justify-center mt-3'>
                <Link to='/edulinks-ai-assistant/chat-with-me'>
                  <img src={start} alt="start" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Welcome