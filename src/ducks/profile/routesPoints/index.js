import { createSlice } from '@reduxjs/toolkit';
import { ERRORS, STATUS } from '../../../consts';

const routesPointsSlice = createSlice({
  name: '@routesPoints',
  initialState: {
    error: null,
    routesPoints: [],
    routes: [],
    status: STATUS.NOT_REQUESTED,
  },
  reducers: {
    fetchRoutesPointsRequest(state) {
      state.error = null;
      state.status = STATUS.LOADING;
    },
    fetchRoutesPointsSuccess(state, response) {
      state.error = null;
      state.status = STATUS.SUCCESS;
      state.routesPoints = response.payload.data;
    },
    fetchRoutesPointsError(state, response) {
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
    createRoutesPointRequest(state) {
      state.error = null;
      state.status = STATUS.LOADING;
    },
    createRoutesPointSuccess(state, response) {
      state.error = null;
      state.status = STATUS.SUCCESS;
      state.routesPoints = response.payload.data;
    },
    createRoutesPointError(state, response) {
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
    updateRoutesPointRequest(state) {
      state.error = null;
      state.status = STATUS.LOADING;
    },
    updateRoutesPointSuccess(state, response) {
      state.error = null;
      state.status = STATUS.SUCCESS;
      state.routesPoints = response.payload.data;
    },
    updateRoutesPointError(state, response) {
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
    deleteRoutesPointRequest(state) {
      state.error = null;
      state.status = STATUS.LOADING;
    },
    deleteRoutesPointSuccess(state, response) {
      state.error = null;
      state.status = STATUS.SUCCESS;
      state.routesPoints = response.payload.data;
    },
    deleteRoutesPointError(state, response) {
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
    fetchRoutesRequest(state) {
      state.error = null;
      state.status = STATUS.LOADING;
    },
    fetchRoutesSuccess(state, response) {
      state.error = null;
      state.status = STATUS.SUCCESS;
      state.routes = response.payload.data;
    },
    fetchRoutesError(state, response) {
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

export default routesPointsSlice.reducer;
export const {
  fetchRoutesPointsSuccess,
  fetchRoutesPointsRequest,
  fetchRoutesPointsError,
  createRoutesPointSuccess,
  createRoutesPointError,
  createRoutesPointRequest,
  updateRoutesPointSuccess,
  updateRoutesPointError,
  updateRoutesPointRequest,
  deleteRoutesPointSuccess,
  deleteRoutesPointError,
  deleteRoutesPointRequest,
  fetchRoutesSuccess,
  fetchRoutesError,
  fetchRoutesRequest,
} = routesPointsSlice.actions;
