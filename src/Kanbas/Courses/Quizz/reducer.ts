import { createSlice } from "@reduxjs/toolkit";
import { quizzes as initialQuizzes } from "../../Database";

const initialState = {
  quizzes: initialQuizzes,
};

const quizzesSlice = createSlice({
  name: "quizzes",
  initialState,
  reducers: {
    setQuizzes: (state, action) => {
      state.quizzes = action.payload;
    },
    addQuiz: (state, { payload: quiz }) => {
      const newQuiz = {
        // _id: new Date().getTime().toString(),
        title: quiz.title,
        description: quiz.description,
        courseId: quiz.courseId,
        points: quiz.points,
        availableDate: quiz.availableDate,
        untilDate: quiz.untilDate,
        dueDate: quiz.dueDate,
        numberOfQuestions: quiz.numberOfQuestions,
        type: quiz.type,
        multipleAttempts: quiz.multipleAttempts,
        shuffleAnswers: quiz.shuffleAnswers,
        timeLimit: quiz.timeLimit,
        assignmentGroup: quiz.assignmentGroup
      };
      state.quizzes = [...state.quizzes, newQuiz];
    },
    deleteQuiz: (state, { payload: quizId }) => {
      state.quizzes = state.quizzes.filter((q) => q._id !== quizId);
    },
    updateQuiz: (state, { payload: quiz }) => {
      state.quizzes = state.quizzes.map((q) =>
        q._id === quiz._id
          ? quiz
          : q
      ); 
    },
    editQuiz: (state, { payload: quizId }) => {
      state.quizzes = state.quizzes.map((q) =>
        q._id === quizId ? { ...q, editing: true } : q
      );
    },
    setQuizScore: (state, { payload: { quizId, score } }) => {
      state.quizzes = state.quizzes.map((q) =>
        q._id === quizId ? { ...q, score } : q
      );
    },
  },
});

export const { setQuizzes, addQuiz, deleteQuiz, updateQuiz, editQuiz, setQuizScore } = quizzesSlice.actions;
export default quizzesSlice.reducer;
