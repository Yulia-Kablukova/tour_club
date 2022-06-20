import React from 'react';
import { Loader } from '../../loader';
import { Button, Modal, Paper, TextField, Typography } from '@mui/material';
import {
  createButtonStyle,
  createFormButtonStyle,
  createPaperStyle,
  deleteButtonStyle,
  labelStyle,
  overviewBoxStyle,
  textFieldStyle,
} from '../Profile.styled';
import { Formik } from 'formik';
import { DataGrid } from '@mui/x-data-grid';
import { defaultUserInfo, STATUS } from '../../../consts';
import { userSchema } from '../../../tools/validationSchemas';
import { useSelector } from 'react-redux';
import { selectUsersStatus } from '../../../ducks/profile/users/selectors';

const columns = [
  { field: 'id', headerName: 'ID', width: 40 },
  { field: 'login', headerName: 'Логин', width: 200 },
  { field: 'name', headerName: 'Имя', width: 200 },
  { field: 'surname', headerName: 'Фамилия', width: 200 },
  { field: 'patronymic', headerName: 'Отчество', width: 200 },
  { field: 'birthday', headerName: 'Дата рождения', type: 'date', width: 200 },
  {
    field: 'phone',
    headerName: 'Телефон',
    width: 200,
  },
  { field: 'email', headerName: 'Электронная почта', width: 200 },
  { field: 'gender', headerName: 'Гендер', width: 200 },
  { field: 'role', headerName: 'Роль', width: 200 },
];

export const UsersComponent = ({
  users,
  usersSelect,
  submitCreate,
  submitUpdate,
  submitDelete,
  submitFetchUsersMoreThanOneTrip,
}) => {
  const [createWindow, setCreateWindow] = React.useState(false);
  const [updateWindow, setUpdateWindow] = React.useState({
    isOpened: false,
    id: 0,
  });
  const status = useSelector(selectUsersStatus);

  const handleCreateWindowOpenClose = () => {
    setCreateWindow((prevState) => !prevState);
  };

  const handleUpdateWindowOpenClose = (id = 0) => {
    setUpdateWindow((prevState) => ({
      isOpened: !prevState.isOpened,
      id: id,
    }));
  };

  const handleCreate = (userInfo) => {
    submitCreate(userInfo);
    handleCreateWindowOpenClose();
  };

  const handleUpdate = (userInfo) => {
    submitUpdate(userInfo);
    handleUpdateWindowOpenClose();
  };

  const handleDelete = (id) => {
    submitDelete(id);
    handleUpdateWindowOpenClose();
  };

  const handleFetchUsersMoreThanOneTrip = () => {
    submitFetchUsersMoreThanOneTrip();
  };

  return status !== STATUS.SUCCESS ? (
    <>
      <Loader />
    </>
  ) : (
    <>
      <Button
        variant="contained"
        style={createButtonStyle}
        onClick={() => {
          handleCreateWindowOpenClose();
        }}
      >
        Создать
      </Button>

      <Paper elevation={2} sx={overviewBoxStyle}>
        <DataGrid
          rows={users}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          onRowClick={(row) => handleUpdateWindowOpenClose(row.id)}
        />
      </Paper>

      <Button
        variant="contained"
        style={createButtonStyle}
        onClick={() => {
          handleFetchUsersMoreThanOneTrip();
        }}
      >
        > 1 похода
      </Button>

      <Paper elevation={2} sx={overviewBoxStyle}>
        <DataGrid
          rows={usersSelect}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
        />
      </Paper>

      <Modal open={createWindow} onClose={handleCreateWindowOpenClose}>
        <Paper elevation={12} sx={createPaperStyle}>
          <Formik
            initialValues={defaultUserInfo}
            validateOnBlur
            onSubmit={handleCreate}
            validationSchema={userSchema}
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
                <Typography sx={labelStyle}>Новый пользователь</Typography>
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
                  label="Имя"
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
                  value={values.surname}
                  name="surname"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={!!(touched.surname && errors.surname)}
                  helperText={touched.surname && errors.surname}
                  sx={textFieldStyle}
                />
                <TextField
                  required
                  label="Отчество"
                  value={values.patronymic}
                  name="patronymic"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={!!(touched.patronymic && errors.patronymic)}
                  helperText={touched.patronymic && errors.patronymic}
                  sx={textFieldStyle}
                />
                <TextField
                  required
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
                  required
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
                  label="Электронная почта"
                  type="text"
                  value={values.email}
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={!!(touched.email && errors.email)}
                  helperText={touched.email && errors.email}
                  sx={textFieldStyle}
                />
                <TextField
                  required
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
                  required
                  label="Роль"
                  type="text"
                  value={values.role}
                  name="role"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={!!(touched.role && errors.role)}
                  helperText={touched.role && errors.role}
                  sx={textFieldStyle}
                />
                <Button
                  variant="contained"
                  onClick={(value) => {
                    if (isValid) handleSubmit(value);
                  }}
                  type="submit"
                  sx={createFormButtonStyle}
                >
                  Создать
                </Button>
              </>
            )}
          </Formik>
        </Paper>
      </Modal>

      <Modal open={updateWindow.isOpened} onClose={handleUpdateWindowOpenClose}>
        <Paper elevation={12} sx={createPaperStyle}>
          <Formik
            initialValues={users.find((e) => e.id === updateWindow.id)}
            validateOnBlur
            onSubmit={handleUpdate}
            validationSchema={userSchema}
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
                <Typography sx={labelStyle}>Изменить пользователя</Typography>
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
                  label="Имя"
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
                  value={values.surname}
                  name="surname"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={!!(touched.surname && errors.surname)}
                  helperText={touched.surname && errors.surname}
                  sx={textFieldStyle}
                />
                <TextField
                  required
                  label="Отчество"
                  value={values.patronymic}
                  name="patronymic"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={!!(touched.patronymic && errors.patronymic)}
                  helperText={touched.patronymic && errors.patronymic}
                  sx={textFieldStyle}
                />
                <TextField
                  required
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
                  required
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
                  label="Электронная почта"
                  type="text"
                  value={values.email}
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={!!(touched.email && errors.email)}
                  helperText={touched.email && errors.email}
                  sx={textFieldStyle}
                />
                <TextField
                  required
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
                  required
                  label="Роль"
                  type="text"
                  value={values.role}
                  name="role"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={!!(touched.role && errors.role)}
                  helperText={touched.role && errors.role}
                  sx={textFieldStyle}
                />
                <Button
                  variant="contained"
                  onClick={(value) => {
                    if (isValid) handleSubmit(value);
                  }}
                  type="submit"
                  sx={createFormButtonStyle}
                >
                  Сохранить
                </Button>
                <Button
                  variant="contained"
                  onClick={(value) => {
                    if (isValid) handleDelete(updateWindow.id);
                  }}
                  type="submit"
                  sx={deleteButtonStyle}
                >
                  Удалить
                </Button>
              </>
            )}
          </Formik>
        </Paper>
      </Modal>
    </>
  );
};
