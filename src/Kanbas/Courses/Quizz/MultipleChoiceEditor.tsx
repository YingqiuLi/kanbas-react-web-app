import React, { useState } from 'react';

interface MultipleChoiceQuestion {
  _id: string;
  title: string;
  points: number;
  questionText: string;
  options?: string[];
  correctChoiceIndex?: number;
  quizId: string | undefined;
  // type: "Fill in the Blank" | "Multiple Choice" | "TrueFalse";
}

interface Props {
  question: MultipleChoiceQuestion;
  onSave: (question: MultipleChoiceQuestion) => void;
  onCancel: (question: MultipleChoiceQuestion) => void;
}

const MultipleChoiceEditor: React.FC<Props> = ({ question, onSave, onCancel }) => {
  const [title, setTitle] = useState(question.title);
  const [points, setPoints] = useState(question.points);
  const [content, setContent] = useState(question.questionText);
  const [options, setOptions] = useState(['']);
  const [correctAnswerIndex, setCorrectAnswerIndex] = useState(0);

  const handleChoiceChange = (index: number, value: string) => {
    const newOptions = options.map((option, i) => i === index ? value : option);
    setOptions(newOptions);
  };

  const handleAddChoice = () => {
    setOptions([...options, '']);
  };

  const handleRemoveChoice = (index: number) => {
    const newOptions = options.filter((_, i) => i !== index);
    setOptions(newOptions);
    if (correctAnswerIndex >= index) {
      setCorrectAnswerIndex(prev => prev > 0 ? prev - 1 : 0);
    }
  };

  const save = () => {
    onSave({ ...question, title, points, questionText: content, options, correctChoiceIndex: correctAnswerIndex });
  };

  return (
    <div>
      <div className="preview-questions">
        <div className="questionBox">
          <div className="title">
            <input type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" />
            <input type="number" value={points} onChange={e => setPoints(parseInt(e.target.value, 10))} placeholder="Points" />
          </div>
          <div className="question">
            <textarea value={content} onChange={e => setContent(e.target.value)} placeholder="Question Content" />
          </div>
          <div className="answers">
            {options.map((option, index) => (
              <div key={index}>
                <input
                  type="radio"
                  name="correctAnswer"
                  checked={index === correctAnswerIndex}
                  onChange={() => setCorrectAnswerIndex(index)}
                />
                <textarea
                  value={option}
                  onChange={e => handleChoiceChange(index, e.target.value)}
                  placeholder="Choice Text"
                />
                <button className="goodButton" onClick={() => handleRemoveChoice(index)}>Remove</button>
              </div>
            ))}
          </div>

          <button className="goodButton" onClick={handleAddChoice}>Add Choice</button>

          <hr />
          <div className='float-end'>
            <button className="goodButton" onClick={() => onCancel(question)}>Cancel</button>
            <button className="goodButton" onClick={save}>Save/Update Question</button>
            <p />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultipleChoiceEditor;
