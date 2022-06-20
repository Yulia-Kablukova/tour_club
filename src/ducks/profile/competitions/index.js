import { createSlice } from '@reduxjs/toolkit';
import { ERRORS, STATUS } from '../../../consts';

const competitionsSlice = createSlice({
  name: '@competitions',
  initialState: {
    error: null,
    competitions: [],
    status: STATUS.NOT_REQUESTED,
  },
  reducers: {
    fetchCompetitionsRequest(state) {
      state.error = null;
      state.status = STATUS.LOADING;
    },
    fetchCompetitionsSuccess(state, response) {
      state.error = null;
      state.status = STATUS.SUCCESS;
      state.competitions = response.payload.data;
    },
    fetchCompetitionsError(state, response) {
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
    createCompetitionRequest(state) {
      state.error = null;
      state.status = STATUS.LOADING;
    },
    createCompetitionSuccess(state, response) {
      state.error = null;
      state.status = STATUS.SUCCESS;
      state.competitions = response.payload.data;
    },
    createCompetitionError(state, response) {
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
    updateCompetitionRequest(state) {
      state.error = null;
      state.status = STATUS.LOADING;
    },
    updateCompetitionSuccess(state, response) {
      state.error = null;
      state.status = STATUS.SUCCESS;
      state.competitions = response.payload.data;
    },
    updateCompetitionError(state, response) {
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
    deleteCompetitionRequest(state) {
      state.error = null;
      state.status = STATUS.LOADING;
    },
    deleteCompetitionSuccess(state, response) {
      state.error = null;
      state.status = STATUS.SUCCESS;
      state.competitions = response.payload.data;
    },
    deleteCompetitionError(state, response) {
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

export default competitionsSlice.reducer;
export const {
  fetchCompetitionsSuccess,
  fetchCompetitionsError,
  fetchCompetitionsRequest,
  updateCompetitionSuccess,
  updateCompetitionError,
  updateCompetitionRequest,
  createCompetitionSuccess,
  createCompetitionError,
  createCompetitionRequest,
  deleteCompetitionSuccess,
  deleteCompetitionError,
  deleteCompetitionRequest,
} = competitionsSlice.actions;
