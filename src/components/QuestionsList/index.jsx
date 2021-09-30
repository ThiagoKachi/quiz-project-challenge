import React, { useContext } from 'react';

import { AppContext } from '../../contexts/AppContext';

import { Question } from '../Question';

export function QuestionsList() {
  const { quizQuestions } = useContext(AppContext);

  return quizQuestions.map((question) => (
    <Question key={question.question} question={question} />
  ));
}
