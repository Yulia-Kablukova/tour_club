import { createSlice } from '@reduxjs/toolkit';
import { ERRORS, STATUS } from '../../../consts';

const usersSlice = createSlice({
  name: '@users',
  initialState: {
    error: null,
    users: [],
    usersSelect: [],
    status: STATUS.NOT_REQUESTED,
  },
  reducers: {
    fetchUsersRequest(state) {
      state.error = null;
      state.status = STATUS.LOADING;
    },
    fetchUsersSuccess(state, response) {
      state.error = null;
      state.status = STATUS.SUCCESS;
      state.users = response.payload.data;
    },
    fetchUsersError(state, response) {
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
    createUserRequest(state) {
      state.error = null;
      state.status = STATUS.LOADING;
    },
    createUserSuccess(state, response) {
      state.error = null;
      state.status = STATUS.SUCCESS;
      state.users = response.payload.data;
    },
    createUserError(state, response) {
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
    updateUserRequest(state) {
      state.error = null;
      state.status = STATUS.LOADING;
    },
    updateUserSuccess(state, response) {
      state.error = null;
      state.status = STATUS.SUCCESS;
      state.users = response.payload.data;
    },
    updateUserError(state, response) {
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
    deleteUserRequest(state) {
      state.error = null;
      state.status = STATUS.LOADING;
    },
    deleteUserSuccess(state, response) {
      state.error = null;
      state.status = STATUS.SUCCESS;
      state.users = response.payload.data;
    },
    deleteUserError(state, response) {
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
    fetchUsersMoreThanOneTripRequest(state) {
      state.error = null;
      state.status = STATUS.LOADING;
    },
    fetchUsersMoreThanOneTripSuccess(state, response) {
      state.error = null;
      state.status = STATUS.SUCCESS;
      state.usersSelect = response.payload.data;
    },
    fetchUsersMoreThanOneTripError(state, response) {
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
  },
});

export default usersSlice.reducer;
export const {
  fetchUsersSuccess,
  fetchUsersError,
  fetchUsersRequest,
  createUserSuccess,
  createUserRequest,
  createUserError,
  updateUserSuccess,
  updateUserRequest,
  updateUserError,
  deleteUserSuccess,
  deleteUserRequest,
  deleteUserError,
  fetchUsersMoreThanOneTripSuccess,
  fetchUsersMoreThanOneTripError,
  fetchUsersMoreThanOneTripRequest,
} = usersSlice.actions;
