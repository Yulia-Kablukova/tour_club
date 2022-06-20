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
import { defaultTripInfo, STATUS } from '../../../consts';
import { tripSchema } from '../../../tools/validationSchemas';
import { DataGrid } from '@mui/x-data-grid';
import { useSelector } from 'react-redux';
import { selectTripsStatus } from '../../../ducks/profile/trips/selectors';

const columns = [
  { field: 'id', headerName: 'ID', width: 40 },
  { field: 'name', headerName: 'Имя', width: 200 },
  { field: 'date', headerName: 'Дата', type: 'date', width: 200 },
  {
    field: 'category',
    headerName: 'Категория',
    width: 200,
  },
  { field: 'route', headerName: 'Маршрут', width: 200 },
  {
    field: 'daysCount',
    headerName: 'Количество дней',
    type: 'number',
    width: 200,
  },
  { field: 'difficulty', headerName: 'Сложность', type: 'number', width: 200 },
  {
    field: 'maxParticipants',
    headerName: 'Макс. число участников',
    type: 'number',
    width: 200,
  },
  { field: 'type', headerName: 'Тип', width: 200 },
  { field: 'physicalLevel', headerName: 'Физическая подготовка', width: 200 },
  { field: 'gidName', headerName: 'Гид', width: 200 },
];

const makeRow = (users, routes, trips) => {
  const tripsCopy = [...trips];
  tripsCopy.forEach((trip, index) => {
    const gid = users.find((e) => e.id === trip.gid);
    tripsCopy[index] = {
      ...trip,
      route: routes.find((e) => e.id === trip.routeId).name,
      gidName: `${gid.surname} ${gid.name} ${gid.patronymic}`,
    };
  });
  return tripsCopy;
};

