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
import {
  defaultRoutesPointsInfo,
  defaultTripInfo,
  STATUS,
} from '../../../consts';
import {
  routesPointsSchema,
  tripSchema,
} from '../../../tools/validationSchemas';
import { DataGrid } from '@mui/x-data-grid';
import { useSelector } from 'react-redux';
import { selectRoutesPointsStatus } from '../../../ducks/profile/routesPoints/selectors';

const columns = [
  { field: 'id', headerName: 'ID', width: 40 },
  { field: 'name', headerName: 'Название', width: 200 },
];

export const RoutesPointsComponent = ({
  routesPoints,
  submitCreate,
  submitUpdate,
  submitDelete,
}) => {
  const [createWindow, setCreateWindow] = React.useState(false);
  const [updateWindow, setUpdateWindow] = React.useState({
    isOpened: false,
    id: 0,
  });
  const status = useSelector(selectRoutesPointsStatus);

  const handleCreateWindowOpenClose = () => {
    setCreateWindow((prevState) => !prevState);
  };

  const handleUpdateWindowOpenClose = (id = 0) => {
    setUpdateWindow((prevState) => ({
      isOpened: !prevState.isOpened,
      id: id,
    }));
  };

  const handleCreate = (routesPointsInfo) => {
    submitCreate(routesPointsInfo);
    handleCreateWindowOpenClose();
  };

  const handleUpdate = (routesPointsInfo) => {
    submitUpdate(routesPointsInfo);
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
          rows={routesPoints}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          onRowClick={(row) => handleUpdateWindowOpenClose(row.id)}
        />
      </Paper>

      <Modal open={createWindow} onClose={handleCreateWindowOpenClose}>
        <Paper elevation={12} sx={createPaperStyle}>
          <Formik
            initialValues={defaultRoutesPointsInfo}
            validateOnBlur
            onSubmit={handleCreate}
            validationSchema={routesPointsSchema}
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
                <Typography sx={labelStyle}>Новая точка</Typography>
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
            initialValues={routesPoints.find((e) => e.id === updateWindow.id)}
            validateOnBlur
            onSubmit={handleUpdate}
            validationSchema={routesPointsSchema}
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
                <Typography sx={labelStyle}>Изменить точку</Typography>
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
