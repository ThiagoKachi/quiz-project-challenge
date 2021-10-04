import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { AppContext } from './AppContext';

import { startQuiz } from '../services';
import { useHistory } from 'react-router';

export function Provider({ children }) {
  const [questionQtd, setQuestionQtd] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [redirect, setRedirect] = useState(false);

  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  function setDisabledButton() {
    if (questionQtd > 0) {
      return true;
    }

    return false;
  }

  async function startGame(qtd) {
    setLoading(true);
    const generateQuiz = await startQuiz(qtd);
    setQuizQuestions(generateQuiz);
    setRedirect(true);
    setLoading(false);
    console.log(generateQuiz);
  }

  const [questionNumber, setQuestionNumber] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);

  const history = useHistory();

  function verifyAnswerResult(e) {
    if (e.target.value === quizQuestions[questionNumber].correct_answer) {
      console.log('Correto');
      return setCorrectAnswers(correctAnswers + 1);
    } else {
      console.log('Incorreto');
    }
  }

  function nextQuestion() {
    const quest = questionNumber + 1;
    if (quest < quizQuestions.length) {
      setQuestionNumber(questionNumber + 1);
    } else {
      history.push('/results');
    }
  }

  const infosToShare = {
    questionQtd,
    setQuestionQtd,
    setDisabledButton,
    openModal,
    handleOpen,
    handleClose,
    startGame,
    loading,
    quizQuestions,
    redirect,
    verifyAnswerResult,
    nextQuestion,
    questionNumber,
  };

  return (
    <AppContext.Provider value={infosToShare}>{children}</AppContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node,
};
