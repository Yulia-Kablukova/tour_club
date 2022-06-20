import {
  fetchUserInfoByTokenRequest,
  loginRequest,
  signUpRequest,
} from '../../tools/requests';
import { fetchUserInfoByTokenSaga } from './sagas';

export const login = ({ login, password }) => {
  return new Promise((resolve, reject) => {
    loginRequest(login, password)
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
};

export const signUp = ({
  login,
  password,
  name,
  surname,
  patronymic,
  birthday,
  phone,
  email,
  gender,
}) => {
  return new Promise((resolve, reject) => {
    signUpRequest(
      login,
      password,
      name,
      surname,
      patronymic,
      birthday,
      phone,
      email,
      gender
    )
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
};

export const fetchUserInfoByToken = () => {
  return new Promise((resolve, reject) => {
    fetchUserInfoByTokenRequest()
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
};
