import React from 'react';
import { Loader } from '../../loader';
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Paper,
  Select,
  TextField,
  Typography,
} from '@mui/material';
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
import { defaultCompetitionInfo, STATUS } from '../../../consts';
import { competitionSchema } from '../../../tools/validationSchemas';
import { useSelector } from 'react-redux';
import { selectCompetitionsStatus } from '../../../ducks/profile/competitions/selectors';

const columns = [
  { field: 'id', headerName: 'ID', width: 40 },
  { field: 'name', headerName: 'Имя', width: 200 },
  {
    field: 'sportName',
    headerName: 'Вид спорта',
    width: 200,
  },
  { field: 'date', headerName: 'Дата', type: 'date', width: 200 },
  {
    field: 'place',
    headerName: 'Место',
    width: 200,
  },
  {
    field: 'payment',
    headerName: 'Стартовый взнос',
    type: 'number',
    width: 200,
  },
  {
    field: 'supervisorName',
    headerName: 'Руководитель',
    width: 200,
  },
];

const makeRow = (users, sports, competitions) => {
  const competitionsCopy = [...competitions];
  competitionsCopy.forEach((competition, index) => {
    const supervisor = users.find((e) => e.id === competition.supervisor);
    competitionsCopy[index] = {
      ...competition,
      sportName: sports.find((e) => e.id === competition.sport).name,
      supervisorName: `${supervisor.surname} ${supervisor.name} ${supervisor.patronymic}`,
    };
  });
  return competitionsCopy;
};

export const CompetitionsComponent = ({
  competitions,
  sports,
  users,
  submitCreate,
  submitUpdate,
  submitDelete,
}) => {
  const [createWindow, setCreateWindow] = React.useState(false);
  const [updateWindow, setUpdateWindow] = React.useState({
    isOpened: false,
    id: 0,
  });
  const status = useSelector(selectCompetitionsStatus);

  const handleCreateWindowOpenClose = () => {
    setCreateWindow((prevState) => !prevState);
  };

  const handleUpdateWindowOpenClose = (id = 0) => {
    setUpdateWindow((prevState) => ({
      isOpened: !prevState.isOpened,
      id: id,
    }));
  };

  const handleCreate = (competitionInfo) => {
    submitCreate(competitionInfo);
    handleCreateWindowOpenClose();
  };

  const handleUpdate = (competitionInfo) => {
    submitUpdate(competitionInfo);
    handleUpdateWindowOpenClose();
  };

  const handleDelete = (id) => {
    submitDelete(id);
    handleUpdateWindowOpenClose();
  };

  return status !== STATUS.SUCCESS || sports.length === 0 ? (
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
          rows={makeRow(users, sports, competitions)}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          onRowClick={(row) => handleUpdateWindowOpenClose(row.id)}
        />
      </Paper>

      <Modal open={createWindow} onClose={handleCreateWindowOpenClose}>
        <Paper elevation={12} sx={createPaperStyle}>
          <Formik
            initialValues={defaultCompetitionInfo}
            validateOnBlur
            onSubmit={handleCreate}
            validationSchema={competitionSchema}
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
                <Typography sx={labelStyle}>Новое соревнование</Typography>
                <TextField
                  required
                  label="Название"
                  value={values.name}
                  name="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={!!(touched.name && errors.name)}
                  helperText={touched.name && errors.name}
                  sx={textFieldStyle}
                />
                <FormControl sx={{ width: '80%', margin: '0.5em' }}>
                  <InputLabel id="sport-select-label">Вид спорта</InputLabel>
                  <Select
                    labelId="sport-select-label"
                    value={values.sport}
                    label="Вид спорта"
                    onChange={handleChange}
                    name="sport"
                  >
                    {sports.map((sport) => (
                      <MenuItem key={sport.id} value={sport.id}>
                        {sport.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <TextField
                  required
                  label="Дата"
                  type="date"
                  value={values.date}
                  name="date"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={!!(touched.date && errors.date)}
                  helperText={touched.date && errors.date}
                  sx={textFieldStyle}
                />
                <TextField
                  required
                  label="Место"
                  value={values.place}
                  name="place"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={!!(touched.place && errors.place)}
                  helperText={touched.place && errors.place}
                  sx={textFieldStyle}
                />
                <TextField
                  required
                  label="Стартовый взнос"
                  value={values.payment}
                  name="payment"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={!!(touched.payment && errors.payment)}
                  helperText={touched.payment && errors.payment}
                  sx={textFieldStyle}
                />
                <FormControl sx={{ width: '80%', margin: '0.5em' }}>
                  <InputLabel id="supervisor-select-label">
                    Руководитель
                  </InputLabel>
                  <Select
                    labelId="supervisor-select-label"
                    value={values.supervisor}
                    label="Руководитель"
                    onChange={handleChange}
                    name="supervisor"
                  >
                    {users.map((user) => (
                      <MenuItem key={user.id} value={user.id}>
                        {user.surname} {user.name} {user.patronymic}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
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
            initialValues={competitions.find((e) => e.id === updateWindow.id)}
            validateOnBlur
            onSubmit={handleUpdate}
            validationSchema={competitionSchema}
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
                <Typography sx={labelStyle}>Изменить соревнование</Typography>
                <TextField
                  required
                  label="Название"
                  value={values.name}
                  name="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={!!(touched.name && errors.name)}
                  helperText={touched.name && errors.name}
                  sx={textFieldStyle}
                />
                <FormControl sx={{ width: '80%', margin: '0.5em' }}>
                  <InputLabel id="sport-select-label">Вид спорта</InputLabel>
                  <Select
                    labelId="sport-select-label"
                    value={values.sport}
                    label="Вид спорта"
                    onChange={handleChange}
                    name="sport"
                  >
                    {sports.map((sport) => (
                      <MenuItem key={sport.id} value={sport.id}>
                        {sport.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <TextField
                  required
                  label="Дата"
                  type="date"
                  value={values.date}
                  name="date"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={!!(touched.date && errors.date)}
                  helperText={touched.date && errors.date}
                  sx={textFieldStyle}
                />
                <TextField
                  required
                  label="Место"
                  value={values.place}
                  name="place"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={!!(touched.place && errors.place)}
                  helperText={touched.place && errors.place}
                  sx={textFieldStyle}
                />
                <TextField
                  required
                  label="Стартовый взнос"
                  value={values.payment}
                  name="payment"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={!!(touched.payment && errors.payment)}
                  helperText={touched.payment && errors.payment}
                  sx={textFieldStyle}
                />
                <FormControl sx={{ width: '80%', margin: '0.5em' }}>
                  <InputLabel id="supervisor-select-label">
                    Руководитель
                  </InputLabel>
                  <Select
                    labelId="supervisor-select-label"
                    value={values.supervisor}
                    label="Руководитель"
                    onChange={handleChange}
                    name="supervisor"
                  >
                    {users.map((user) => (
                      <MenuItem key={user.id} value={user.id}>
                        {user.surname} {user.name} {user.patronymic}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
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
