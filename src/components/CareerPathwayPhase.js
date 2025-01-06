// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Career from '../Images/Career Pathway Test 1.png';
// import { quizData } from '../quizData/quiz.data';
// import { matchScore, obj } from '../quizData/fetchScore.data';
// import { dataImage } from '../quizData/coursesDetails';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// function CareerPathwayPhase() {
//   const navigate = useNavigate();
//   const totalPhases = 5; // Total number of phases
//   const totalQuestionsPerPhase = 4; // Total questions in each phase
//   const totalQuestions = totalPhases * totalQuestionsPerPhase; // Total number of questions
//   const [progress, setProgress] = useState(Array(totalPhases).fill(0)); // Progress array for phases
//   const [currentPhase, setCurrentPhase] = useState(0); // Current phase index
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // Current question index
//   const [selectedOption, setSelectedOption] = useState(null); // Selected option
//   const [scoreData, setScoreData] = useState({}); // Score data
//   const [selectedAnswers, setSelectedAnswers] = useState([]); // User's selected answers
//   const [country, setCountryField] = useState('');
//   const [filteredImages, setFilteredImages] = useState([]);
//   const [topCarrers, setTopCarrers] = useState([]);

//   // Function to handle option selection
//   const handleOptionClick = (index) => {
//     setSelectedOption(index);

//     const currentQuestion = quizData[currentQuestionIndex];
//     const newAnswer = {
//       question: currentQuestion.question,
//       selectedOption: currentQuestion.options[index],
//     };
//     setSelectedAnswers((prevAnswers) => [...prevAnswers, newAnswer]);
//   };

//   const showTopCarrer = async () => {
//     console.log('scoreData12', scoreData);
//     await handleNext()
//     const sortedEntries = Object.entries(scoreData)
//       .sort(([, valueA], [, valueB]) => valueB - valueA) // Sort by value in descending order

//     const topThreeKeys = sortedEntries.slice(0, 3).map(([key]) => key);
//     console.log('topThreeKeys12', topThreeKeys);
//     setTopCarrers(topThreeKeys);

//     const filteredImages = dataImage.filter((item) => topThreeKeys.includes(item.course));
//     setFilteredImages(filteredImages);
//     // Navigate to the TopCourses component and pass data via state
//     navigate('/edulinks-ai-assistant/career-path-test/phase/top-courses', {
//       state: {
//         country,
//         topCarrers: topThreeKeys,
//         filteredImages
//       }
//     });
//   };

//   // Function to handle 'Next' button click
//   const handleNext = async () => {
//     if (selectedOption === null) {
//       toast('Please select an option before proceeding.', {
//         position: "top-center",
//         autoClose: 5000, // 5 seconds
//         hideProgressBar: false,
//         closeOnClick: false,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//       });
//       return;
//     }

//     const currentProgress = [...progress];

//     // Calculate scores
//     const newScores = await matchScore(
//       selectedAnswers[selectedAnswers.length - 1]?.question,
//       selectedAnswers[selectedAnswers.length - 1]?.selectedOption,
//       obj,
//       scoreData
//     );
//     selectedAnswers.forEach((item) => {
//       if (item.question === 'In which part of the world would you like to work?') {
//         setCountryField(item.selectedOption);
//       }
//     })
//     setScoreData(newScores);
//     // Update progress for the current phase
//     const progressIncrement = 100 / totalQuestionsPerPhase;
//     currentProgress[currentPhase] += progressIncrement;
//     setProgress(currentProgress);

//     // Move to the next question or phase
//     if ((currentQuestionIndex + 1) % totalQuestionsPerPhase === 0) {
//       setCurrentPhase((prev) => prev + 1);
//     }
//     setCurrentQuestionIndex((prevIndex) => prevIndex + 1);

//     // Reset selected option
//     setSelectedOption(null);
//   };

//   return (
//     <div className="bg-white flex flex-col md:flex-row w-full h-full font-robotoCondensed">
//       <div className="flex flex-wrap w-full h-3/5 md:w-3/5 md:h-full bg-eduTheme py-20 md:flex-col justify-center items-center">
//         <div className="md:w-[322px] 2xl:w-96 w-11/12">
//           <div className='flex md:flex-col items-center md:items-start px-3 md:px-0'>
//             <img src={Career} alt="Career" className="w-20 h-20 md:w-32 md:h-36" />
//             <h1 className="text-2xl md:text-3xl 2xl:text-4xl font-bold ml-2 md:ml-0 mb-4">Career Pathway Test</h1>
//           </div>
//           <p
//             className="text-white text-lg md:text-xl font-medium text-justify"
//             style={{ lineHeight: '32px' }}
//           >
//             A Career Pathway Test is an assessment designed to help individuals
//             identify their interests, strengths, and skills to align with
//             suitable career options. It provides insights into potential fields
//             or industries, helping users explore paths that match their
//             personality, values, and goals, fostering informed career decisions
//             and personal growth.
//           </p>
//         </div>
//       </div>

