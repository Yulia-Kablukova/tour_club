import { TripsComponent } from '../../../components';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import { selectTrips } from '../../../ducks/profile/trips/selectors';
import {
  createTripRequest,
  deleteTripRequest,
  fetchTripsRequest,
  updateTripRequest,
} from '../../../ducks/profile/trips';
import { selectRoutes } from '../../../ducks/profile/routesPoints/selectors';
import { fetchRoutesRequest } from '../../../ducks/profile/routesPoints';

export function TripsContainer({ users }) {
  const dispatch = useDispatch();
  const trips = useSelector(selectTrips);
  const routes = useSelector(selectRoutes);

  const routesPatch = [
    { id: 1, name: 'Алтайские каникулы' },
    { id: 2, name: 'К подножию Белухи' },
    { id: 3, name: 'Восхождение на Эльбрус' },
  ];
  const tripsPatch = [
    {
      id: 1,
      name: 'Горный поход',
      date: '2022-08-30',
      category: 'плановый',
      routeId: 1,
      daysCount: 12,
      difficulty: 6,
      maxParticipants: 10,
      type: 'пеший',
      physicalLevel: 'хорошая физическая подготовка',
      status: 'Набор группы',
      gid: 1,
    },
    {
      id: 2,
      name: 'Горный поход 2',
      date: '2022-08-30',
      category: 'плановый',
      routeId: 2,
      daysCount: 12,
      difficulty: 6,
      maxParticipants: 10,
      type: 'пеший',
      physicalLevel: 'хорошая физическая подготовка',
      status: 'Набор группы',
      gid: 2,
    },
    {
      id: 3,
      name: 'Горный поход 3',
      date: '2022-08-30',
      category: 'плановый',
      routeId: 3,
      daysCount: 12,
      difficulty: 6,
      maxParticipants: 10,
      type: 'пеший',
      physicalLevel: 'хорошая физическая подготовка',
      status: 'Набор группы',
      gid: 3,
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
    dispatch(fetchTripsRequest());
    dispatch(fetchRoutesRequest());
  }, [dispatch]);

  const submitCreate = (tripInfo) => {
    dispatch(createTripRequest(tripInfo));
  };

  const submitUpdate = (tripInfo) => {
    dispatch(updateTripRequest(tripInfo));
  };

  const submitDelete = (id) => {
    dispatch(deleteTripRequest({ id }));
  };

  return (
    <TripsComponent
      trips={trips}
      routes={routes}
      users={users}
      submitCreate={submitCreate}
      submitUpdate={submitUpdate}
      submitDelete={submitDelete}
    />
  );
}
