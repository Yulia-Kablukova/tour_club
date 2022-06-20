import axios from 'axios';
import { URL } from '../consts';

export const loginRequest = (login, password) => {
  return axios.post(URL.LOGIN, { login, password });
};

export const signUpRequest = (
  login,
  password,
  name,
  surname,
  patronymic,
  birthday,
  phone,
  email,
  gender
) => {
  return axios.post(URL.SIGN_UP, {
    login,
    password,
    name,
    surname,
    patronymic,
    birthday,
    phone,
    email,
    gender,
  });
};

export const fetchUserInfoByTokenRequest = () => {
  return axios.post(
    URL.FETCH_USER_INFO_BY_TOKEN,
    {},
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `"${localStorage.getItem('authToken')}"`,
      },
    }
  );
};

export const fetchTripsRequest = () => {
  return axios.post(
    URL.FETCH_TRIPS,
    {},
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `"${localStorage.getItem('authToken')}"`,
      },
    }
  );
};

export const createTripRequest = (
  name,
  date,
  category,
  routeId,
  daysCount,
  difficulty,
  maxParticipants,
  type,
  physicalLevel,
  gid
) => {
  return axios.post(
    URL.CREATE_TRIP,
    {
      name,
      date,
      category,
      routeId,
      daysCount,
      difficulty,
      maxParticipants,
      type,
      physicalLevel,
      gid,
    },
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `"${localStorage.getItem('authToken')}"`,
      },
    }
  );
};

export const updateTripRequest = (
  id,
  name,
  date,
  category,
  routeId,
  daysCount,
  difficulty,
  maxParticipants,
  type,
  physicalLevel,
  gid
) => {
  return axios.post(
    URL.UPDATE_TRIP,
    {
      id,
      name,
      date,
      category,
      routeId,
      daysCount,
      difficulty,
      maxParticipants,
      type,
      physicalLevel,
      gid,
    },
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `"${localStorage.getItem('authToken')}"`,
      },
    }
  );
};

export const deleteTripRequest = (id) => {
  return axios.post(
    URL.DELETE_TRIP,
    { id },
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `"${localStorage.getItem('authToken')}"`,
      },
    }
  );
};

export const fetchUsersRequest = () => {
  return axios.post(
    URL.FETCH_USERS,
    {},
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `"${localStorage.getItem('authToken')}"`,
      },
    }
  );
};

export const createUserRequest = (
  login,
  name,
  surname,
  patronymic,
  birthday,
  phone,
  email,
  gender,
  role
) => {
  return axios.post(
    URL.CREATE_USER,
    {
      login,
      name,
      surname,
      patronymic,
      birthday,
      phone,
      email,
      gender,
      role,
    },
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `"${localStorage.getItem('authToken')}"`,
      },
    }
  );
};

export const updateUserRequest = (
  id,
  login,
  name,
  surname,
  patronymic,
  birthday,
  phone,
  email,
  gender,
  role
) => {
  return axios.post(
    URL.UPDATE_USER,
    {
      id,
      login,
      name,
      surname,
      patronymic,
      birthday,
      phone,
      email,
      gender,
      role,
    },
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `"${localStorage.getItem('authToken')}"`,
      },
    }
  );
};

export const deleteUserRequest = (id) => {
  return axios.post(
    URL.DELETE_USER,
    { id },
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `"${localStorage.getItem('authToken')}"`,
      },
    }
  );
};

export const fetchGroupsRequest = () => {
  return axios.post(
    URL.FETCH_GROUPS,
    {},
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `"${localStorage.getItem('authToken')}"`,
      },
    }
  );
};

export const createGroupRequest = (number, name, sport, coach, timetable) => {
  return axios.post(
    URL.CREATE_GROUP,
    {
      number,
      name,
      sport,
      coach,
      timetable,
    },
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `"${localStorage.getItem('authToken')}"`,
      },
    }
  );
};

export const updateGroupRequest = (
  id,
  number,
  name,
  sport,
  coach,
  timetable
) => {
  return axios.post(
    URL.UPDATE_GROUP,
    { id, number, name, sport, coach, timetable },
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `"${localStorage.getItem('authToken')}"`,
      },
    }
  );
};

export const deleteGroupRequest = (id) => {
  return axios.post(
    URL.DELETE_GROUP,
    { id },
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `"${localStorage.getItem('authToken')}"`,
      },
    }
  );
};

export const fetchCompetitionsRequest = () => {
  return axios.post(
    URL.FETCH_COMPETITIONS,
    {},
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `"${localStorage.getItem('authToken')}"`,
      },
    }
  );
};

export const createCompetitionRequest = (
  name,
  sport,
  date,
  place,
  payment,
  supervisor
) => {
  return axios.post(
    URL.CREATE_COMPETITION,
    {
      name,
      sport,
      date,
      place,
      payment,
      supervisor,
    },
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `"${localStorage.getItem('authToken')}"`,
      },
    }
  );
};

export const updateCompetitionRequest = (
  id,
  name,
  sport,
  date,
  place,
  payment,
  supervisor
) => {
  return axios.post(
    URL.UPDATE_COMPETITION,
    { id, name, sport, date, place, payment, supervisor },
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `"${localStorage.getItem('authToken')}"`,
      },
    }
  );
};

export const deleteCompetitionRequest = (id) => {
  return axios.post(
    URL.DELETE_COMPETITION,
    { id },
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `"${localStorage.getItem('authToken')}"`,
      },
    }
  );
};

export const fetchRoutesPointsRequest = () => {
  return axios.post(
    URL.FETCH_ROUTE_POINTS,
    {},
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `"${localStorage.getItem('authToken')}"`,
      },
    }
  );
};

export const createRoutesPointRequest = (name) => {
  return axios.post(
    URL.CREATE_ROUTE_POINT,
    { name },
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `"${localStorage.getItem('authToken')}"`,
      },
    }
  );
};

export const updateRoutesPointRequest = (id, name) => {
  return axios.post(
    URL.UPDATE_ROUTE_POINT,
    { id, name },
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `"${localStorage.getItem('authToken')}"`,
      },
    }
  );
};

export const deleteRoutesPointRequest = (id) => {
  return axios.post(
    URL.DELETE_ROUTE_POINT,
    { id },
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `"${localStorage.getItem('authToken')}"`,
      },
    }
  );
};

export const fetchRoutesRequest = () => {
  return axios.post(
    URL.FETCH_ROUTES,
    {},
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `"${localStorage.getItem('authToken')}"`,
      },
    }
  );
};

export const fetchCoachesRequest = () => {
  return axios.post(
    URL.FETCH_COACHES,
    {},
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `"${localStorage.getItem('authToken')}"`,
      },
    }
  );
};

export const fetchSportsRequest = () => {
  return axios.post(
    URL.FETCH_SPORTS,
    {},
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `"${localStorage.getItem('authToken')}"`,
      },
    }
  );
};

export const fetchUsersMoreThanOneTripRequest = () => {
  return axios.post(
    URL.FETCH_USERS_MORE_THAN_ONE_TRIP,
    {},
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `"${localStorage.getItem('authToken')}"`,
      },
    }
  );
};

export const fetchSportsWithoutSectionRequest = () => {
  return axios.post(
    URL.FETCH_SPORT_WITHOUT_SECTION,
    {},
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `"${localStorage.getItem('authToken')}"`,
      },
    }
  );
};
