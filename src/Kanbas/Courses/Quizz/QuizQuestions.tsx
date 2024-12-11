import React, { useState } from "react";
import { useNavigate, useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { addQuiz, updateQuiz } from "./reducer";
import { Link } from "react-router-dom";
import { addNewQuiz, updateQuizById } from "../client";
import { FaPlus } from "react-icons/fa";

interface Question {
    _id: string;
    title: string;
    points: number;
    type: string;
    questionText: string;
    options?: string[];
    correctOption?: number | boolean;
  }

export default function QuizQuestions() {
  const { cid, qid } = useParams();
  // console.log(cid, "this is cid");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const quizzes = useSelector((state: any) => state.quizzesReducer.quizzes);

  const quizData = quizzes.find((q: any) => q._id === qid) || {
    title: "",
    description: "",
    courseId: "",
    points: 0,
    availableDate: "",
    dueDate: "",
    untilDate: "",
    numberOfQuestions: 0,
    type: "Graded Quiz",
    multipleAttempts: false,
    shuffleAnswers: false,
    timeLimit: 20,
    assignmentGroup: "Quizzes",
  };

  const [quiz, setQuiz] = useState(quizData);

  const handleSave = () => {
    console.log(qid, "this is qid");
    if (!qid || qid === "New") {
      dispatch(addQuiz({ ...quiz, course: cid }));
      console.log(quiz, "this is a quiz");
      addNewQuiz({ ...quiz, course: cid });
    } else {
      dispatch(updateQuiz({ ...quiz, quizId: qid, course: cid }));
      updateQuizById({ ...quiz, course: cid });
    }
    //updateQuizById({ ...quiz, course: cid });
    navigate(`/Kanbas/Courses/${cid}/Quizzes`);
  };

  const handleChange = (field: string, value: string | number | boolean) => {
    setQuiz({ ...quiz, [field]: value });
  };

  return (
    <div id="quiz-editor" className="container mt-4">
      {/* Tab Navigation */}
      <div className="d-flex mb-4">
        <div
          className="tab"
          onClick={() => navigate(`/Kanbas/Courses/${cid}/Quizzes/${qid}/Edit`)}
          style={{
            cursor: "pointer",
            padding: "10px",
            fontWeight: "normal",
            borderBottom: "1px solid lightgray"
          }}
        >
          Details
        </div>
        <div
          className="tab"
          onClick={() => navigate(`/Kanbas/Courses/${cid}/Quizzes/${qid}/Questions`)}
          style={{
            cursor: "pointer",
            padding: "10px",
            fontWeight: "bold",
            borderBottom: "2px solid black"
          }}
        >
          Questions
        </div>
      </div>

      <hr />
      <div className="card mb-4 text-center mx-auto" style={{ width: "fit-content", marginTop: "20px", color: "#d05129" }}>
        <div className="card-body bg-light">
          <FaPlus className="me-2" />
          <button
            style={{ color: "#d05129" }}
            className="btn btn-link text-decoration-none p-0"
            onClick={() => navigate(`/Kanbas/Courses/${cid}/Quizzes/${qid}/Questions/New`)} // Adjust navigation
          >
            <h4 className="mb-0">New Question</h4>
          </button>
        </div>
      </div>

      {/* Save and Cancel buttons */}
      <div className="row g-3 mt-2">
        <hr />
        <div className="d-flex justify-content-end">
          <Link to={`/Kanbas/Courses/${cid}/Quizzes`} className="btn btn-secondary me-3">
            Cancel
          </Link>
          <button onClick={handleSave} className="btn btn-danger">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
