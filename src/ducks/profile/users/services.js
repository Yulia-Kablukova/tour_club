import {
  createUserRequest,
  deleteUserRequest,
  fetchUsersMoreThanOneTripRequest,
  fetchUsersRequest,
  updateUserRequest,
} from '../../../tools/requests';

export const fetchUsers = () => {
  return new Promise((resolve, reject) => {
    fetchUsersRequest()
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
};

export const createUser = ({
  login,
  name,
  surname,
  patronymic,
  birthday,
  phone,
  email,
  gender,
  role,
}) => {
  return new Promise((resolve, reject) => {
    createUserRequest(
      login,
      name,
      surname,
      patronymic,
      birthday,
      phone,
      email,
      gender,
      role
    )
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
};

export const updateUser = ({
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
}) => {
  return new Promise((resolve, reject) => {
    updateUserRequest(
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
    )
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
};

export const deleteUser = ({ id }) => {
  return new Promise((resolve, reject) => {
    deleteUserRequest(id)
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
};

export const fetchUsersMoreThanOneTrip = () => {
  return new Promise((resolve, reject) => {
    fetchUsersMoreThanOneTripRequest()
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
};
