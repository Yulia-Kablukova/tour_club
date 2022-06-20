import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Toolbar,
  Typography,
} from '@mui/material';
import {
  listItemIconStyle,
  muiDrawerPaperStyle,
  paperStyle,
  settingsStyle,
} from './Profile.styled';
import React from 'react';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import LandscapeIcon from '@mui/icons-material/Landscape';
import SportsScoreIcon from '@mui/icons-material/SportsScore';
import SportsHandballIcon from '@mui/icons-material/SportsHandball';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import {
  CompetitionsContainer,
  GroupsContainer,
  OverviewContainer,
  RoutesPointsContainer,
  TripsContainer,
  UsersContainer,
} from '../../containers';
import { ROLES } from '../../consts/roles';
import {
  ButtonGroupStyle,
  homeButtonStyle,
  logoutButtonStyle,
} from '../errorCheck/ErrorCheck.styled';

export const ProfileComponent = ({
  userInfo,
  users,
  submitLogout,
  submitGoHome,
}) => {
  const [value, setValue] = React.useState(0);

  const handleListItemClick = (newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <ButtonGroup sx={ButtonGroupStyle}>
        <Button variant="contained" sx={homeButtonStyle} onClick={submitGoHome}>
          На главную
        </Button>
        <Button
          variant="contained"
          sx={logoutButtonStyle}
          onClick={submitLogout}
        >
          Выйти
        </Button>
      </ButtonGroup>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Paper style={muiDrawerPaperStyle}>
            <Toolbar>
              <Typography style={settingsStyle}>Настройки</Typography>
            </Toolbar>

            <Container>
              <List>
                <ListItem disablePadding>
                  <ListItemButton
                    selected={value === 0}
                    onClick={() => handleListItemClick(0)}
                  >
                    <ListItemIcon style={listItemIconStyle}>
                      <AccountCircleRoundedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Основное" />
                  </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                  <ListItemButton
                    selected={value === 1}
                    onClick={() => handleListItemClick(1)}
                  >
                    <ListItemIcon style={listItemIconStyle}>
                      <LandscapeIcon />
                    </ListItemIcon>
                    <ListItemText primary="Походы" />
                  </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                  <ListItemButton
                    selected={value === 2}
                    onClick={() => handleListItemClick(2)}
                  >
                    <ListItemIcon style={listItemIconStyle}>
                      <SportsHandballIcon />
                    </ListItemIcon>
                    <ListItemText primary="Группы" />
                  </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                  <ListItemButton
                    selected={value === 3}
                    onClick={() => handleListItemClick(3)}
                  >
                    <ListItemIcon style={listItemIconStyle}>
                      <SportsScoreIcon />
                    </ListItemIcon>
                    <ListItemText primary="Турниры" />
                  </ListItemButton>
                </ListItem>

                {userInfo.role === ROLES.ADMIN && (
                  <>
                    <ListItem disablePadding>
                      <ListItemButton
                        selected={value === 4}
                        onClick={() => handleListItemClick(4)}
                      >
                        <ListItemIcon style={listItemIconStyle}>
                          <AssignmentIndIcon />
                        </ListItemIcon>
                        <ListItemText primary="Пользователи" />
                      </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                      <ListItemButton
                        selected={value === 5}
                        onClick={() => handleListItemClick(5)}
                      >
                        <ListItemIcon style={listItemIconStyle}>
                          <LocationOnIcon />
                        </ListItemIcon>
                        <ListItemText primary="Точки маршрутов" />
                      </ListItemButton>
                    </ListItem>
                  </>
                )}
              </List>
            </Container>
          </Paper>
        </Grid>
        <Grid item xs={9}>
          <Paper style={paperStyle}>
            <ListPanel value={value} index={0}>
              <OverviewContainer userInfo={userInfo} />
            </ListPanel>

            <ListPanel value={value} index={1}>
              <TripsContainer users={users} />
            </ListPanel>

            <ListPanel value={value} index={2}>
              <GroupsContainer users={users} />
            </ListPanel>

            <ListPanel value={value} index={3}>
              <CompetitionsContainer users={users} />
            </ListPanel>

            <ListPanel value={value} index={4}>
              <UsersContainer users={users} />
            </ListPanel>

            <ListPanel value={value} index={5}>
              <RoutesPointsContainer users={users} />
            </ListPanel>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

function ListPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div hidden={value !== index} id={`simple-listpanel-${index}`} {...other}>
      {value === index && <Box>{children}</Box>}
    </div>
  );
}
