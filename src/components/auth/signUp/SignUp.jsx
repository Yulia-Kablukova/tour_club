import { Formik } from 'formik';
import { defaultSignUpInfo } from '../../../consts';
import { signUpSchema } from '../../../tools/validationSchemas';
import { Button, TextField, Typography } from '@mui/material';
import {
  signUpButtonStyle,
  signUpLabelStyle,
  textFieldStyle,
} from './SignUp.styled';

export const SignUpComponent = ({ submitSignUp, error }) => {
  const handleSubmit = (userInfo) => {
    if (userInfo !== undefined) {
      submitSignUp(userInfo);
    }
  };

  return (
    <Formik
      initialValues={defaultSignUpInfo}
      validateOnBlur
      onSubmit={handleSubmit}
      validationSchema={signUpSchema}
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
          <Typography sx={signUpLabelStyle}>Регистрация</Typography>
          <TextField
            required
            label="Логин"
            type="text"
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
          <TextField
            required
            label="Повторите пароль"
            type="password"
            value={values.passwordRepeat}
            name="passwordRepeat"
            onChange={handleChange}
            onBlur={handleBlur}
            error={!!(touched.passwordRepeat && errors.passwordRepeat)}
            helperText={touched.passwordRepeat && errors.passwordRepeat}
            sx={textFieldStyle}
          />
          <TextField
            required
            label="Имя"
            type="text"
            value={values.name}
            name="name"
            onChange={handleChange}
            onBlur={handleBlur}
            error={!!(touched.name && errors.name)}
            helperText={touched.name && errors.name}
            sx={textFieldStyle}
          />
          <TextField
            required
            label="Фамилия"
            type="text"
            value={values.surname}
            name="surname"
            onChange={handleChange}
            onBlur={handleBlur}
            error={!!(touched.surname && errors.surname)}
            helperText={touched.surname && errors.surname}
            sx={textFieldStyle}
          />
          <TextField
            label="Отчество"
            type="text"
            value={values.patronymic}
            name="patronymic"
            onChange={handleChange}
            onBlur={handleBlur}
            error={!!(touched.patronymic && errors.patronymic)}
            helperText={touched.patronymic && errors.patronymic}
            sx={textFieldStyle}
          />
          <TextField
            label="Гендер"
            type="text"
            value={values.gender}
            name="gender"
            onChange={handleChange}
            onBlur={handleBlur}
            error={!!(touched.gender && errors.gender)}
            helperText={touched.gender && errors.gender}
            sx={textFieldStyle}
          />
          <TextField
            label="Дата рождения"
            type="date"
            value={values.birthday}
            name="birthday"
            onChange={handleChange}
            onBlur={handleBlur}
            error={!!(touched.birthday && errors.birthday)}
            helperText={touched.birthday && errors.birthday}
            sx={textFieldStyle}
          />
          <TextField
            label="Телефон"
            type="text"
            value={values.phone}
            name="phone"
            onChange={handleChange}
            onBlur={handleBlur}
            error={!!(touched.phone && errors.phone)}
            helperText={touched.phone && errors.phone}
            sx={textFieldStyle}
          />
          <TextField
            required
            label="E-mail"
            type="email"
            value={values.email}
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            error={!!(touched.email && errors.email)}
            helperText={touched.email && errors.email}
            sx={textFieldStyle}
          />

          {error && (
            <Typography
              fontSize="0.8rem"
              color="#d32f2f"
              fontFamily="Open Sans"
            >
              Пользователь с такой почтой уже существует
            </Typography>
          )}
          <Button
            variant="contained"
            onClick={(value) => {
              if (isValid) handleSubmit(value);
            }}
            type="submit"
            sx={signUpButtonStyle}
          >
            Зарегистрироваться
          </Button>
        </>
      )}
    </Formik>
  );
};
