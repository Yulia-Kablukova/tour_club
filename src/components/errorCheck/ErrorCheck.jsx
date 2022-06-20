import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAuthError } from '../../ducks/auth/selectors';
import { Button, Modal, Paper, Typography } from '@mui/material';
import {
  errorButtonStyle,
  errorLinkStyle,
  headerTextStyle,
  paperStyle,
} from './ErrorCheck.styled';
import { ERRORS, ROUTES } from '../../consts';

export const ErrorCheck = () => {
  const authError = useSelector(selectAuthError);

  return (
    <>
      <Modal open={authError === ERRORS.BAD_REQUEST}>
        <Paper elevation={12} sx={paperStyle}>
          <Typography style={headerTextStyle}>Произошла ошибка</Typography>
          <a href={ROUTES.HOME} style={errorLinkStyle}>
            <Button variant="contained" sx={errorButtonStyle}>
              Ок
            </Button>
          </a>
        </Paper>
      </Modal>
      <Outlet />
    </>
  );
};
