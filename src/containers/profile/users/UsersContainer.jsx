import { UsersComponent } from '../../../components';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  createUserRequest,
  deleteUserRequest,
  fetchUsersMoreThanOneTripRequest,
  updateUserRequest,
} from '../../../ducks/profile/users';
import { selectUsersSelect } from '../../../ducks/profile/users/selectors';

export function UsersContainer({ users }) {
  const dispatch = useDispatch();
  const usersSelect = useSelector(selectUsersSelect);

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

  const submitCreate = (userInfo) => {
    dispatch(createUserRequest(userInfo));
  };

  const submitUpdate = (userInfo) => {
    dispatch(updateUserRequest(userInfo));
  };

  const submitDelete = (id) => {
    dispatch(deleteUserRequest({ id }));
  };

  const submitFetchUsersMoreThanOneTrip = () => {
    dispatch(fetchUsersMoreThanOneTripRequest());
  };

  return (
    <UsersComponent
      users={users}
      usersSelect={usersSelect}
      submitCreate={submitCreate}
      submitUpdate={submitUpdate}
      submitDelete={submitDelete}
      submitFetchUsersMoreThanOneTrip={submitFetchUsersMoreThanOneTrip}
    />
  );
}
