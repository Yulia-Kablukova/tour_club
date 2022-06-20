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
  queryButtonStyle,
  textFieldStyle,
} from '../Profile.styled';
import { Formik } from 'formik';
import { defaultGroupInfo, STATUS } from '../../../consts';
import { DataGrid } from '@mui/x-data-grid';
import { groupSchema } from '../../../tools/validationSchemas';
import { useSelector } from 'react-redux';
import { selectGroupsStatus } from '../../../ducks/profile/groups/selectors';

const columns = [
  { field: 'id', headerName: 'ID', width: 40 },
  { field: 'number', headerName: 'Номер', width: 200 },
  { field: 'name', headerName: 'Название', width: 200 },
  { field: 'sportName', headerName: 'Вид спорта', type: 'date', width: 200 },
  {
    field: 'coachName',
    headerName: 'Тренер',
    width: 200,
  },
  { field: 'timetable', headerName: 'Расписание', width: 200 },
];

const sportColumns = [
  { field: 'id', headerName: 'ID', width: 40 },
  { field: 'name', headerName: 'Название', width: 200 },
];

const makeRow = (coaches, sports, groups) => {
  const groupsCopy = [...groups];
  groupsCopy.forEach((group, index) => {
    const coach = coaches.find((e) => e.id === group.coach);
    groupsCopy[index] = {
      ...group,
      sportName: sports.find((e) => e.id === group.sport).name,
      coachName: `${coach.surname} ${coach.name} ${coach.patronymic}`,
    };
  });
  return groupsCopy;
};

export const GroupsComponent = ({
  groups,
  coaches,
  sports,
  sportsSelect,
  submitCreate,
  submitUpdate,
  submitDelete,
  submitFetchSportsWithoutSection,
}) => {
  const [createWindow, setCreateWindow] = React.useState(false);
  const [updateWindow, setUpdateWindow] = React.useState({
    isOpened: false,
    id: 0,
  });
  const status = useSelector(selectGroupsStatus);

  const handleCreateWindowOpenClose = () => {
    setCreateWindow((prevState) => !prevState);
  };

  const handleUpdateWindowOpenClose = (id = 0) => {
    setUpdateWindow((prevState) => ({
      isOpened: !prevState.isOpened,
      id: id,
    }));
  };

  const handleCreate = (groupInfo) => {
    submitCreate(groupInfo);
    handleCreateWindowOpenClose();
  };

  const handleUpdate = (groupInfo) => {
    submitUpdate(groupInfo);
    handleUpdateWindowOpenClose();
  };

  const handleDelete = (id) => {
    submitDelete(id);
    handleUpdateWindowOpenClose();
  };

  const handleFetchSportsWithoutSection = () => {
    submitFetchSportsWithoutSection();
  };

  return status !== STATUS.SUCCESS ||
    sports.length === 0 ||
    coaches.length === 0 ? (
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
          rows={makeRow(coaches, sports, groups)}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          onRowClick={(row) => handleUpdateWindowOpenClose(row.id)}
        />
      </Paper>

      <Button
        variant="contained"
        style={queryButtonStyle}
        onClick={() => {
          handleFetchSportsWithoutSection();
        }}
      >
        Виды спорта без секций
      </Button>

      <Paper elevation={2} sx={overviewBoxStyle}>
        <DataGrid
          rows={sportsSelect}
          columns={sportColumns}
          pageSize={5}
          rowsPerPageOptions={[5]}
        />
      </Paper>

      <Modal open={createWindow} onClose={handleCreateWindowOpenClose}>
        <Paper elevation={12} sx={createPaperStyle}>
          <Formik
            initialValues={defaultGroupInfo}
            validateOnBlur
            onSubmit={handleCreate}
            validationSchema={groupSchema}
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
                <Typography sx={labelStyle}>Новая группа</Typography>
                <TextField
                  required
                  label="Номер"
                  value={values.number}
                  name="number"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={!!(touched.number && errors.number)}
                  helperText={touched.number && errors.number}
                  sx={textFieldStyle}
                />
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
                <FormControl sx={{ width: '80%', margin: '0.5em' }}>
                  <InputLabel id="coach-select-label">Тренер</InputLabel>
                  <Select
                    labelId="coach-select-label"
                    value={values.coach}
                    label="Тренер"
                    onChange={handleChange}
                    name="coach"
                  >
                    {coaches.map((user) => (
                      <MenuItem key={user.id} value={user.id}>
                        {user.surname} {user.name} {user.patronymic}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <TextField
                  required
                  label="Расписание"
                  type="text"
                  value={values.timetable}
                  name="timetable"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={!!(touched.timetable && errors.timetable)}
                  helperText={touched.timetable && errors.timetable}
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
            initialValues={groups.find((e) => e.id === updateWindow.id)}
            validateOnBlur
            onSubmit={handleUpdate}
            validationSchema={groupSchema}
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
                <Typography sx={labelStyle}>Изменить группу</Typography>
                <TextField
                  required
                  label="Номер"
                  value={values.number}
                  name="number"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={!!(touched.number && errors.number)}
                  helperText={touched.number && errors.number}
                  sx={textFieldStyle}
                />
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
                <FormControl sx={{ width: '80%', margin: '0.5em' }}>
                  <InputLabel id="coach-select-label">Тренер</InputLabel>
                  <Select
                    labelId="coach-select-label"
                    value={values.coach}
                    label="Тренер"
                    onChange={handleChange}
                    name="coach"
                  >
                    {coaches.map((user) => (
                      <MenuItem key={user.id} value={user.id}>
                        {user.surname} {user.name} {user.patronymic}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <TextField
                  required
                  label="Расписание"
                  type="text"
                  value={values.timetable}
                  name="timetable"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={!!(touched.timetable && errors.timetable)}
                  helperText={touched.timetable && errors.timetable}
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