//       <div className="w-full h-full flex flex-col md:flex-row items-center bg-eduThemePhase md:py-24">
//         <div className="flex md:flex-col md:w-auto w-full md:h-full justify-center md:space-x-0 -mt-7 md:mt-0 md:-ml-[44px]">
//           {/* {progress.map((progressValue, index) => {
//             const currentAngle = (progressValue / 100) * 360; // Calculate fill angle based on progress percentage
//             const isCompleted = progressValue === 100;
//             return (
//               <div key={index} className="flex md:flex-col items-center">
//                 <div className={`relative w-14 h-14 md:w-[89px] md:h-[89px] ${isCompleted ? 'md:mb-0' : 'ml-2 md:ml-0 md:mb-6'}`}>

//                   <div
//                     className={`absolute inset-0 rounded-full`}
//                     style={{
//                       background: `conic-gradient(
//                       #087274 7deg, 
//                       #087274 ${currentAngle}deg, 
//                       transparent ${currentAngle}deg, 
//                       transparent 360deg
//                       )`,
//                       willChange: 'transform',
//                       transition: 'transform 0.8s ease-in-out'
//                     }}
//                   />

//                   <div className="absolute inset-[3px] md:inset-1 bg-white rounded-full flex flex-col items-center justify-center border-2 md:border-4 border-eduTheme">

//                     <div className='text-center'>
//                       <p className="text-xs md:text-lg md:font-medium leading-3">Phase</p>
//                       <p className="text-lg -mt-1 md:-mt-2 md:text-2xl font-bold">0{index + 1}</p>
//                     </div>
//                   </div>
//                 </div>

//                 <div className={`h-1 md:h-6 w-8 md:w-1 bg-eduThemeCircle -ml-4 md:ml-0 transform translate-x-1/2 ${index < progress.length - 1 && isCompleted ? "block" : "hidden"}`} />
//               </div>
//             );
//           })} */}
//           {progress.map((progressValue, index) => {
//             const currentAngle = (progressValue / 100) * 360; // Calculate fill angle based on progress percentage
//             const isCompleted = progressValue === 100; // Check if the current phase is completed

//             // Check if the previous phase is completed
//             const previousPhaseCompleted = index > 0 && progress[index - 1] === 100;

//             // Apply an additional 7-degree offset if the previous phase is completed
//             const offsetAngle = previousPhaseCompleted ? 6 : 0;

//             // Apply the offset angle to the current phase
//             const angleWithOffset = currentAngle + offsetAngle;

//             return (
//               <div key={index} className="flex md:flex-col items-center">
//                 <div className={`relative w-14 h-14 md:w-[89px] md:h-[89px] ${isCompleted ? 'md:mb-0' : 'ml-2 md:ml-0 md:mb-6'}`}>
//                   {/* Outer Circular Ring */}
//                   <div
//                     className={`absolute inset-0 rounded-full`}
//                     style={{
//                       background: `conic-gradient(
//               #087274 0deg, 
//               #087274 ${angleWithOffset}deg, 
//               transparent ${angleWithOffset}deg, 
//               transparent 360deg
//             )`,
//                       willChange: 'transform',
//                       transition: 'transform 0.8s ease-in-out',
//                     }}
//                   />
//                   {/* Inner Circular Hole */}
//                   <div className="absolute inset-[3px] md:inset-1 bg-white rounded-full flex flex-col items-center justify-center border-2 md:border-4 border-eduTheme">
//                     {/* Center Content */}
//                     <div className="text-center">
//                       <p className="text-xs md:text-lg md:font-medium leading-3">Phase</p>
//                       <p className="text-lg -mt-1 md:-mt-2 md:text-2xl font-bold">0{index + 1}</p>
//                     </div>
//                   </div>
//                 </div>
//                 {/* Conditionally Render a Line Between Phases */}
//                 <div
//                   className={`h-1 md:h-6 w-8 md:w-1 bg-eduThemeCircle -ml-[15px] md:ml-0 transform translate-x-1/2 ${index < progress.length - 1 && isCompleted ? "block" : "hidden"}`}
//                 />
//               </div>
//             );
//           })}

