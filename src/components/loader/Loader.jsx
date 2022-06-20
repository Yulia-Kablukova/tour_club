import React from 'react';
import { Box, CircularProgress } from '@mui/material';
import { boxStyle } from './Loader.styled';

export const Loader = () => {
  return (
    <Box sx={boxStyle}>
      <CircularProgress />
    </Box>
  );
};
