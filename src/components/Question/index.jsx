import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';

import { Grid, Box } from '@material-ui/core';

import './styles.css';
import { AppContext } from '../../contexts/AppContext';

export function Question() {
  const { scrollBy, correctAnswers, quizQuestions } = useContext(AppContext);
  const [questionNumber, setQuestionNumber] = useState(0);
  // Quando chegar no length total, mostrar página de resultado

  return (
    <Grid container direction="column" alignItems="center" justify="center">
      <Box
        sx={{
          bgcolor: 'var(--white)',
          height: '80vh',
          width: '800px',
          marginTop: '20px',
          marginBottom: '20px',
          border: '2px solid var(--black)',
          borderRadius: '4px',
          padding: '0 50px',
        }}
      >
        <h1 className="question-category">
          <span onClick={correctAnswers} className="category">
            Category:
          </span>{' '}
          {quizQuestions[questionNumber].category}
        </h1>
        <p className="question-type">
          <span className="type">Type: </span>
          {quizQuestions[questionNumber].type === 'boolean'
            ? 'True or False'
            : 'Choose the correct alternative'}
        </p>
        <h2 className="question-difficulty">
          <span className="difficulty">Difficulty: </span>
          <span className="difficulty-upper">
            {quizQuestions[questionNumber].difficulty}
          </span>
        </h2>
        <span className="question">
          {quizQuestions[questionNumber].question}
        </span>
        <div className="question-answers" onClick={() => scrollBy()}>
          {quizQuestions[questionNumber].incorrect_answers
            .concat(quizQuestions[0].correct_answer)
            .sort()
            .map((incorrect) => (
              <label htmlFor="teste" key={incorrect}>
                {incorrect}
                <input
                  type="radio"
                  name="rteste"
                  id="teste"
                  value={incorrect}
                  onChange={(e) => console.log(e.target.value)}
                />
              </label>
            ))}
        </div>
        <button onClick={() => setQuestionNumber(questionNumber + 1)}>
          Próximo
        </button>
      </Box>
    </Grid>
  );
}

Question.propTypes = {
  question: PropTypes.object,
};

// <span className="questions" key={incorrect} value={incorrect}>
// ({incorrect})
// </span>
