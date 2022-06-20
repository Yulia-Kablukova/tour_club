import { CompetitionsComponent } from '../../../components';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import { selectCompetitions } from '../../../ducks/profile/competitions/selectors';
import {
  createCompetitionRequest,
  deleteCompetitionRequest,
  fetchCompetitionsRequest,
  updateCompetitionRequest,
} from '../../../ducks/profile/competitions';
import {
  createTripRequest,
  deleteTripRequest,
  updateTripRequest,
} from '../../../ducks/profile/trips';
import { fetchSportsRequest } from '../../../ducks/profile/groups';
import { selectSports } from '../../../ducks/profile/groups/selectors';

export function CompetitionsContainer({ users }) {
  const dispatch = useDispatch();
  const competitions = useSelector(selectCompetitions);
  const sports = useSelector(selectSports);

  const sportsPatch = [
    { id: 1, name: 'beg' },
    { id: 2, name: 'eto' },
    { id: 3, name: 'dar' },
  ];

  const competitionsPath = [
    {
      id: 1,
      name: 'test',
      sport: 1,
      date: '2022-01-02',
      place: 'бассейн №3',
      payment: 200,
      supervisor: 1,
    },
    {
      id: 2,
      name: 'test',
      sport: 1,
      date: '2022-01-02',
      place: 'бассейн №3',
      payment: 200,
      supervisor: 1,
    },
    {
      id: 3,
      name: 'test',
      sport: 1,
      date: '2022-01-02',
      place: 'бассейн №3',
      payment: 200,
      supervisor: 1,
    },
  ];

  const usersPatch = [
    {
      id: 1,
      login: 'abcd',
      name: 'Олег',
      surname: 'Иванов',
      patronymic: 'Иванович',
      birthday: '1970-01-02',
      phone: '8-800-555-3535',
      email: 'example@gmail.com',
      gender: 'мужской',
      role: 'ADMIN',
    },
    {
      id: 2,
      login: 'abcd',
      name: 'Виталий',
      surname: 'Иванов',
      patronymic: 'Иванович',
      birthday: '1970-01-02',
      phone: '8-800-555-3535',
      email: 'example@gmail.com',
      gender: 'мужской',
      role: 'ADMIN',
    },
    {
      id: 3,
      login: 'abcd',
      name: 'Семен',
      surname: 'Иванов',
      patronymic: 'Иванович',
      birthday: '1970-01-02',
      phone: '8-800-555-3535',
      email: 'example@gmail.com',
      gender: 'мужской',
      role: 'ADMIN',
    },
  ];

  React.useEffect(() => {
    dispatch(fetchCompetitionsRequest());
    dispatch(fetchSportsRequest());
  }, [dispatch]);

  const submitCreate = (competitionsInfo) => {
    dispatch(createCompetitionRequest(competitionsInfo));
  };

  const submitUpdate = (competitionsInfo) => {
    dispatch(updateCompetitionRequest(competitionsInfo));
  };

  const submitDelete = (id) => {
    dispatch(deleteCompetitionRequest({ id }));
  };

  return (
    <CompetitionsComponent
      competitions={competitions}
      sports={sports}
      users={users}
      submitCreate={submitCreate}
      submitUpdate={submitUpdate}
      submitDelete={submitDelete}
    />
  );
}
