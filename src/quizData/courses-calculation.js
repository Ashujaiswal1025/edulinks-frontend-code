export const coursesAndUniversitiesCalculation = (currentQuestion, currentQuestionIndex, index, selectedCourses, selectedUniversities, course) => {
  let courseOption;
  if (currentQuestionIndex === 8) {
    let matchFound = false;
    const obj = {
      'Bachelor’s Degree': 'Bachelor',
      'Master’s Degree': 'Master',
      'Postgraduate Diploma': 'Postgraduate',
      'Diploma': 'Diploma'
    };

    const searchValue = obj[course];
    for (const [key, value] of Object.entries(selectedCourses)) {
      if (key.split(' ')[0] === searchValue) {
        selectedCourses[key] = value + 100;
        matchFound = true;
      }
    }

    if (!matchFound) {
      for (const key in selectedCourses) {
        selectedCourses[key] += 100;
      }
    }

  };

  if (currentQuestion.answer[index]?.coursesOption && typeof (currentQuestion.answer[index].coursesOption) === 'number') {
    courseOption = currentQuestion.answer[index].options;
  };
  
  if (currentQuestion.answer[index]?.coursesOption && typeof (currentQuestion.answer[index].coursesOption) === 'object') {
    currentQuestion.answer[index].coursesOption.forEach(element => {
      selectedCourses[element.optionDetails] = selectedCourses[element.optionDetails] ? selectedCourses[element.optionDetails] + element.points : element.points;
    });
  };

  if (currentQuestion.answer[index]?.universitiesOption) {
    currentQuestion.answer[index].universitiesOption.forEach(element => {
      selectedUniversities[element.optionDetails] = selectedUniversities[element.optionDetails] ? selectedUniversities[element.optionDetails] + element.points : element.points;
    });
  };

  return {
    selectedCourses,
    selectedUniversities,
    courseOption
  };
}

