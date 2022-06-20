import { Formik } from 'formik';
import { defaultLoginInfo } from '../../../consts';
import { loginSchema } from '../../../tools/validationSchemas';
import { Button, TextField, Typography } from '@mui/material';
import {
  loginButtonStyle,
  loginLabelStyle,
  textFieldStyle,
} from './Login.styled';
import React from 'react';

export const LoginComponent = ({ submitLogin, error }) => {
  const handleSubmit = (userInfo) => {
    submitLogin(userInfo);
  };

  return (
    <>
      <Formik
        initialValues={defaultLoginInfo}
        validateOnBlur
        onSubmit={handleSubmit}
        validationSchema={loginSchema}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          isValid,
          handleSubmit,
        }) => (
          <>
            <Typography sx={loginLabelStyle}>Вход</Typography>
            <TextField
              required
              label="Логин"
              value={values.login}
              name="login"
              onChange={handleChange}
              onBlur={handleBlur}
              error={!!(touched.login && errors.login)}
              helperText={touched.login && errors.login}
              sx={textFieldStyle}
            />
            <TextField
              required
              label="Пароль"
              type="password"
              value={values.password}
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              error={!!(touched.password && errors.password)}
              helperText={touched.password && errors.password}
              sx={textFieldStyle}
            />

            {error !== null && (
              <Typography
                fontSize="0.8rem"
                color="#d32f2f"
                fontFamily="Open Sans"
              >
                Неверный логин или пароль
              </Typography>
            )}

            <Button
              variant="contained"
              onClick={(value) => {
                if (isValid) handleSubmit(value);
              }}
              type="submit"
              sx={loginButtonStyle}
            >
              Войти
            </Button>
          </>
        )}
      </Formik>
    </>
  );
};
