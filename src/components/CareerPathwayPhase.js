import React, { useState } from 'react';
import Career from '../Images/Career Pathway Test 1.png';
import { quizData } from '../quizData/quiz.data';
import { matchScore, obj } from '../quizData/fetchScore.data';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function CareerPathwayPhase() {
  const totalPhases = 5; // Total number of phases
  const totalQuestionsPerPhase = 4; // Total questions in each phase
  const totalQuestions = totalPhases * totalQuestionsPerPhase; // Total number of questions
  const [progress, setProgress] = useState(Array(totalPhases).fill(0)); // Progress array for phases
  const [currentPhase, setCurrentPhase] = useState(0); // Current phase index
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // Current question index
  const [selectedOption, setSelectedOption] = useState(null); // Selected option
  const [scoreData, setScoreData] = useState({}); // Score data
  const [selectedAnswers, setSelectedAnswers] = useState([]); // User's selected answers

  // Function to handle option selection
  const handleOptionClick = (index) => {
    setSelectedOption(index);

    const currentQuestion = quizData[currentQuestionIndex];
    const newAnswer = {
      question: currentQuestion.question,
      selectedOption: currentQuestion.options[index],
    };

    setSelectedAnswers((prevAnswers) => [...prevAnswers, newAnswer]);
  };

  // Function to handle 'Next' button click
  const handleNext = async () => {
    if (selectedOption === null) {
      toast('Please select an option before proceeding.',{
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

    const currentProgress = [...progress];

    // Calculate scores
    const newScores = await matchScore(
      selectedAnswers[selectedAnswers.length - 1]?.question,
      selectedAnswers[selectedAnswers.length - 1]?.selectedOption,
      obj,
      scoreData
    );
    setScoreData(newScores);

    // Update progress for the current phase
    const progressIncrement = 100 / totalQuestionsPerPhase;
    currentProgress[currentPhase] += progressIncrement;
    setProgress(currentProgress);

    // Move to the next question or phase
    if ((currentQuestionIndex + 1) % totalQuestionsPerPhase === 0) {
      setCurrentPhase((prev) => prev + 1);
    }
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);

    // Reset selected option
    setSelectedOption(null);
  };

  return (
    <div className="bg-white flex flex-col md:flex-row w-full h-full font-robotoCondensed">
      <div className="flex md:w-3/5 bg-eduTheme py-20 md:flex-col justify-center items-center">
        <div className="w-[322px]">
          <img src={Career} alt="Career" className="" />
          <h1 className="text-xl xl:text-3xl font-bold mb-4">Career Pathway Test</h1>
          <p
            className="text-white text-xl font-medium text-justify"
            style={{ lineHeight: '32px' }}
          >
            A Career Pathway Test is an assessment designed to help individuals
            identify their interests, strengths, and skills to align with
            suitable career options. It provides insights into potential fields
            or industries, helping users explore paths that match their
            personality, values, and goals, fostering informed career decisions
            and personal growth.
          </p>
        </div>
      </div>

      <div className="w-full h-full flex md:flex-row items-center bg-eduThemePhase py-24">
        <div className="flex flex-col h-full justify-center ml-2 md:-ml-[42px]">
          {progress.map((progressValue, index) => {
            const currentAngle = (progressValue / 100) * 360; // Calculate fill angle based on progress percentage
            const isCompleted = progressValue === 100;
            return (
              <div key={index} className="flex flex-col items-center">
                <div className={`relative w-20 h-20 ${isCompleted ? 'mb-0' : 'mb-6'}`}>
                  {/* Outer Circular Ring */}
                  <div
                    className={`absolute inset-0 rounded-full`}
                    style={{
                      background: `conic-gradient(
                      #087274 0deg, 
                      #087274 ${currentAngle}deg, 
                      transparent ${currentAngle}deg, 
                      transparent 360deg
                      )`,
                      willChange: 'transform',
                      transition: 'transform 0.8s ease-in-out'
                    }}
                  />
                  {/* Inner Circular Hole */}
                  <div className="absolute inset-1 bg-white rounded-full flex flex-col items-center justify-center border-4 border-eduTheme">
                    {/* Center Content */}
                    <p className="text-lg font-medium leading-3">Phase</p>
                    <p className="text-xl font-bold">0{index + 1}</p>
                  </div>
                </div>
                  {/* Conditionally Render a Line Between Phases */}
                  {index < progress.length - 1 && isCompleted && (
                    <div className="h-6 w-1 bg-eduThemeCircle transform translate-x-1/2" />
                  )}
              </div>
            );
          })}
        </div>

        <div className="w-full flex flex-col justify-center items-center">
          <div className="w-3/4 py-3 bg-custom-gradient  flex justify-center items-center my-6">
            <h1 className="text-2xl w-3/4 p-4 font-medium text-white text-center">
              {quizData[currentQuestionIndex]?.question || 'Thank you for completing the quiz!'}
            </h1>
          </div>
          {quizData[currentQuestionIndex]?.options?.map((option, index) => (
            <div
              key={index}
              className={`w-3/4 h-14 flex items-center cursor-pointer border my-2 rounded ${selectedOption === index ? 'bg-eduThemeOPL' : 'bg-white'
                }`}
              onClick={() => handleOptionClick(index)}
            >
              <div
                className={`w-6 h-6 border rounded-full flex justify-center items-center mx-4 ${selectedOption === index
                  ? 'border-eduThemeCircle'
                  : 'border-eduTheme'
                  }`}
              >
                {selectedOption === index && (
                  <div className="w-4 h-4 bg-eduThemeCircle rounded-full"></div>
                )}
              </div>
              <h1 className="text-base">{option}</h1>
            </div>
          ))}
          {currentQuestionIndex < totalQuestions - 1 ? (
            <div className="w-3/4 flex justify-end">
              <button
                onClick={handleNext}
                className="px-5 bg-eduTheme text-base font-medium text-white rounded mt-6"
              >
                Next
              </button>
            </div>
          ) : (
            <div className="w-3/4 flex justify-end">
              <button
                
                className="px-5 bg-eduTheme text-base font-medium text-white rounded mt-6"
              >
                Submit
              </button>
            </div>
          )}
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
}

export default CareerPathwayPhase;
 