//         </div>

//         <div className="w-full flex flex-col justify-center items-center py-5 px-3 md:p-0">
//           <div className="w-full md:w-3/4 md:h-32 py-2 md:py-3 bg-custom-gradient  flex justify-center items-center my-6">
//             <h1 className="text-lg md:text-xl lg:text-2xl w-3/4 md:p-4 p-2 font-medium text-white text-center">
//               {quizData[currentQuestionIndex]?.question || 'Thank you for completing the quiz!'}
//             </h1>
//           </div>
//           {quizData[currentQuestionIndex]?.options?.map((option, index) => (
//             <div
//               key={index}
//               className={`w-full md:w-3/4 md:p-3 p-1 flex items-center cursor-pointer border my-2 rounded ${selectedOption === index ? 'bg-eduThemeOPL' : 'bg-white'
//                 }`}
//               onClick={() => handleOptionClick(index)}
//             >
//               <div
//                 className={`w-3 md:w-6 h-3 md:h-6 border rounded-full flex justify-center items-center mx-4 ${selectedOption === index
//                   ? 'border-eduThemeCircle'
//                   : 'border-eduTheme'
//                   }`}
//               >
//                 {selectedOption === index && (
//                   <div className="md:w-4 w-2 h-2 md:h-4 bg-eduThemeCircle rounded-full"></div>
//                 )}
//               </div>
//               <h1 className="text-base">{option}</h1>
//             </div>
//           ))}
//           {currentQuestionIndex < totalQuestions - 1 ? (
//             <div className="w-full md:w-3/4 flex justify-end">
//               <button
//                 onClick={handleNext}
//                 className="md:px-5 py-1 px-2 bg-eduTheme text-base font-medium text-white rounded mt-6"
//               >
//                 Next
//               </button>
//             </div>
//           ) : (
//             <div className="w-full md:w-3/4 flex justify-end">
//               <button
//                 onClick={showTopCarrer}
//                 className="md:px-5 py-1 px-2 bg-eduTheme text-base font-medium text-white rounded mt-6"
//               >
//                 Submit
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//       <ToastContainer />
//     </div>
//   );
// }

