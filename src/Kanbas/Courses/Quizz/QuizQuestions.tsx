import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { addQuiz, updateQuiz } from "./reducer";
import { Link } from "react-router-dom";
import { addNewQuiz, findQuestionsForQuiz, updateQuizById } from "../client";
import { FaPlus } from "react-icons/fa";

interface Question {
    _id: string;
    title: string;
    points: number;
    type: "Fill in the Blank" | "Multiple Choice" | "TrueFalse";
    questionText: string;
    options?: string[];
    correctOption?: number;
    blank?: string[];
    answer?: boolean;
    quizId: string;
}

export default function QuizQuestions() {
    const { cid, qid } = useParams();
    // console.log(cid, "this is cid");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const quizzes = useSelector((state: any) => state.quizzesReducer.quizzes);
    // console.log(qid, "this is qid");

    const [questions, setQuestions] = useState<Question[]>([]);
    const [currentAnswers, setCurrentAnswers] = useState<{ [key: string]: string | boolean }>({});
    const [showDropdown, setShowDropdown] = useState(false);
    const [showResults, setShowResults] = useState(false);
    const [score, setScore] = useState(0);

    const { quizId } = useParams();
    console.log(quizId, "this is quiziD");
    const { currentUser } = useSelector((state: any) => state.accountReducer);

    const quizData = quizzes.find((q: any) => q._id === quizId) || {
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

    const fetchQuestions = async () => {
        if (quizId !== undefined) {
            try {
                const questionList = await findQuestionsForQuiz(quizId);
                console.log(questionList, "Fetched Questions");

                const list: Question[] = questionList.map((question: any) => ({
                    _id: question._id,
                    title: question.title,
                    points: question.points,
                    type: question.type,
                    questionText: question.questionText,
                    options: question.options || [],
                    correctOption: question.correctOption ?? undefined,
                    blank: question.blank || [],
                    answer: question.answer ?? undefined,
                    quizId: question.quizId
                }));
                setQuestions(list);
            } catch (error) {
                console.error("Error fetching questions:", error);
            }
        }
    };

    useEffect(() => {
        fetchQuestions();
    }, [])

    const handleSave = () => {
        if (!quizId || quizId === "New") {
            dispatch(addQuiz({ ...quiz, course: cid }));
            addNewQuiz({ ...quiz, course: cid });
        } else {
            dispatch(updateQuiz({ ...quiz, quizId: quizId, course: cid }));
            console.log({...quiz, courseId: cid, quizId: quizId}, "******")
            updateQuizById({...quiz, courseId: cid, _id: quizId});
        }
        navigate(`/Kanbas/Courses/${cid}/Quizzes`);
    };

    const handleChange = (field: string, value: string | number | boolean) => {
        setQuiz({ ...quiz, [field]: value });
    };


    const renderQuestion = (question: Question) => {
            switch (question.type) {
                case 'Multiple Choice':
                    return (
                        <div className="mb-4">
                            <h4>{question.title}</h4>
                            <p>{question.questionText}</p>
                            {question.options?.map((choice, index) => (
                                <div key={index} className="form-check">
                                    <input
                                        type="radio"
                                        name={question._id}
                                        id={`${question._id}-${index}`}
                                        className="form-check-input"
                                        checked={currentAnswers[question._id] === choice}
                                        onChange={() => handleAnswerChange(question._id, choice)}
                                        disabled={showResults}
                                    />
                                    <label className="form-check-label" htmlFor={`${question._id}-${index}`}>
                                        {choice}
                                    </label>
                                </div>
                            ))}
                        </div>
                    );
    
                case 'TrueFalse':
                    return (
                        <div className="mb-4">
                            <h4>{question.title}</h4>
                            <p>{question.questionText}</p>
                            <div className="form-check">
                                <input
                                    type="radio"
                                    name={question._id}
                                    id={`${question._id}-true`}
                                    className="form-check-input"
                                    checked={currentAnswers[question._id] === true}
                                    onChange={() => handleAnswerChange(question._id, true)}
                                    disabled={showResults}
                                />
                                <label className="form-check-label" htmlFor={`${question._id}-true`}>
                                    True
                                </label>
                            </div>
                            <div className="form-check">
                                <input
                                    type="radio"
                                    name={question._id}
                                    id={`${question._id}-false`}
                                    className="form-check-input"
                                    checked={currentAnswers[question._id] === false}
                                    onChange={() => handleAnswerChange(question._id, false)}
                                    disabled={showResults}
                                />
                                <label className="form-check-label" htmlFor={`${question._id}-false`}>
                                    False
                                </label>
                            </div>
                        </div>
                    );
    
                case 'Fill in the Blank':
                    return (
                        <div className="mb-4">
                            <h4>{question.title}</h4>
                            <p>{question.questionText}</p>
                            <input
                                type="text"
                                className="form-control"
                                value={currentAnswers[question._id]?.toString() || ''}
                                onChange={(e) => handleAnswerChange(question._id, e.target.value)}
                                disabled={showResults}
                            />
                        </div>
                    );
    
                default:
                    return null;
            }
        };

        const handleAnswerChange = (questionId: string, answer: string | boolean) => {
            setCurrentAnswers({
                ...currentAnswers,
                [questionId]: answer
            });
        };

        const handleOptionClick = (type: string) => {
            navigate(`/Kanbas/Courses/${cid}/Quizzes/${quizId}/Questions/New/${type}`);
        };

    return (
        <div id="quiz-editor" className="container mt-4">
            {/* Tab Navigation */}
            <div className="d-flex mb-4">
                <div
                    className="tab"
                    onClick={() => {
                        navigate(`/Kanbas/Courses/${cid}/Quizzes/${quizId}/Edit`)
                        console.log(quizId, "quizid for edit");
                    }
                        
                }
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
            <div className="container mt-4">
                <div className="card mb-4" style={{ backgroundColor: "lightorange", color: '#d05129' }}>
                </div>

                <div className="d-flex flex-column mb-4">

                {questions.map((question) => (
                    <div
                        key={question._id}
                        className="card mb-3"
                        style={{
                            maxWidth: '600px',
                            margin: 'auto',
                        }}
                    >
                        <div className="card-body">
                            {renderQuestion(question)}
                        </div>
                    </div>
                ))}
            </div>
            <div className="card mb-4 text-center mx-auto" style={{ width: "fit-content", marginTop: "20px", color: "#d05129", position: 'relative' }}>
            <div className="card-body bg-light">
                <FaPlus className="me-2" />
                <button
                    style={{ color: "#d05129" }}
                    className="btn btn-link text-decoration-none p-0"
                    onClick={() => setShowDropdown(!showDropdown)}
                >
                    <h4 className="mb-0">New Question</h4>
                </button>

                {showDropdown && (
                    <div className="dropdown-menu show" style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', marginTop: '10px' }}>
                        <button className="dropdown-item" onClick={() => handleOptionClick('Fill_in_the_Blank')}>Fill in the Blank</button>
                        <button className="dropdown-item" onClick={() => handleOptionClick('Multiple_Choice')}>Multiple Choice</button>
                        <button className="dropdown-item" onClick={() => handleOptionClick('TrueFalse')}>True/False</button>
                    </div>
                )}
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
        </div>
    );
}
