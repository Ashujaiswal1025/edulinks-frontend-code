import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';
import book from '../Images//books 1.png';
import { coursesAndUniversitiesCalculation } from '../quizData/courses-calculation';
import { courseMapper } from '../quizData/courseMapper';
import { universitiesByCountry } from '../quizData/universityImage';

function UniversityAssessment() {
  const location = useLocation();
  const { selectedCountry, quizData } = location.state || {};
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // Current question index
  const [selectedCourses, setSelectedCourses] = useState({});
  const [selectedUniversities, setSelectedUniversities] = useState({});
  const [selectedOption, setSelectedOption] = useState(null); // Selected option
  const totalQuestions = 10; // Total number of questions
  const [filteredImages, setFilteredImages] = useState([]);
  const [progress, setProgress] = useState(0);
  const [courseOption, setCourseOption] = useState('');

  console.log('currentQuestionIndex12', currentQuestionIndex);
  const handleOptionClick = (index) => {
    setSelectedOption(index);
  };

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
    const currentQuestion = quizData[currentQuestionIndex];
    console.log('currentQuestion12', currentQuestion);
    const newAnswer = coursesAndUniversitiesCalculation(
      currentQuestion,
      currentQuestionIndex,
      selectedOption,
      selectedCourses,
      selectedUniversities,
      courseOption
    );
    if (newAnswer.courseOption) {
      setCourseOption(newAnswer.courseOption)
    };
    setSelectedCourses(newAnswer.selectedCourses);
    setSelectedUniversities(newAnswer.selectedUniversities)
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    if (progress < 100) {
      setProgress(prevProgress => prevProgress + 10); // Increase progress by 10%
    }
    setSelectedOption(null);
  };

  const showCalculatedAnswer = async () => {
    await handleNext();
    const top3Courses = Object.entries(selectedCourses)
      .sort(([, valueA], [, valueB]) => valueB - valueA)
      .slice(0, 3)
      .map(([key]) => key);

    console.log('top3Universities12', top3Courses);

    const top3Universities = Object.entries(selectedUniversities)
      .sort(([, valueA], [, valueB]) => valueB - valueA)
      .slice(0, 3)
      .map(([key]) => key);
    console.log('top3Universities12', top3Universities);
    console.log('universitiesByCountry[selectedCountry]', universitiesByCountry[selectedCountry])
    const filteredImages = universitiesByCountry[selectedCountry]
      .filter((university) => top3Universities.includes(university.universityName));
    setFilteredImages(filteredImages);
    navigate('/edulinks-ai-assistant/university-course-shortlisting/top-university-course', {
      state: {
        selectedCountry,
        top3Courses,
        top3Universities,
        filteredImages
      }
    })
    setCourseOption('');
    setSelectedCourses({});
    setSelectedUniversities({});
  };

  return (
    <div className="bg-white flex flex-col md:flex-row w-full h-full font-robotoCondensed">
      <div className="flex flex-wrap w-full h-3/5 md:w-3/5 md:h-full bg-eduTheme md:pt-20 pt-[90px] pb-2 md:flex-col md:justify-normal justify-center items-center">
        <div className="md:w-[322px] 2xl:w-96 w-11/12 md:mt-16 px-1 md:px-0">
          <div className='flex md:flex-col items-center md:items-start px-3 md:px-0'>
            <img src={book} alt="history" className="w-20 h-20 md:w-32 md:h-32 mb-2" />
            <h1 className="text-2xl md:text-3xl 2xl:text-4xl font-bold ml-2 md:ml-0 mb-4">University/Course Shortlisting</h1>
          </div>
          <p
            className="text-white text-lg md:text-xl font-medium text-justify"
            style={{ lineHeight: '32px' }}
          >
            Our AI-powered feature intelligently analyzes students' preferences, skills, and career aspirations through interactive questionnaires, providing personalized recommendations for the best-suited universities and courses.
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
          {quizData[currentQuestionIndex]?.answer?.map((option, index) => (
            <div
              key={index}
              className={`w-full md:w-3/4 md:p-3 p-1 flex items-center shadow-md cursor-pointer my-2 rounded ${selectedOption === index ? 'bg-eduThemeOPL' : 'bg-white'
                }`}
              onClick={() => handleOptionClick(index)}
            >
              <div
                className={`w-4 md:w-6 h-4 md:h-6 border rounded-full flex justify-center items-center mx-3 ${selectedOption === index
                  ? 'border-eduThemeCircle'
                  : 'border-eduTheme'
                  }`}
              >
                {selectedOption === index && (
                  <div className="md:w-4 w-2.5 h-2.5 md:h-4 bg-eduThemeCircle rounded-full"></div>
                )}
              </div>
              <h1 className="text-base">{option.options}</h1>
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
    </div>)
}

export default UniversityAssessment