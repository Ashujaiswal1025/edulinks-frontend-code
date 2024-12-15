// import React, { useState } from 'react'
// import Career from '../Images/Career Pathway Test 1.png';
// import { quizData } from '../quizData/quiz.data';
// import { matchScore, obj } from '../quizData/fetchScore.data';

// function CareerPathwayPhase() {

//   const totalPhases = 5;
//   const totalQuestionsPerPhase = 4;
//   const [selectedIndex, setSelectedIndex] = useState(null);
//   const [progress, setProgress] = useState(Array(totalPhases).fill(0));
//   const [currentPhase, setCurrentPhase] = useState(0);
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [selectedOption, setSelectedOption] = useState(null);
//   const [scoreData, setScoreData] = useState({});
//   const [selectedAnswers, setSelectedAnswers] = useState([]);

//   const handleOptionClick = (index) => {
//     setSelectedOption(index);
//     const currentQuestion = quizData[currentQuestionIndex];
//     const newAnswer = {
//       question: currentQuestion.question,
//       selectedOption: currentQuestion.options[index]
//     };

//     setSelectedAnswers(newAnswer);
//   };
//   const handleNext = async () => {
//     const currentProgress = progress.slice();
//     const newScores = await matchScore(
//       selectedAnswers.question,
//       selectedAnswers.selectedOption,
//       obj,
//       scoreData
//     );
//     setScoreData(newScores);

//     if ((currentQuestionIndex + 1) % totalQuestionsPerPhase === 0) {
//       // If end of phase, move to next phase
//       setCurrentPhase((prev) => prev + 1);
//     } else {
//       // Update progress for the current phase
//       currentProgress[currentPhase] += 100 / totalQuestionsPerPhase;
//       setProgress(currentProgress);
//     }

//     // Move to the next question
//     setCurrentQuestionIndex(currentQuestionIndex + 1);
//     setSelectedOption(null);
//     setSelectedAnswers([]);
//   };

//   return (
//     <div className='bg-white flex pt-18 w-full h-full font-robotoCondensed'>
//       <div className="flex w-3/5 bg-eduTheme flex-col justify-center items-center">
//         <div className='w-[322px]'>
//           <img src={Career} alt="Carrer" className='w-[158px]' />
//           <h1 className="text-3xl font-bold mb-4">Career Pathway Test</h1>
//           <p className="text-white text-xl font-medium text-justify" style={{ lineHeight: "32px" }}>
//             A Career Pathway Test is an assessment
//             designed  to  help  individuals identify
//             their interests, strengths, and skills to
//             align with suitable career options. It
//             provides insights into potential fields or industries, helping users explore paths that match their personality, values, and goals, fostering informed career decisions and personal growth.
//           </p>
//         </div>
//       </div>
//       <div className='w-full flex items-center bg-eduThemePhase'>
//         <div className='flex flex-col justify-center -ml-10'>
//           {/* {progress.map((_, index) => {
//             const percentage = (index + 1 / totalQuestion) * 100;
//             return (
//               <div key={index} className={`flex flex-col justify-center items-center rounded-full bg-white font-bold my-5 `}>
//                 <div className='w-20 h-20 rounded-full flex justify-center items-center flex-col text-center border-4 border-eduTheme'>
//                   <p className='text-sm'>Phase</p>
//                   <p className='text-2xl'>0{index + 1}</p>
//                 </div>
//               </div>
//                 // <div className='h-4 w-1 bg-blue-800'></div>
//             )
//           })} */}
//           {progress.map((progressValue, index) => {
//             const percentage = (progressValue+1 / totalQuestionsPerPhase) * 100; // Calculate progress
//             const circumference = 75 * Math.PI; 
//             return (
//               <div key={progressValue} className="flex flex-col items-center space-y-2">
//                   {/* Circular Progress Bar */}
//                   <div className="relative w-20 h-20">
//                       <svg className="w-full h-full">
//                           {/* Background Circle */}
//                           <circle
//                               cx="50%"
//                               cy="50%"
//                               r="38%"
//                               fill="none"
//                               stroke="#e0e0e0"
//                               strokeWidth="6"
//                           />
//                           {/* Dynamic Progress Circle */}
//                           <circle
//                               cx="50%"
//                               cy="50%"
//                               r="38%"
//                               fill="none"
//                               stroke="#087172"
//                               strokeWidth="6"
//                               strokeDasharray={circumference}
//                               strokeDashoffset={
//                                   circumference - (circumference * percentage) / 100
//                               }
//                               transform="rotate(-90 50 50)" // Rotate to start from the top
//                               className="transition-all duration-500 ease-out"
//                           />
//                       </svg>
//                       {/* Centered Text */}
//                       <div className="absolute inset-0 flex flex-col justify-center items-center">
//                           <p className="text-sm font-medium">Phase</p>
//                           <p className="text-xl font-bold">{progressValue + 1}</p>
//                       </div>
//                   </div>
//               </div>
//           );
//           })}
//         </div>
//         <div className='w-full flex flex-col justify-center items-center'>
//           <div className='w-3/4 h-36 bg-custom-gradient text-white flex justify-center items-center my-6'>
//             <h1 className='text-2xl p-4 font-medium text-center'>
//               {quizData[currentQuestionIndex].question}
//             </h1>
//           </div>
//           {quizData[currentQuestionIndex].options.map((option, index) => (
//             <div
//               key={index}
//               className={`w-3/4 h-14 flex items-center my-3 rounded ${selectedOption === index ? 'bg-eduThemeOPL' : 'bg-white'
//                 }`}
//               onClick={() => handleOptionClick(index)}
//             >
//               <div
//                 className={`w-6 h-6 border rounded-full flex justify-center items-center mx-4 ${selectedOption === index ? 'border-eduThemeCircle' : 'border-eduTheme'
//                   }`}
//               >
//                 {selectedOption === index && (
//                   <div className="w-4 h-4 bg-eduThemeCircle rounded-full"></div>
//                 )}
//               </div>
//               <h1 className="text-base">{option}</h1>
//             </div>
//           ))}
//           {currentQuestionIndex < quizData.length - 1 && (
//             <div className='w-3/4 flex justify-end'>
//               <button
//                 onClick={handleNext}
//                 className="px-7 py-1 bg-eduTheme text-lg font-medium text-white rounded mt-6"
//               >
//                 Next
//               </button>
//             </div>

