import { createSlice } from '@reduxjs/toolkit';
import { ERRORS, STATUS } from '../../../consts';

const tripsSlice = createSlice({
  name: '@trips',
  initialState: {
    error: null,
    trips: [],
    status: STATUS.NOT_REQUESTED,
  },
  reducers: {
    fetchTripsRequest(state) {
      state.error = null;
      state.status = STATUS.LOADING;
    },
    fetchTripsSuccess(state, response) {
      state.error = null;
      state.status = STATUS.SUCCESS;
      state.trips = response.payload.data;
    },
    fetchTripsError(state, response) {
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
    createTripRequest(state) {
      state.error = null;
      state.status = STATUS.LOADING;
    },
    createTripSuccess(state, response) {
      state.error = null;
      state.status = STATUS.SUCCESS;
      state.trips = response.payload.data;
    },
    createTripError(state, response) {
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
    updateTripRequest(state) {
      state.error = null;
      state.status = STATUS.LOADING;
    },
    updateTripSuccess(state, response) {
      state.error = null;
      state.status = STATUS.SUCCESS;
      state.trips = response.payload.data;
    },
    updateTripError(state, response) {
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
    deleteTripRequest(state) {
      state.error = null;
      state.status = STATUS.LOADING;
    },
    deleteTripSuccess(state, response) {
      state.error = null;
      state.status = STATUS.SUCCESS;
      state.trips = response.payload.data;
    },
    deleteTripError(state, response) {
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

export default tripsSlice.reducer;
export const {
  fetchTripsSuccess,
  fetchTripsError,
  fetchTripsRequest,
  createTripSuccess,
  createTripRequest,
  createTripError,
  updateTripSuccess,
  updateTripRequest,
  updateTripError,
  deleteTripSuccess,
  deleteTripRequest,
  deleteTripError,
} = tripsSlice.actions;
