import React from 'react';
import { CircularProgress, Box } from '@material-ui/core';

export function Loading() {
  return (
    <Box
      sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <CircularProgress />
    </Box>
  );
}
