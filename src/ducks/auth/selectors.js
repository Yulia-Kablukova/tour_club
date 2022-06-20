import { loadState } from '../../tools/helpers';

export const selectUserInfo = (state) => {
  return state.authentication.userInfo;
};

export const selectIsLoggedIn = () => {
  //return true;
  return loadState();
};

export const selectAuthError = (state) => {
  return state.authentication.error;
};