//           )}
//         </div>


//       </div>
//     </div>
//   )
// }

// export default CareerPathwayPhase


import React, { useState } from 'react';
import Career from '../Images/Career Pathway Test 1.png';
import { quizData } from '../quizData/quiz.data';
import { matchScore, obj } from '../quizData/fetchScore.data';

function CareerPathwayPhase() {
  const totalPhases = 5;
  const totalQuestionsPerPhase = 4;
  const [progress, setProgress] = useState(Array(totalPhases).fill(0));
  const [currentPhase, setCurrentPhase] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [scoreData, setScoreData] = useState({});
  const [selectedAnswers, setSelectedAnswers] = useState([]);

  const handleOptionClick = (index) => {
    setSelectedOption(index);

    const currentQuestion = quizData[currentQuestionIndex];
    const newAnswer = {
      question: currentQuestion.question,
      selectedOption: currentQuestion.options[index],
    };

    setSelectedAnswers((prevAnswers) => [...prevAnswers, newAnswer]);
  };

  const handleNext = async () => {
    if (selectedOption === null) {
      alert('Please select an option before proceeding.');
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

    // Update phase and progress
    if ((currentQuestionIndex + 1) % totalQuestionsPerPhase === 0) {
      setCurrentPhase((prev) => prev + 1);
    } else {
      currentProgress[currentPhase] += 100 / totalQuestionsPerPhase;
      setProgress(currentProgress);
    }

    // Move to the next question
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    setSelectedOption(null);
  };

  return (
    <div className="bg-white flex pt-18 w-full h-full font-robotoCondensed">
      <div className="flex w-3/5 bg-eduTheme flex-col justify-center items-center">
        <div className="w-[322px]">
          <img src={Career} alt="Career" className="w-[158px]" />
          <h1 className="text-3xl font-bold mb-4">Career Pathway Test</h1>
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

      <div className="w-full flex items-center bg-eduThemePhase">
        <div className="flex flex-col justify-center -ml-10">
          {progress.map((progressValue, index) => {
            const percentage = progressValue;
            const circumference = 75 * Math.PI;
            return (
              <div key={index} className="flex flex-col items-center space-y-2">
                <div className="relative w-20 h-20">
                  <svg className="w-full h-full">
                    <circle
                      cx="50%"
                      cy="50%"
                      r="38%"
                      fill="none"
                      stroke="#e0e0e0"
                      strokeWidth="6"
                    />
                    <circle
                      cx="50%"
                      cy="50%"
                      r="38%"
                      fill="none"
                      stroke="#087172"
                      strokeWidth="6"
                      strokeDasharray={circumference}
                      strokeDashoffset={
                        circumference - (circumference * percentage) / 100
                      }
                      transform="rotate(-90 50 50)"
                      className="transition-all duration-500 ease-out"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col justify-center items-center">
                    <p className="text-sm font-medium">Phase</p>
                    <p className="text-xl font-bold">{index + 1}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="w-full flex flex-col justify-center items-center">
          <div className="w-3/4 h-36 bg-custom-gradient text-white flex justify-center items-center my-6">
            <h1 className="text-2xl p-4 font-medium text-center">
              {quizData[currentQuestionIndex]?.question || 'Thank you for completing the quiz!'}
            </h1>
          </div>
          {quizData[currentQuestionIndex]?.options?.map((option, index) => (
            <div
              key={index}
              className={`w-3/4 h-14 flex items-center my-3 rounded ${
                selectedOption === index ? 'bg-eduThemeOPL' : 'bg-white'
              }`}
              onClick={() => handleOptionClick(index)}
            >
              <div
                className={`w-6 h-6 border rounded-full flex justify-center items-center mx-4 ${
                  selectedOption === index
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
          {currentQuestionIndex < quizData.length - 1 && (
            <div className="w-3/4 flex justify-end">
              <button
                onClick={handleNext}
                className="px-7 py-1 bg-eduTheme text-lg font-medium text-white rounded mt-6"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CareerPathwayPhase;
