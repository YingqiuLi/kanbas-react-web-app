import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { findQuestionsForQuiz } from '../client';

interface Question {
    _id: string;
    title: string;
    points: number;
    questionType: "Fill in the Blank" | "Multiple Choice" | "True/False";
    question: string;
    choices?: string[];
    correctAnswer: string | boolean;
    possibleAnswers?: string[];
}

interface QuizAttempt {
    answers: {
        [questionId: string]: string | boolean;
    };
    score: number;
    timestamp: Date;
}

export default function QuizQuestions() {
    // const { quizId } = useParams();
    // const navigate = useNavigate();
    // const { currentUser } = useSelector((state: any) => state.accountReducer);
    // const [questions, setQuestions] = useState<Question[]>([]);
    // const [currentAnswers, setCurrentAnswers] = useState<{ [key: string]: string | boolean }>({});
    // const [timeLeft, setTimeLeft] = useState<number>(1200); // 20 minutes in seconds
    // const [showResults, setShowResults] = useState(false);
    // const [score, setScore] = useState(0);

    // useEffect(() => {
    //     const fetchQuestions = async () => {
    //         try {
    //             if (quizId !== undefined) {
    //                 const response = await findQuestionsForQuiz(quizId);
    //                 const data = await response.json();
    //                 alert(JSON.stringify(data));
    //                 // setQuestions(data);
    //             }
    //         } catch (error) {
    //             console.error("Error fetching questions:", error);
    //         }
    //     };
    //     fetchQuestions();
    // }, [quizId]);

    // useEffect(() => {
    //     // Timer countdown
    //     if (timeLeft > 0 && !showResults) {
    //         const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    //         return () => clearTimeout(timer);
    //     } else if (timeLeft === 0) {
    //         // handleSubmit();
    //     }
    // }, [timeLeft]);

    // const handleAnswerChange = (questionId: string, answer: string | boolean) => {
    //     setCurrentAnswers({
    //         ...currentAnswers,
    //         [questionId]: answer
    //     });
    // };

    // const calculateScore = () => {
    //     let totalScore = 0;
    //     questions.forEach(question => {
    //         if (currentAnswers[question._id] === question.correctAnswer) {
    //             totalScore += question.points;
    //         }
    //     });
    //     return totalScore;
    // };

    // const handleSubmit = async () => {
    //     const finalScore = calculateScore();
    //     setScore(finalScore);
    //     setShowResults(true);

    //     try {
    //         await fetch(`/api/quizzes/${quizId}/attempts`, {
    //             method: 'POST',
    //             headers: { 'Content-Type': 'application/json' },
    //             body: JSON.stringify({
    //                 userId: currentUser._id,
    //                 answers: currentAnswers,
    //                 score: finalScore,
    //                 timestamp: new Date()
    //             })
    //         });
    //     } catch (error) {
    //         console.error("Error saving attempt:", error);
    //     }
    // };

    const renderQuestion = (question: Question) => {
        switch (question.questionType) {
            case 'Multiple Choice':
                return (
                    <div className="mb-4">
                        <h4>{question.title}</h4>
                        <p>{question.question}</p >
                        {question.choices?.map((choice, index) => (
                            <div key={index} className="form-check">
                                <input
                                    type="radio"
                                    name={question._id}
                                    id={`${question._id}-${index}`}
                                    className="form-check-input"
                                    // checked={currentAnswers[question._id] === choice}
                                    // onChange={() => handleAnswerChange(question._id, choice)}
                                    // disabled={showResults}
                                />
                                <label className="form-check-label" htmlFor={`${question._id}-${index}`}>
                                    {choice}
                                </label>
                                {/* {showResults && choice === question.correctAnswer &&
                                    <span className="text-success ms-2">✓</span>}
                                {showResults && currentAnswers[question._id] === choice &&
                                    choice !== question.correctAnswer &&
                                    <span className="text-danger ms-2">✗</span>} */}
                            </div>
                        ))}
                    </div>
                );

            case 'True/False':
                return (
                    <div className="mb-4">
                        <h4>{question.title}</h4>
                        <p>{question.question}</p >
                        <div className="form-check">
                            <input
                                type="radio"
                                name={question._id}
                                id={`${question._id}-true`}
                                className="form-check-input"
                                // checked={currentAnswers[question._id] === true}
                                // onChange={() => handleAnswerChange(question._id, true)}
                                // disabled={showResults}
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
                                // checked={currentAnswers[question._id] === false}
                                // onChange={() => handleAnswerChange(question._id, false)}
                                // disabled={showResults}
                            />
                            <label className="form-check-label" htmlFor={`${question._id}-false`}>
                                False
                            </label>
                        </div>
                        {/* {showResults &&
                            <div className={`mt-2 ${currentAnswers[question._id] === question.correctAnswer ? 'text-success' : 'text-danger'}`}>
                                {currentAnswers[question._id] === question.correctAnswer ? '✓ Correct' : '✗ Incorrect'}
                            </div>
                        } */}
                    </div>
                );

            case 'Fill in the Blank':
                return (
                    <div className="mb-4">
                        <h4>{question.title}</h4>
                        <p>{question.question}</p >
                        <input
                            type="text"
                            className="form-control"
                            // value={currentAnswers[question._id]?.toString() || ''}
                            // onChange={(e) => handleAnswerChange(question._id, e.target.value)}
                            // disabled={showResults}
                        />
                        {/* {showResults &&
                            <div className={`mt-2 ${question.possibleAnswers?.includes(currentAnswers[question._id]?.toString() || '') ? 'text-success' : 'text-danger'}`}>
                                {question.possibleAnswers?.includes(currentAnswers[question._id]?.toString() || '') ? '✓ Correct' : '✗ Incorrect'}
                                {!question.possibleAnswers?.includes(currentAnswers[question._id]?.toString() || '') &&
                                    <div>Possible answers: {question.possibleAnswers?.join(', ')}</div>}
                            </div>
                        } */}
                    </div>
                );
        }
    };

    return (
        <div className="container mt-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2>Quiz Questions!!!!!!</h2>
                {/* <div>Time Left: {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}</div> */}
            </div>

            {/* {questions.map((question, index) => (
                <div key={question._id} className="card mb-3">
                    <div className="card-body">
                        {renderQuestion(question)}
                    </div>
                </div>
            ))}

            {!showResults && (
                <button
                    className="btn btn-primary"
                // onClick={handleSubmit}
                >
                    Submit Quiz
                </button>
            )}

            {showResults && (
                <div className="card mt-4">
                    <div className="card-body">
                        <h3>Quiz Results</h3>
                        <p>Your Score: {score}</p >
                        <button
                            className="btn btn-secondary"
                            onClick={() => navigate(-1)}
                        >
                            Return to Quiz List
                        </button>
                    </div>
                </div>
            )} */}
        </div>
    );
}