// export default CareerPathwayPhase;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Career from '../Images/Career Pathway Test 1.png';
import { quizData } from '../quizData/quiz.data';
import { matchScore, obj } from '../quizData/fetchScore.data';
import { dataImage } from '../quizData/coursesDetails';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function CareerPathwayPhase() {
  const navigate = useNavigate();
  const totalPhases = 5; // Total number of phases
  const totalQuestionsPerPhase = 4; // Total questions in each phase
  const totalQuestions = totalPhases * totalQuestionsPerPhase; // Total number of questions
  const [progress, setProgress] = useState(Array(totalPhases).fill(0)); // Progress array for phases
  const [currentPhase, setCurrentPhase] = useState(0); // Current phase index
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // Current question index
  const [selectedOption, setSelectedOption] = useState(null); // Selected option
  const [scoreData, setScoreData] = useState({}); // Score data
  const [selectedAnswers, setSelectedAnswers] = useState([]); // User's selected answers
  const [country, setCountryField] = useState('');
  const [filteredImages, setFilteredImages] = useState([]);
  const [topCarrers, setTopCarrers] = useState([]);

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

  const showTopCarrer = async () => {
    console.log('scoreData12', scoreData);
    await handleNext();
    const sortedEntries = Object.entries(scoreData)
      .sort(([, valueA], [, valueB]) => valueB - valueA); // Sort by value in descending order

    const topThreeKeys = sortedEntries.slice(0, 3).map(([key]) => key);
    console.log('topThreeKeys12', topThreeKeys);
    setTopCarrers(topThreeKeys);

    const filteredImages = dataImage.filter((item) => topThreeKeys.includes(item.course));
    setFilteredImages(filteredImages);
    // Navigate to the TopCourses component and pass data via state
    navigate('/edulinks-ai-assistant/career-path-test/phase/top-courses', {
      state: {
        country,
        topCarrers: topThreeKeys,
        filteredImages
      }
    });
  };

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

    const currentProgress = [...progress];

    // Calculate scores
    const newScores = await matchScore(
      selectedAnswers[selectedAnswers.length - 1]?.question,
      selectedAnswers[selectedAnswers.length - 1]?.selectedOption,
      obj,
      scoreData
    );
    selectedAnswers.forEach((item) => {
      if (item.question === 'In which part of the world would you like to work?') {
        setCountryField(item.selectedOption);
      }
    });
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
      <div className="flex flex-wrap w-full h-3/5 md:w-3/5 md:h-full bg-eduTheme py-20 md:flex-col justify-center items-center">
        <div className="md:w-[322px] 2xl:w-96 w-11/12">
          <div className='flex md:flex-col items-center md:items-start px-3 md:px-0'>
            <img src={Career} alt="Career" className="w-20 h-20 md:w-32 md:h-36" />
            <h1 className="text-2xl md:text-3xl 2xl:text-4xl font-bold ml-2 md:ml-0 mb-4">Career Pathway Test</h1>
          </div>
          <p
            className="text-white text-lg md:text-xl font-medium text-justify"
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

      <div className="w-full h-full flex flex-col md:flex-row items-center bg-eduThemePhase md:py-24">
        <div className="flex md:flex-col md:w-auto w-full md:h-full justify-center md:space-x-0 -mt-7 md:mt-0 md:-ml-[44px]">
          {progress.map((progressValue, index) => {
            const currentAngle = (progressValue / 100) * 360; // Calculate fill angle based on progress percentage
            const isCompleted = progressValue === 100; // Check if the current phase is completed

            // Check if the previous phase is completed
            const previousPhaseCompleted = index > 0 && progress[index - 1] === 100;

            // Apply an additional 7-degree offset if the previous phase is completed
            const offsetAngle = previousPhaseCompleted ? 5 : 0;

            // Apply the offset angle to the current phase
            const angleWithOffset = currentAngle + offsetAngle;

            return (
              <div key={index} className="flex md:flex-col items-center">
                <div className={`relative w-14 h-14 md:w-[89px] md:h-[89px] ${isCompleted ? 'md:mb-0' : 'ml-2 md:ml-0 md:mb-6'}`}>
                  {/* Outer Circular Ring */}
                  <div
                    className={`absolute inset-0 rounded-full`}
                    style={{
                      background: `conic-gradient(
              #087274 0deg, 
              #087274 ${angleWithOffset}deg, 
              transparent ${angleWithOffset}deg, 
              transparent 360deg
            )`,
                      willChange: 'transform',
                      transition: 'transform 0.8s ease-in-out',
                    }}
                  />
                  {/* Inner Circular Hole */}
                  <div className="absolute inset-[3px] md:inset-1 bg-white rounded-full flex flex-col items-center justify-center border-2 md:border-4 border-eduTheme">
                    {/* Center Content */}
                    <div className="text-center">
                      <p className="text-xs md:text-lg md:font-medium leading-3">Phase</p>
                      <p className="text-lg -mt-1 md:-mt-2 md:text-2xl font-bold">0{index + 1}</p>
                    </div>
                  </div>
                </div>
                {/* Conditionally Render a Line Between Phases */}
                <div
                  className={`h-1 md:h-6 w-8 md:w-1 bg-eduThemeCircle -ml-4 md:ml-0 transform translate-x-1/2 ${index < progress.length - 1 && isCompleted ? "block" : "hidden"}`}
                />
              </div>
            );
          })}

        </div>

        <div className="w-full flex flex-col justify-center items-center py-5 px-3 md:p-0">
          <div className="w-full md:w-3/4 md:h-32 py-2 md:py-3 bg-custom-gradient  flex justify-center items-center my-6">
            <h1 className="text-lg md:text-xl lg:text-2xl w-3/4 md:p-4 p-2 font-medium text-white text-center">
              {quizData[currentQuestionIndex]?.question || 'Thank you for completing the quiz!'}
            </h1>
          </div>
          {quizData[currentQuestionIndex]?.options?.map((option, index) => (
            <div
              key={index}
              className={`w-full md:w-3/4 md:p-3 p-1 flex items-center cursor-pointer border my-2 rounded ${selectedOption === index ? 'bg-eduThemeOPL' : 'bg-white'}`}
              onClick={() => handleOptionClick(index)}
            >
              <div
                className={`w-[18px] md:w-6 h-[18px] md:h-6 border rounded-full flex justify-center items-center mx-4 ${selectedOption === index
                  ? 'border-eduThemeCircle'
                  : 'border-eduTheme'
                  }`}
                  style={{ minHeight: '18px', minWidth: '18px' }}
              >
                {selectedOption === index && (
                  <div className="md:w-4 w-2.5 h-2.5 md:h-4 bg-eduThemeCircle rounded-full"></div>
                )}
              </div>
              <h1 className="text-base">{option}</h1>
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
                onClick={showTopCarrer}
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
  );
}

export default CareerPathwayPhase;
