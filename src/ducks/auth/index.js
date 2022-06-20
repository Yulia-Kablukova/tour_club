import { createSlice } from '@reduxjs/toolkit';
import { STATUS, ERRORS } from '../../consts';
import { saveState } from '../../tools/helpers';

const authenticationSlice = createSlice({
  name: '@authentication',
  initialState: {
    error: null,
    userInfo: {},
    trips: [],
    status: STATUS.NOT_REQUESTED,
  },
  reducers: {
    loginRequest(state) {
      state.error = null;
      state.status = STATUS.LOADING;
    },
    loginSuccess(state, response) {
      state.error = null;
      state.status = STATUS.SUCCESS;
      saveState(response.payload.data.token);
    },
    loginError(state, response) {
      if (response.payload.response.data !== undefined) {
        state.error = response.payload.response.data.message;
      } else {
        state.error = ERRORS.BAD_REQUEST;
      }
      state.status = STATUS.ERROR;
    },
    logoutRequest(state) {
      state.status = STATUS.LOADING;
      state.error = null;
    },
    signUpRequest(state) {
      state.error = null;
      state.status = STATUS.LOADING;
    },
    signUpSuccess(state, response) {
      state.error = null;
      state.status = STATUS.SUCCESS;
      saveState(response.payload.data.token);
    },
    signUpError(state, response) {
      if (response.payload.response.data !== undefined) {
        state.error = response.payload.response.data.message;
      } else {
        state.error = ERRORS.BAD_REQUEST;
      }
      state.status = STATUS.ERROR;
    },
    fetchUserInfoByTokenRequest(state) {
      state.error = null;
      state.status = STATUS.LOADING;
    },
    fetchUserInfoByTokenSuccess(state, response) {
      state.error = null;
      state.userInfo = response.payload.data;
      state.status = STATUS.SUCCESS;
    },
    fetchUserInfoByTokenError(state, response) {
      if (
        response.payload.response !== undefined &&
        response.payload.response.data !== undefined
      ) {
        state.error = response.payload.response.data.message;
      } else {
        state.error = ERRORS.BAD_REQUEST;
      }
      state.status = STATUS.ERROR;
    },
    logout(state) {
      state.userInfo = {};
      state.status = STATUS.NOT_REQUESTED;
      state.error = null;
      saveState('');
    },
  },
});

export default authenticationSlice.reducer;
export const {
  loginRequest,
  loginSuccess,
  loginError,
  logoutRequest,
  signUpRequest,
  signUpSuccess,
  signUpError,
  fetchUserInfoByTokenRequest,
  fetchUserInfoByTokenSuccess,
  fetchUserInfoByTokenError,
  logout,
} = authenticationSlice.actions;
