import { Container, Grid, Typography } from '@mui/material';
import { profileStyle } from './OverviewStyled';
import { ROLES } from '../../../consts/roles';

export const OverviewComponent = ({ userInfo }) => {
  return (
    <Container>
      <br />
      <Typography style={profileStyle}>Основное</Typography>

      <Grid container spacing={2}>
        <Grid item xs={5} marginLeft={'8%'}>
          <Typography fontFamily="Open Sans">
            Логин: <b>{userInfo.login}</b>
          </Typography>
          <br />

          <Typography fontFamily="Open Sans">
            Имя: <b>{userInfo.name}</b>
          </Typography>
          <br />

          <Typography fontFamily="Open Sans">
            Фамилия: <b>{userInfo.surname}</b>
          </Typography>
          <br />

          <Typography fontFamily="Open Sans">
            Отчество: <b>{userInfo.patronymic}</b>
          </Typography>
          <br />

          <Typography fontFamily="Open Sans">
            Дата рождения: <b>{userInfo.birthday}</b>
          </Typography>
          <br />

          <Typography fontFamily="Open Sans">
            Телефон: <b>{userInfo.phone}</b>
          </Typography>
          <br />

          <Typography fontFamily="Open Sans">
            Электронная почта: <b>{userInfo.email}</b>
          </Typography>
          <br />

          <Typography fontFamily="Open Sans">
            Гендер: <b>{userInfo.gender}</b>
          </Typography>
          <br />

          <Typography fontFamily="Open Sans" sx={{ mb: '3em' }}>
            Роль:{' '}
            <b>
              {userInfo.role === ROLES.ADMIN && 'Администратор'}
              {userInfo.role === ROLES.USER && 'Пользователь'}
              {userInfo.role === ROLES.SUPERVISOR && 'Руководитель'}
            </b>
          </Typography>

          <br />
        </Grid>
      </Grid>
    </Container>
  );
};
