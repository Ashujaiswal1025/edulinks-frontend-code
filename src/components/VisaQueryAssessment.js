import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

function VisaQueryAssessment() {
  const location = useLocation();
  const { selectedCountry, quizData } = location.state || {};
  const [selectedOption, setSelectedOption] = useState(null); // Selected option
  const navigate = useNavigate();
  const totalQuestions = 10; // Total number of questions
  const [progress, setProgress] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // Current question index
  const [selectedAnswers, setSelectedAnswers] = useState([]); // User's selected answers
  const [count, setCount] = useState(1);
  const [score, setScoreNumber] = useState(0);
  const [percentageChance, setPercentageChance] = useState(0);

  // Function to handle option selection
  const handleOptionClick = (index) => {
    setSelectedOption(index);
    const currentQuestion = quizData[currentQuestionIndex];
    const newAnswer = {
      question: currentQuestion.question,
      selectedOption: currentQuestion.options[index].answer,
      points: currentQuestion.options[index].points,
    };
    setSelectedAnswers((prevAnswers) => [...prevAnswers, newAnswer]);
  };

  //     const sortedEntries = Object.entries(scoreData)
  //         .sort(([, valueA], [, valueB]) => valueB - valueA) // Sort by value in descending order

  //     const topThreeKeys = sortedEntries.slice(0, 3).map(([key]) => key);
  //     setTopCarrers(topThreeKeys);

  //     const filteredImages = dataImage.filter((item) => topThreeKeys.includes(item.course));
  //     setFilteredImages(filteredImages);
  //     // Navigate to the TopCourses component and pass data via state
  //     navigate('/edulinks-ai-assistant/career-path-test/phase/top-courses', {
  //         state: {
  //             country,
  //             topCarrers: topThreeKeys,
  //             filteredImages
  //         }
  //     });
  // };
  // console.log('country12', country);

  // Function to handle 'Next' button click
  const handleNext = async () => {
    if (selectedOption === null) {
      toast('Please select an option before proceeding.', {
        position: "top-center",
        autoClose: 5000, // 5 seconds
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    if (progress < 100) {
      setProgress(prevProgress => prevProgress + 10); // Increase progress by 10%
    }
    setCount(count + 1);
    setScoreNumber((prevScore) => {
      const updatedScore = prevScore + selectedAnswers[currentQuestionIndex].points;
      const percentage = (updatedScore / 100) * 100;
      setPercentageChance(percentage);
      return updatedScore;
    });
    // Reset selected option
    setSelectedOption(null);
  };

  const showCalculatedAnswer = async () => {
    await handleNext();
  };
console.log('percentageChance12', percentageChance);
  return (
    <div className="bg-white flex flex-col md:flex-row w-full h-full font-robotoCondensed">
      <div className="flex flex-wrap w-full h-3/5 md:w-3/5 md:h-full bg-eduTheme pt-20 md:flex-col md:justify-normal justify-center items-center">
        <div className="md:w-[322px] 2xl:w-96 w-11/12 mt-16">
          <div className='flex md:flex-col items-center md:items-start px-3 md:px-0 my-3'>
            <p className='text-white text-xl font-medium'>Visa Query Solver</p>
            <h1 className="text-2xl md:text-3xl 2xl:text-4xl font-bold ml-2 md:ml-0 my-2">{selectedCountry} Study Visa</h1>
            <p className='text-2xl font-bold'>#FACT {count} </p>
          </div>
          <p
            className="text-white text-lg md:text-xl font-medium text-justify"
            style={{ lineHeight: '32px' }}
          >
            {quizData[currentQuestionIndex]?.content || `This final phase delves into specific professional inclinations, ideal mentors, and geographic preferences, providing insight into career paths that best align with the student's unique profile`}
          </p>
        </div>
      </div>

      <div className="w-full h-full flex flex-col md:flex-row items-center md:py-24">
        <div className="w-full flex flex-col justify-center items-center py-8 px-3 md:p-0">
          <div className='w-3/4 h-4 border rounded-2xl my-5'>
            <div
              className="h-full bg-custom-gradient rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="w-full md:w-3/4 md:h-32 py-2 md:py-3 bg-custom-gradient  flex justify-center items-center my-6">
            <h1 className="text-lg md:text-xl lg:text-2xl w-3/4 md:p-4 p-2 font-medium text-white text-center">
              {quizData[currentQuestionIndex]?.question || 'Thank you for completing the quiz!'}
            </h1>
          </div>
          {quizData[currentQuestionIndex]?.options?.map((option, index) => (
            <div
              key={index}
              className={`w-full md:w-3/4 md:p-3 p-1 flex items-center shadow-md cursor-pointer my-2 rounded ${selectedOption === index ? 'bg-eduThemeOPL' : 'bg-white'
                }`}
              onClick={() => handleOptionClick(index)}
            >
              <div
                className={`w-3 md:w-6 h-3 md:h-6 border rounded-full flex justify-center items-center mx-3 ${selectedOption === index
                  ? 'border-eduThemeCircle'
                  : 'border-eduTheme'
                  }`}
              >
                {selectedOption === index && (
                  <div className="md:w-4 w-2 h-2 md:h-4 bg-eduThemeCircle rounded-full"></div>
                )}
              </div>
              <h1 className="text-base">{option.answer}</h1>
            </div>
          ))}
          {currentQuestionIndex < totalQuestions - 1 ? (
            <div className="w-full md:w-3/4 flex justify-end">
              <button
                onClick={handleNext}
                className="md:px-5 py-1 px-2 bg-eduTheme text-base font-medium text-white rounded mt-6"
              >
                Next
              </button>
            </div>
          ) : (
            <div className="w-full md:w-3/4 flex justify-end">
              <button
                onClick={showCalculatedAnswer}
                className="md:px-5 py-1 px-2 bg-eduTheme text-base font-medium text-white rounded mt-6"
              >
                Submit
              </button>
            </div>
          )}
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}

export default VisaQueryAssessment