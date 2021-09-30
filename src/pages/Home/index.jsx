import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';

import logoImg from '../../assets/logo.svg';
import './style.css';

import { Grid, Box, TextField, Button } from '@material-ui/core';

import { AppContext } from '../../contexts/AppContext';
import { ModalComponent } from '../../components/Modal';

export function HomePage() {
  const {
    questionQtd,
    setQuestionQtd,
    setDisabledButton,
    handleOpen,
    openModal,
    redirect,
  } = useContext(AppContext);

  {
    if (redirect) {
      return <Redirect to="/quiz" />;
    }
  }

  return (
    <Grid container direction="column" alignItems="center" justify="center">
      <Box
        sx={{
          bgcolor: 'var(--white)',
          height: '100vh',
          width: '900px',
          border: '2px solid var(--black)',
          borderRadius: '4px',
          padding: '0 50px',
        }}
      >
        <h1 className="logo-title">
          <img src={logoImg} alt="Logo" />
          Quiz
        </h1>
        <h2 className="description">
          Bem-vindo ao <span className="quiz-name">WA-Project Quiz.</span>
          Para começarmos, selecione a quantidade de perguntas que deseja
          responder.
        </h2>
        <div className="question-qtd">
          <TextField
            id="standard-basic"
            label="N° de perguntas"
            variant="standard"
            required
            type="number"
            value={questionQtd}
            onChange={(e) => setQuestionQtd(e.target.value)}
          />
        </div>
        <div className="start-game">
          <Button
            variant="contained"
            size="large"
            disabled={!setDisabledButton()}
            onClick={handleOpen}
          >
            SELECT
          </Button>
          {openModal && <ModalComponent />}
        </div>
      </Box>
    </Grid>
  );
}
