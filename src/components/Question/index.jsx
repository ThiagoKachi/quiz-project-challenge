import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { Grid, Box, Button } from '@material-ui/core';

import './styles.css';
import { AppContext } from '../../contexts/AppContext';

export function Question() {
  const { quizQuestions, questionNumber, verifyAnswerResult, nextQuestion } =
    useContext(AppContext);
  // Habilitar botão de próxima pergunta somente se alguma alternativa estiver selecionada

  return (
    <Grid container direction="column" alignItems="center" justify="center">
      <Box
        sx={{
          bgcolor: 'var(--white)',
          height: '100vh',
          width: '800px',
          border: '2px solid var(--black)',
          borderRadius: '4px',
          padding: '0 30px',
        }}
      >
        <h1 className="question-category">
          <span className="category">
            {quizQuestions[questionNumber].category}
          </span>{' '}
          <span className="number-of-questions">
            Question {questionNumber + 1}/{quizQuestions.length}
          </span>
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
        <div className="question-answers">
          {quizQuestions[questionNumber].incorrect_answers
            .concat(quizQuestions[questionNumber].correct_answer)
            .sort()
            .map((question) => (
              <label
                key={question}
                htmlFor="question-input"
                className="question-label"
              >
                {question}
                <input
                  type="radio"
                  name="question"
                  id="question-input"
                  value={question}
                  onChange={verifyAnswerResult}
                />
              </label>
            ))}
        </div>
        <div className="next-question">
          <Button
            variant="contained"
            color="success"
            size="large"
            onClick={nextQuestion}
          >
            Próximo
          </Button>
        </div>
      </Box>
    </Grid>
  );
}

Question.propTypes = {
  question: PropTypes.object,
};
