import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import FillInTheBlankEditor from './FillInTheBlankEditor';
import MultipleChoiceEditor from './MultipleChoiceEditor';
import TrueFalseEditor from './TrueFalseEditor';
import { createQuestionForQuiz } from '../client';

export default function QuizQuestionEditor(){
  const navigate = useNavigate();
  const { cid, quizId, type } = useParams();
  console.log(quizId, "THIS IS QUIZID");
  const question = { 
    _id: new Date().toString(), 
    quizId: quizId, 
    title: '', 
    points: 0,
    type: "",
    questionText: '',
    //options?: [],
    //correctOption?: 0,
    //blank?: [],
    //answer?: false 
    };

  const onSave = async (question: any) => {
    console.log(question);
    await createQuestionForQuiz(question);
    navigate(-1);
  }

  const onCancel = () => {
    navigate(-1);
  }

  switch(type){
    case 'Fill_in_the_Blank':
      question.type = "Fill in the Blank";
      return <FillInTheBlankEditor question={question} onSave={onSave} onCancel={onCancel}></FillInTheBlankEditor>;
    case 'Multiple_Choice':
      question.type = "Multiple Choice";
      return <MultipleChoiceEditor question={question} onSave={onSave} onCancel={onCancel}></MultipleChoiceEditor>;
    case 'TrueFalse':
      question.type = "TrueFalse";
      return <TrueFalseEditor question={question} onSave={onSave} onCancel={onCancel}></TrueFalseEditor>;
    default:
      return <div></div>;
  }

};