import React, { useState } from 'react';

interface TrueFalseQuestion {
  _id: string;
  title: string;
  points: number;
  questionText: string;
  correctAnswer?: boolean;
  quizId: string | undefined;
  // type: "Fill in the Blank" | "Multiple Choice" | "TrueFalse";
}

interface TrueFalseEditorProps {
  question: TrueFalseQuestion;
  onSave: (question: TrueFalseQuestion) => void;
  onCancel: (question: TrueFalseQuestion) => void;
}

const TrueFalseEditor: React.FC<TrueFalseEditorProps> = ({ question, onSave, onCancel }) => {
  const [title, setTitle] = useState(question.title);
  const [points, setPoints] = useState(question.points);
  const [content, setContent] = useState<string>(question.questionText);
  const [answer, setAnswer] = useState(question.correctAnswer);

  const save = () => {
    onSave({ ...question, title, points, questionText: content, correctAnswer: answer });
  };

  return (
    <div>
      <div className="preview-questions">
        <div className="questionBox">
          <div className="title">
            <input type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" />
            <input type="number" value={points} onChange={e => setPoints(Number(e.target.value))} placeholder="Points" />
          </div>
          <div className="question">
            <textarea value={content} onChange={e => setContent(e.target.value)} placeholder="Question Content" />
          </div>
          <div className="answers">
            <label>
              <input type="radio" checked={answer === true} onChange={() => setAnswer(true)} /> True
            </label>
            <label>
              <input type="radio" checked={answer === false} onChange={() => setAnswer(false)} /> False
            </label>
          </div>
          <br />
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

export default TrueFalseEditor;
