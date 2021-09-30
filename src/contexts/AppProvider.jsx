import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { AppContext } from './AppContext';

import { startQuiz } from '../services';

export function Provider({ children }) {
  const [questionQtd, setQuestionQtd] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [quizQuestions, setQuizQuestions] = useState([]);

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
    setLoading(false);
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
  };

  return (
    <AppContext.Provider value={infosToShare}>{children}</AppContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node,
};
