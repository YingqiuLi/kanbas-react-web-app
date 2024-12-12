import axios from "axios";
const axiosWithCredentials = axios.create({ withCredentials: true });
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const COURSES_API = `${REMOTE_SERVER}/api/courses`;

export const fetchAllCourses = async () => {
  const { data } = await axiosWithCredentials.get(COURSES_API);
  return data;
};
export const createCourse = async (course: any) => {
  const { data } = await axiosWithCredentials.post(COURSES_API, course);
  return data;
};

export const deleteCourse = async (id: string) => {
  console.log(`${COURSES_API}/${id}`, "++++");
  const { data } = await axiosWithCredentials.delete(`${COURSES_API}/${id}`);
  return data;
};
export const updateCourse = async (course: any) => {
  const { data } = await axiosWithCredentials.put(`${COURSES_API}/${course._id}`, course);
  return data;
};
export const findModulesForCourse = async (courseId: string) => {
  console.log("findModulesForCourse", courseId);

  console.log(`${COURSES_API}/${courseId}/modules`);
  const response = await axiosWithCredentials
    .get(`${COURSES_API}/${courseId}/modules`);

  console.log(response.data);
  return response.data;
};

export const createModuleForCourse = async (courseId: string, module: any) => {
  const response = await axiosWithCredentials.post(
    `${COURSES_API}/${courseId}/modules`,
    module
  );
  return response.data;
};

export const findAssignmentsForCourse = async (courseId: string) => {
  console.log(`${COURSES_API}/${courseId}/assignments`);
  const response = await axiosWithCredentials
    .get(`${COURSES_API}/${courseId}/assignments`);
  return response.data;
};

// export const createAssignmentForCourse = async (courseId: string, assignment: any) => {
//   const response = await axiosWithCredentials.post(
//     `${COURSES_API}/${courseId}/assignments`,
//     assignment
//   );
//   return response.data;
// };

export const findUsersForCourse = async (courseId: string) => {
  const response = await axios.get(`${COURSES_API}/${courseId}/users`);
  return response.data.filter((x: null) => x !== null);
};

export const findQuizzesForCourse = async (courseId: string) => {
  const response = await axios.get(`${COURSES_API}/${courseId}/quizzes`);
  return response.data;
}

export const findQuestionsForQuiz = async (quizId: string) => {
  const response = await axios.get(`${COURSES_API}/${quizId}/questions`);
  // console.log(JSON.stringify(response.data)+"1111111");
  return response.data;
}

export const addNewQuiz = async (quiz: any) => {
  console.log(`${COURSES_API}/${quiz.course}/questions/addQuiz`);
  const response = await axiosWithCredentials.post(
    `${COURSES_API}/${quiz.course}/questions/addQuiz`,
    quiz
  );
  
  return response.data;
}

export const deleteQuiz = async (quizId: string) => {
  console.log("deleteQuiz", quizId);
  const { data } = await axiosWithCredentials.delete(`${COURSES_API}/deleteQuiz/${quizId}`);
  return data;
};

export const updateQuizById = async (quiz: any) => {
  console.log(quiz, "quiz000000");
  const { data } = await axiosWithCredentials.put(`${COURSES_API}/updateQuiz/${quiz._id}`, quiz);
  console.log(`${COURSES_API}/updateQuiz/${quiz._id}`, "this is api");
  return data;
};

export const createQuestionForQuiz = async (question: any) => {
  console.log(`${COURSES_API}/${question.quizId}/questions/new`);
  const response = await axiosWithCredentials.post(
    `${COURSES_API}/${question.quizId}/questions/new`,
    question
  );
  
  return response.data;
}