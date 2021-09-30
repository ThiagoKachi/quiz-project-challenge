import React, { useContext } from 'react';

import { Modal, Box, Button } from '@material-ui/core';
import { AppContext } from '../../contexts/AppContext';

import './styles.css';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export function ModalComponent() {
  const { openModal, handleClose, questionQtd, startGame } =
    useContext(AppContext);

  return (
    <>
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 500, height: 180 }}>
          <h1 id="parent-modal-title">
            Seu quiz terá {questionQtd}{' '}
            {questionQtd > 1 ? 'perguntas' : 'pergunta'}
          </h1>
          <div className="button-options">
            <Button
              sx={{ marginRight: 4, padding: '10px 50px' }}
              variant="contained"
              onClick={() => startGame(questionQtd)}
            >
              START
            </Button>
            <Button
              variant="contained"
              color="error"
              sx={{ padding: '10px 50px' }}
              onClick={handleClose}
            >
              CANCEL
            </Button>
          </div>
        </Box>
      </Modal>
    </>
  );
}