export const TripsComponent = ({
  trips,
  routes,
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
  const status = useSelector(selectTripsStatus);

  const handleCreateWindowOpenClose = () => {
    setCreateWindow((prevState) => !prevState);
  };

  const handleUpdateWindowOpenClose = (id = 0) => {
    setUpdateWindow((prevState) => ({
      isOpened: !prevState.isOpened,
      id: id,
    }));
  };

  const handleCreate = (tripInfo) => {
    submitCreate(tripInfo);
    handleCreateWindowOpenClose();
  };

  const handleUpdate = (tripInfo) => {
    submitUpdate(tripInfo);
    handleUpdateWindowOpenClose();
  };

  const handleDelete = (id) => {
    submitDelete(id);
    handleUpdateWindowOpenClose();
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
          rows={makeRow(users, routes, trips)}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          onRowClick={(row) => handleUpdateWindowOpenClose(row.id)}
        />
      </Paper>

      <Modal open={createWindow} onClose={handleCreateWindowOpenClose}>
        <Paper elevation={12} sx={createPaperStyle}>
          <Formik
            initialValues={defaultTripInfo}
            validateOnBlur
            onSubmit={handleCreate}
            validationSchema={tripSchema}
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
                <Typography sx={labelStyle}>Новый поход</Typography>
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
                <FormControl sx={{ width: '80%' }}>
                  <InputLabel id="category-select-label">Категория</InputLabel>
                  <Select
                    required
                    labelId="category-select-label"
                    value={values.category}
                    label="Категория"
                    onChange={handleChange}
                    name="category"
                  >
                    <MenuItem value={'плановый'}>плановый</MenuItem>
                    <MenuItem value={'неплановый'}>неплановый</MenuItem>
                  </Select>
                </FormControl>
                <FormControl sx={{ width: '80%', margin: '0.5em' }}>
                  <InputLabel id="route-select-label">Маршрут</InputLabel>
                  <Select
                    labelId="route-select-label"
                    value={values.routeId}
                    label="Маршрут"
                    onChange={handleChange}
                    name="routeId"
                  >
                    {routes.map((route) => (
                      <MenuItem key={route.id} value={route.id}>
                        {route.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <TextField
                  required
                  label="Количество дней"
                  type="number"
                  value={values.daysCount}
                  name="daysCount"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={!!(touched.daysCount && errors.daysCount)}
                  helperText={touched.daysCount && errors.daysCount}
                  sx={textFieldStyle}
                />
                <TextField
                  required
                  label="Сложность"
                  type="number"
                  value={values.difficulty}
                  name="difficulty"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={!!(touched.difficulty && errors.difficulty)}
                  helperText={touched.difficulty && errors.difficulty}
                  sx={textFieldStyle}
                />
                <TextField
                  required
                  label="Максимальное количество участников"
                  type="number"
                  value={values.maxParticipants}
                  name="maxParticipants"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={!!(touched.maxParticipants && errors.maxParticipants)}
                  helperText={touched.maxParticipants && errors.maxParticipants}
                  sx={textFieldStyle}
                />
                <TextField
                  required
                  label="Тип"
                  type="text"
                  value={values.type}
                  name="type"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={!!(touched.type && errors.type)}
                  helperText={touched.type && errors.type}
                  sx={textFieldStyle}
                />
                <TextField
                  required
                  label="Физическая подготовка"
                  type="text"
                  value={values.physicalLevel}
                  name="physicalLevel"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={!!(touched.physicalLevel && errors.physicalLevel)}
                  helperText={touched.physicalLevel && errors.physicalLevel}
                  sx={textFieldStyle}
                />
                <FormControl sx={{ width: '80%', margin: '0.5em' }}>
                  <InputLabel id="gid-select-label">Гид</InputLabel>
                  <Select
                    labelId="gid-select-label"
                    value={values.gid}
                    label="Гид"
                    onChange={handleChange}
                    name="gid"
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
            initialValues={trips.find((e) => e.id === updateWindow.id)}
            validateOnBlur
            onSubmit={handleUpdate}
            validationSchema={tripSchema}
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
                <Typography sx={labelStyle}>Изменить поход</Typography>
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
                <FormControl sx={{ width: '80%', margin: '0.5em' }}>
                  <InputLabel id="category-select-label">Категория</InputLabel>
                  <Select
                    required
                    labelId="category-select-label"
                    value={values.category}
                    label="Категория"
                    onChange={handleChange}
                    name="category"
                  >
                    <MenuItem value={'плановый'}>плановый</MenuItem>
                    <MenuItem value={'неплановый'}>неплановый</MenuItem>
                  </Select>
                </FormControl>
                <FormControl sx={{ width: '80%', margin: '0.5em' }}>
                  <InputLabel id="route-select-label">Маршрут</InputLabel>
                  <Select
                    labelId="route-select-label"
                    value={values.routeId}
                    label="Маршрут"
                    onChange={handleChange}
                    name="routeId"
                  >
                    {routes.map((route) => (
                      <MenuItem key={route.id} value={route.id}>
                        {route.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <TextField
                  required
                  label="Количество дней"
                  type="number"
                  value={values.daysCount}
                  name="daysCount"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={!!(touched.daysCount && errors.daysCount)}
                  helperText={touched.daysCount && errors.daysCount}
                  sx={textFieldStyle}
                />
                <TextField
                  required
                  label="Сложность"
                  type="number"
                  value={values.difficulty}
                  name="difficulty"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={!!(touched.difficulty && errors.difficulty)}
                  helperText={touched.difficulty && errors.difficulty}
                  sx={textFieldStyle}
                />
                <TextField
                  required
                  label="Максимальное количество участников"
                  type="number"
                  value={values.maxParticipants}
                  name="maxParticipants"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={!!(touched.maxParticipants && errors.maxParticipants)}
                  helperText={touched.maxParticipants && errors.maxParticipants}
                  sx={textFieldStyle}
                />
                <TextField
                  required
                  label="Тип"
                  type="text"
                  value={values.type}
                  name="type"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={!!(touched.type && errors.type)}
                  helperText={touched.type && errors.type}
                  sx={textFieldStyle}
                />
                <TextField
                  required
                  label="Физическая подготовка"
                  type="text"
                  value={values.physicalLevel}
                  name="physicalLevel"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={!!(touched.physicalLevel && errors.physicalLevel)}
                  helperText={touched.physicalLevel && errors.physicalLevel}
                  sx={textFieldStyle}
                />
                <FormControl sx={{ width: '80%', margin: '0.5em' }}>
                  <InputLabel id="gid-select-label">Гид</InputLabel>
                  <Select
                    labelId="gid-select-label"
                    value={values.gid}
                    label="Гид"
                    onChange={handleChange}
                    name="gid"
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
