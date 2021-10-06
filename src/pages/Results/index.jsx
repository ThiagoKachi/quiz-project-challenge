import React, { useContext, useState } from 'react';

import { AppContext } from '../../contexts/AppContext';

import logoImg from '../../assets/logo.svg';

import './styles.css';

export function Results() {
  const { correctAnswers, quizQuestions } = useContext(AppContext);
  const [redirect, setRedirect] = useState(false);

  const finalMessage = (correctAnswers * 100) / quizQuestions.length;

  if (redirect) {
    window.location.href = '/';
  }

  return (
    <div className="container">
      <h1 className="logo-title">
        <img src={logoImg} alt="Logo" />
        Quiz
      </h1>
      <span className="number-correct-questions">
        Você acertou {correctAnswers} de {quizQuestions.length} perguntas.
      </span>
      <h1 className="final-message">
        {finalMessage >= 70
          ? `Parabéns, você acertou ${finalMessage}% das respostas.`
          : `Opss, poderia ter sido melhor. Tente novamente.`}
      </h1>
      <button onClick={() => setRedirect(true)}>Jogar Novamente</button>
    </div>
  );
}
