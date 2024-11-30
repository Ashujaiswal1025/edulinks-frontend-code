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
    <div className='w-full h-full mt-[50px]'>
      <div className='flex justify-center items-center'>
        <div className='md:w-3/4 md:text-right'>
          <h1 className='text-xl md:text-4xl lg:text-4xl font-adramalech text-center md:text-right font-normal md:mr-24 md:mb-10'>Welcome to Edulinks AI Assistance</h1>
        </div>
        <div className='md:w-1/4 '>
          <img src={icon} alt="link-logo" className='md:w-[237px] md:h-[108px] w-20 h-10 md:-ml-16' />
        </div>
      </div>

      <div className="w-full flex justify-center items-center my-6 font-robotoCondensed flex-wrap">
        <div className='w-[265px] h-[514px] bg-white rounded-[131px]'>
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
        <img src={vector} alt="vect" className='h-[181px]' />
        <div className='w-[265px] h-[514px] bg-white rounded-[131px]'>
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
            <Link to=''>
              <img src={start} alt="start" />
            </Link>
          </div>
        </div>
        <img src={vector} alt="vect" className='h-[181px]' />
        <div className='w-[265px] h-[514px] bg-white rounded-[131px]'>
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
        <img src={vector} alt="vect" className='h-[181px]' />
        <div className='w-[265px] h-[514px] bg-white rounded-[131px]'>
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
            <Link to=''>
              <img src={start} alt="start" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Welcome