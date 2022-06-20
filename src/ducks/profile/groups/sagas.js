import { all, call, put, takeLatest } from 'redux-saga/effects';
import {
  createGroupError,
  createGroupRequest,
  createGroupSuccess,
  deleteGroupError,
  deleteGroupRequest,
  deleteGroupSuccess,
  fetchCoachesError,
  fetchCoachesRequest,
  fetchCoachesSuccess,
  fetchGroupsError,
  fetchGroupsRequest,
  fetchGroupsSuccess,
  fetchSportsError,
  fetchSportsRequest,
  fetchSportsSuccess,
  fetchSportsWithoutSectionError,
  fetchSportsWithoutSectionRequest,
  fetchSportsWithoutSectionSuccess,
  updateGroupError,
  updateGroupRequest,
  updateGroupSuccess,
} from './index';
import {
  createGroup,
  deleteGroup,
  fetchCoaches,
  fetchGroups,
  fetchSports,
  fetchSportsWithoutSection,
  updateGroup,
} from './services';

export function* fetchGroupsSaga(action) {
  try {
    const response = yield call(fetchGroups, action.payload);
    yield put(fetchGroupsSuccess(response));
  } catch (e) {
    yield put(fetchGroupsError(e));
  }
}

export function* createGroupSaga(action) {
  try {
    const response = yield call(createGroup, action.payload);
    yield put(createGroupSuccess(response));
  } catch (e) {
    yield put(createGroupError(e));
  }
}

export function* updateGroupSaga(action) {
  try {
    const response = yield call(updateGroup, action.payload);
    yield put(updateGroupSuccess(response));
  } catch (e) {
    yield put(updateGroupError(e));
  }
}

export function* deleteGroupSaga(action) {
  try {
    const response = yield call(deleteGroup, action.payload);
    yield put(deleteGroupSuccess(response));
  } catch (e) {
    yield put(deleteGroupError(e));
  }
}

export function* fetchCoachesSaga(action) {
  try {
    const response = yield call(fetchCoaches, action.payload);
    yield put(fetchCoachesSuccess(response));
  } catch (e) {
    yield put(fetchCoachesError(e));
  }
}

export function* fetchSportsSaga(action) {
  try {
    const response = yield call(fetchSports, action.payload);
    yield put(fetchSportsSuccess(response));
  } catch (e) {
    yield put(fetchSportsError(e));
  }
}

export function* fetchSportsWithoutSectionSaga(action) {
  try {
    const response = yield call(fetchSportsWithoutSection, action.payload);
    yield put(fetchSportsWithoutSectionSuccess(response));
  } catch (e) {
    yield put(fetchSportsWithoutSectionError(e));
  }
}

export default function* competitionSagaWatcher() {
  yield all([
    takeLatest(fetchGroupsRequest, fetchGroupsSaga),
    takeLatest(createGroupRequest, createGroupSaga),
    takeLatest(updateGroupRequest, updateGroupSaga),
    takeLatest(deleteGroupRequest, deleteGroupSaga),
    takeLatest(fetchCoachesRequest, fetchCoachesSaga),
    takeLatest(fetchSportsRequest, fetchSportsSaga),
    takeLatest(fetchSportsWithoutSectionRequest, fetchSportsWithoutSectionSaga),
  ]);
}
