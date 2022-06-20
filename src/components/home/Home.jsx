import { useNavigate } from 'react-router-dom';
import {
  contentStyle,
  loginButtonStyle,
  mainPageStyle,
  signUpButtonStyle,
  footerStyle,
} from './Home.styled';
import { Box, Button, Modal, Paper, Typography } from '@mui/material';
import './Home.css';
import React from 'react';
import { AuthTabContainer } from '../../containers';
import { ROUTES } from '../../consts';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../ducks/auth/selectors';
import { logoutRequest } from '../../ducks/auth';

export const HomeComponent = () => {
  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const [authWindow, setAuthWindow] = React.useState({
    isOpened: false,
    tab: 0,
  });
  const dispatch = useDispatch();

  const handleAuthOpenClose = (tab) => {
    setAuthWindow((prevState) => ({
      isOpened: !prevState.isOpened,
      tab: tab,
    }));
  };

  const handleLogout = () => {
    dispatch(logoutRequest());
  };

  return (
    <Box sx={mainPageStyle}>
      <Paper elevation={12} className="mainPageHeader">
        <Box className="titleBox">
          <h1 className="titleStyle">snow peak.</h1>
          <span className="subtitleStyle">&nbsp;Всегда в пути&nbsp;</span>
        </Box>

        {!isLoggedIn && (
          <Box className="mainPageButtons">
            <Button
              variant="contained"
              onClick={() => {
                handleAuthOpenClose(1);
              }}
              sx={signUpButtonStyle}
            >
              регистрация
            </Button>
            <Button
              sx={loginButtonStyle}
              variant="outlined"
              onClick={() => {
                handleAuthOpenClose(0);
              }}
            >
              вход
            </Button>
          </Box>
        )}
        {isLoggedIn && (
          <Box className="mainPageButtons">
            <Button
              variant="contained"
              onClick={() => navigate(ROUTES.PROFILE)}
              sx={signUpButtonStyle}
            >
              личный кабинет
            </Button>
            <Button
              sx={loginButtonStyle}
              variant="outlined"
              onClick={handleLogout}
            >
              выйти
            </Button>
          </Box>
        )}
      </Paper>

      <Paper elevation={12} sx={contentStyle}>
        <p className="boldText">Добро пожаловать в клуб!</p>
        <p>
          snow peak. организует походы и проводит групповые занятия в секциях по
          различным видам спорта.
        </p>

        <p>
          Здесь вы сможете найти информацию о прошедших и будущих походах и
          соревнованиях, записаться в группу по понравившемуся направлению.
        </p>

        <p>
          Зарегистрируйтесь, если хотите присоединиться к клубу или войдите в
          систему, если уже имеете аккаунт.
        </p>
        <p>
          <span className="boldText">Телефон горячей линии:</span>+7 (800)
          555-35-35
        </p>
      </Paper>

      <footer style={footerStyle}>
        <Typography fontFamily="Open Sans">© 2022 FIT NSU</Typography>
      </footer>

      <Modal open={authWindow.isOpened} onClose={handleAuthOpenClose}>
        <div>
          <AuthTabContainer
            initialTab={authWindow.tab}
            handleAuthOpenClose={handleAuthOpenClose}
          />
        </div>
      </Modal>
    </Box>
  );
};
