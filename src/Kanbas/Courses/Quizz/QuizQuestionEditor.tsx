import React, { useState } from 'react';

interface Question {
  _id: string;
  title: string;
  points: number;
  type: "Fill in the Blank" | "Multiple Choice" | "True/False";
  questionText: string;
  options?: string[];
  correctOption: string | boolean;
  possibleAnswers?: string[];
}

interface Props {
  quizId: string;
  onSave: (question: Question) => void;
  onCancel: () => void;
  initialQuestion?: Question;
}

const QuizQuestionEditor = ({ quizId, onSave, onCancel, initialQuestion }: Props) => {
  const [question, setQuestion] = useState<Question>(initialQuestion || {
    _id: String(Date.now()),
    title: '',
    points: 1,
    type: 'Multiple Choice',
    questionText: '',
    options: ['', ''],
    correctOption: '',
    possibleAnswers: []
  });

  const handleSave = () => {
    const questionToSave = { ...question };
    if (question.type === 'True/False') {
      questionToSave.correctOption = questionToSave.correctOption === 'true';
    }
    onSave(questionToSave);
  };

  const renderQuestionFields = () => {
    switch (question.type) {
      case 'Multiple Choice':
        return (
          <div className="mb-3">
            {question.options?.map((choice, index) => (
              <div key={index} className="d-flex mb-2">
                <div className="form-check">
                  <input
                    type="radio"
                    name={`${question._id}-choice`}
                    id={`${question._id}-${index}`}
                    className="form-check-input me-2"
                    checked={question.correctOption === index.toString()}
                    onChange={() => setQuestion({...question, correctOption: index.toString()})}
                  />
                  <input
                    type="text"
                    className="form-control"
                    value={choice}
                    onChange={(e) => {
                      const newChoices = [...question.options!];
                      newChoices[index] = e.target.value;
                      setQuestion({...question, options: newChoices});
                    }}
                  />
                </div>
              </div>
            ))}
            <button className="btn btn-secondary" onClick={() => 
              setQuestion({...question, options: [...question.options!, '']})
            }>
              Add Choice
            </button>
          </div>
        );

      case 'True/False':
        return (
          <div className="mb-3">
            <div className="form-check">
              <input
                type="radio"
                name={`${question._id}-tf`}
                id={`${question._id}-true`}
                className="form-check-input"
                checked={question.correctOption === 'true'}
                onChange={() => setQuestion({...question, correctOption: 'true'})}
              />
              <label className="form-check-label" htmlFor={`${question._id}-true`}>True</label>
            </div>
            <div className="form-check">
              <input
                type="radio"
                name={`${question._id}-tf`}
                id={`${question._id}-false`}
                className="form-check-input"
                checked={question.correctOption === 'false'}
                onChange={() => setQuestion({...question, correctOption: 'false'})}
              />
              <label className="form-check-label" htmlFor={`${question._id}-false`}>False</label>
            </div>
          </div>
        );

      case 'Fill in the Blank':
        return (
          <div className="mb-3">
            {question.possibleAnswers?.map((answer, index) => (
              <div key={index} className="mb-2">
                <input
                  type="text"
                  className="form-control"
                  value={answer}
                  onChange={(e) => {
                    const newAnswers = [...question.possibleAnswers!];
                    newAnswers[index] = e.target.value;
                    setQuestion({...question, possibleAnswers: newAnswers});
                  }}
                  placeholder="Enter possible answer"
                />
              </div>
            ))}
            <button className="btn btn-secondary" onClick={() => 
              setQuestion({...question, possibleAnswers: [...question.possibleAnswers!, '']})
            }>
              Add Possible Answer
            </button>
          </div>
        );
    }
  };

  return (
    <div className="card mb-3">
      <div className="card-body">
        <div className="mb-3">
          <label className="form-label">Question Type</label>
          <select
            className="form-select"
            value={question.type}
            onChange={(e) => setQuestion({
              ...question,
              type: e.target.value as Question['type'],
              options: e.target.value === 'Multiple Choice' ? ['', ''] : undefined,
              possibleAnswers: e.target.value === 'Fill in the Blank' ? [''] : undefined,
              correctOption: e.target.value === 'True/False' ? 'false' : ''
            })}
          >
            <option value="Multiple Choice">Multiple Choice</option>
            <option value="True/False">True/False</option>
            <option value="Fill in the Blank">Fill in the Blank</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            value={question.title}
            onChange={(e) => setQuestion({...question, title: e.target.value})}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Points</label>
          <input
            type="number"
            className="form-control"
            value={question.points}
            min="1"
            onChange={(e) => setQuestion({...question, points: parseInt(e.target.value)})}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Question Text</label>
          <textarea
            className="form-control"
            value={question.questionText}
            onChange={(e) => setQuestion({...question, questionText: e.target.value})}
            rows={3}
          />
        </div>

        {renderQuestionFields()}

        <div className="d-flex justify-content-end gap-2">
          <button className="btn btn-secondary" onClick={onCancel}>Cancel</button>
          <button className="btn btn-primary" onClick={handleSave}>Save Question</button>
        </div>
      </div>
    </div>
  );
};

export default { QuizQuestionEditor };