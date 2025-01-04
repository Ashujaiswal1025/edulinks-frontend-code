import React, { useState } from 'react'
import visa from '../Images/Visa Query Solver 1.png';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { germanyQuizData, canadaQuizData, newZealandQuizData, australiaQuizData, ukQuizData, usaQuizData } from '../quizData/visaQuery.question';


function VisaQueryCountry() {
  const country = ['Germany', 'Canada', 'UK', 'USA', 'New Zealand', 'Australia','Other'];
  const [selectedOption, setSelectedOption] = useState(null); // Selected option
  const navigate = useNavigate();

  const handleCountryQueryData = () => {
    console.log('country[selectedOption]12', country[selectedOption]);
    const quizDataMap = {
      Germany: germanyQuizData,
      Canada: canadaQuizData,
      UK: ukQuizData,
      USA: usaQuizData,
      'New Zealand': newZealandQuizData,
      Australia: australiaQuizData,
    };
    const quizData = quizDataMap[country[selectedOption]];
    if(country[selectedOption] === 'Other'){
       window.location.href = "https://cal.com/edulink-9gf5fp/30min";
       return;
    }
    
    console.log('quizData12', quizData);
    navigate('/edulinks-ai-assistant/visa-query-solver/visa-query-assessment', { state: { selectedCountry: country[selectedOption], quizData } })
  }

  return (
    <div className="bg-white flex flex-col md:flex-row w-full h-full font-robotoCondensed">
      <div className="flex flex-wrap w-full h-3/5 md:w-3/5 md:h-full bg-eduTheme pt-20 md:flex-col md:justify-normal justify-center items-center">
        <div className="md:w-[322px] 2xl:w-96 w-11/12 my-4 md:mt-16">
          <div className='flex md:flex-col items-center md:items-start px-3 md:px-0'>
            <img src={visa} alt="book" className="w-20 h-20 md:w-32 md:h-32 mb-2" />
            <h1 className="text-2xl md:text-3xl 2xl:text-4xl font-bold ml-2 md:ml-0 mb-4">Visa Query Solver</h1>
          </div>
          <p
            className="text-white text-lg md:text-xl font-medium text-justify"
            style={{ lineHeight: '32px' }}
          >
            This final phase delves into specific professional inclinations, ideal mentors, and geographic preferences, providing insight into career paths that best align with the student's unique profile.
          </p>
        </div>
      </div>

      <div className="w-full h-full flex flex-col md:flex-row items-center md:pt-24 md:pb-4">
        <div className="w-full flex flex-col justify-center items-center py-5 px-3 md:p-0">
          <div className="w-full md:w-3/4 md:h-32 py-2 md:py-3 bg-custom-gradient  flex justify-center items-center my-6">
            <h1 className="text-lg md:text-xl lg:text-2xl w-3/4 md:p-4 p-2 font-medium text-white text-center">
              Which country do you want to choose?
            </h1>
          </div>
          {country.map((option, index) => (
            <div
              key={index}
              onClick={() => setSelectedOption(index)}
              className={`w-full md:w-3/4 md:p-3 p-1 flex items-center cursor-pointer shadow-md my-2 rounded ${selectedOption === index ? 'bg-eduThemeOPL' : 'bg-white'
                }`}
            >
              <div
                className={`w-[18px] md:w-6 h-[18px] md:h-6 border rounded-full flex justify-center items-center mx-4 ${selectedOption === index
                  ? 'border-eduThemeCircle'
                  : 'border-eduTheme'
                  }`}
              >
                {selectedOption === index && (
                  <div className="md:w-4 w-2.5 h-2.5 md:h-4 bg-eduThemeCircle rounded-full"></div>
                )}
              </div>
              <h1 className="text-base">{option}</h1>
            </div>
          ))}
          <div className="w-full md:w-3/4 flex justify-end">
            <button
              onClick={handleCountryQueryData}
              className="md:px-5 py-1 px-2 bg-eduTheme text-base font-medium text-white rounded mt-6"
            >
              Next
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}

export default VisaQueryCountry