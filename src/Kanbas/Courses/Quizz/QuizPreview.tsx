import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { findQuestionsForQuiz } from '../client';
import { title } from 'process';
import { FaPencilAlt } from "react-icons/fa";

interface Question {
    _id: string;
    title: string;
    points: number;
    type: "Fill in the Blank" | "Multiple Choice" | "True/False";
    questionText: string;
    options: string[];
    correctOption: string | boolean;
    // possibleAnswers?: string[];
}

interface QuizAttempt {
    answers: {
        [questionId: string]: string | boolean;
    };
    score: number;
    timestamp: Date;
}

export default function QuizPreview() {
    const navigate = useNavigate();
    const [questions, setQuestions] = useState<Question[]>([]);
    const [currentAnswers, setCurrentAnswers] = useState<{ [key: string]: string | boolean }>({});
    const [timeLeft, setTimeLeft] = useState<number>(1200); // 20 minutes in seconds
    const [showResults, setShowResults] = useState(false);
    const [score, setScore] = useState(0);

    const { quizId } = useParams();
    const { currentUser } = useSelector((state: any) => state.accountReducer);

    // const [currentAnswers, setCurrentAnswers] = useState<{ [key: string]: string | boolean }>({});
    // const [timeLeft, setTimeLeft] = useState<number>(1200); // 20 minutes in seconds
    // const [showResults, setShowResults] = useState(false);
    // const [score, setScore] = useState(0);

    const fetchQuestions = async () => {
        if (quizId !== undefined) {
            const questionList = await findQuestionsForQuiz(quizId);
            // console.log(questions, "this is questions");
            const list = [];
            for (let i = 0; i < questionList.length; i++) {
                list.push({ _id: questionList[i]._id, title: questionList[i].title, points: questionList[i].points, type: questionList[i].type, questionText: questionList[i].questionText, options: questionList[i].options, correctOption: questionList[i].correctOption });
                // console.log(questionList[i]._id, "this is id");
            }
            setQuestions(list);
            console.log(questions);
        }
    }

    useEffect(() => {
        fetchQuestions();

    }, []);

    useEffect(() => {
        if (timeLeft > 0 && !showResults) {
            const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
            return () => clearTimeout(timer);
        } else if (timeLeft === 0) {
            handleSubmit();
        }
    }, [timeLeft, showResults]);

    const handleAnswerChange = (questionId: string, answer: string | boolean) => {
        setCurrentAnswers({
            ...currentAnswers,
            [questionId]: answer
        });
    };

    const calculateScore = () => {
        let totalScore = 0;
        questions.forEach(question => {
            if (currentAnswers[question._id] === question.correctOption) {
                totalScore += question.points;
            }
        });
        return totalScore;
    };

    const handleSubmit = () => {
        const finalScore = calculateScore();
        setScore(finalScore);
        setShowResults(true);
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

            case 'True/False':
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

    return (
        <div className="container mt-4">
            <div className="card mb-4" style={{ backgroundColor: "lightorange", color: '#d05129' }}>
                <div className="card-body bg-light">
                    <h2>Q1 - Sample Quiz</h2>
                    <p>This is a preview of the quiz.</p>
                    <p>Started: {new Date().toLocaleString()}</p>
                </div>
            </div>

            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2>Quiz Questions</h2>
                <div>Time Left: {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}</div>
            </div>

            {questions.map((question) => (
                <div key={question._id} className="card mb-3">
                    <div className="card-body">
                        {renderQuestion(question)}
                    </div>
                </div>
            ))}

            {!showResults && (
                <button className="btn btn-primary btn-danger" onClick={handleSubmit}>
                    Submit Quiz
                </button>
            )}

            {showResults && (
                <div className="card mt-4">
                    <div className="card-body">
                        <h3>Quiz Results</h3>
                        <p>Your Score: {score}</p>
                        <button className="btn btn-secondary btn-danger" onClick={() => navigate(-1)}>
                            Return to Quiz List
                        </button>
                    </div>
                </div>
            )}

            <div className="card mb-4" style={{ marginTop: "20px" , color: '#d05129' }}>
                <div className="card-body bg-light">
                <FaPencilAlt className="me-2" />
                    <button style={{color: '#d05129'}}
                        className="btn btn-link text-decoration-none p-0"
                        // change navigation
                        onClick={() => navigate(`/edit-quiz/${quizId}`)}
                    >
                        <h4 className="mb-0">Keep Editing this Quiz</h4>
                    </button>
                </div>
            </div>
        </div>
    );
}
