import { createSlice } from '@reduxjs/toolkit';
import { ERRORS, STATUS } from '../../../consts';

const groupsSlice = createSlice({
  name: '@groups',
  initialState: {
    error: null,
    groups: [],
    coaches: [],
    sports: [],
    sportsSelect: [],
    status: STATUS.NOT_REQUESTED,
  },
  reducers: {
    fetchGroupsRequest(state) {
      state.error = null;
      state.status = STATUS.LOADING;
    },
    fetchGroupsSuccess(state, response) {
      state.error = null;
      state.status = STATUS.SUCCESS;
      state.groups = response.payload.data;
    },
    fetchGroupsError(state, response) {
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
    createGroupRequest(state) {
      state.error = null;
      state.status = STATUS.LOADING;
    },
    createGroupSuccess(state, response) {
      state.error = null;
      state.status = STATUS.SUCCESS;
      state.groups = response.payload.data;
    },
    createGroupError(state, response) {
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
    updateGroupRequest(state) {
      state.error = null;
      state.status = STATUS.LOADING;
    },
    updateGroupSuccess(state, response) {
      state.error = null;
      state.status = STATUS.SUCCESS;
      state.groups = response.payload.data;
    },
    updateGroupError(state, response) {
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
    deleteGroupRequest(state) {
      state.error = null;
      state.status = STATUS.LOADING;
    },
    deleteGroupSuccess(state, response) {
      state.error = null;
      state.status = STATUS.SUCCESS;
      state.groups = response.payload.data;
    },
    deleteGroupError(state, response) {
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
    fetchCoachesRequest(state) {
      state.error = null;
      state.status = STATUS.LOADING;
    },
    fetchCoachesSuccess(state, response) {
      state.error = null;
      state.status = STATUS.SUCCESS;
      state.coaches = response.payload.data;
    },
    fetchCoachesError(state, response) {
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
    fetchSportsRequest(state) {
      state.error = null;
      state.status = STATUS.LOADING;
    },
    fetchSportsSuccess(state, response) {
      state.error = null;
      state.status = STATUS.SUCCESS;
      state.sports = response.payload.data;
    },
    fetchSportsError(state, response) {
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
    fetchSportsWithoutSectionRequest(state) {
      state.error = null;
      state.status = STATUS.LOADING;
    },
    fetchSportsWithoutSectionSuccess(state, response) {
      state.error = null;
      state.status = STATUS.SUCCESS;
      state.sportsSelect = response.payload.data;
    },
    fetchSportsWithoutSectionError(state, response) {
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

export default groupsSlice.reducer;
export const {
  fetchGroupsSuccess,
  fetchGroupsError,
  fetchGroupsRequest,
  createGroupRequest,
  createGroupSuccess,
  createGroupError,
  updateGroupSuccess,
  updateGroupRequest,
  updateGroupError,
  deleteGroupSuccess,
  deleteGroupRequest,
  deleteGroupError,
  fetchCoachesError,
  fetchCoachesRequest,
  fetchCoachesSuccess,
  fetchSportsSuccess,
  fetchSportsError,
  fetchSportsRequest,
  fetchSportsWithoutSectionSuccess,
  fetchSportsWithoutSectionError,
  fetchSportsWithoutSectionRequest,
} = groupsSlice.actions;
