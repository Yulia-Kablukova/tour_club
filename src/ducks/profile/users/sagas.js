import { all, call, put, takeLatest } from 'redux-saga/effects';
import {
  createUserError,
  createUserRequest,
  createUserSuccess,
  deleteUserError,
  deleteUserRequest,
  deleteUserSuccess,
  fetchUsersError,
  fetchUsersMoreThanOneTripError,
  fetchUsersMoreThanOneTripRequest,
  fetchUsersMoreThanOneTripSuccess,
  fetchUsersRequest,
  fetchUsersSuccess,
  updateUserError,
  updateUserRequest,
  updateUserSuccess,
} from './index';
import {
  createUser,
  deleteUser,
  fetchUsers,
  fetchUsersMoreThanOneTrip,
  updateUser,
} from './services';

export function* fetchUsersSaga(action) {
  try {
    const response = yield call(fetchUsers, action.payload);
    yield put(fetchUsersSuccess(response));
  } catch (e) {
    yield put(fetchUsersError(e));
  }
}

export function* createUserSaga(action) {
  try {
    const response = yield call(createUser, action.payload);
    yield put(createUserSuccess(response));
  } catch (e) {
    yield put(createUserError(e));
  }
}

export function* updateUserSaga(action) {
  try {
    const response = yield call(updateUser, action.payload);
    yield put(updateUserSuccess(response));
  } catch (e) {
    yield put(updateUserError(e));
  }
}

export function* deleteUserSaga(action) {
  try {
    const response = yield call(deleteUser, action.payload);
    yield put(deleteUserSuccess(response));
  } catch (e) {
    yield put(deleteUserError(e));
  }
}

export function* fetchUsersMoreThanOneTripSaga(action) {
  try {
    const response = yield call(fetchUsersMoreThanOneTrip, action.payload);
    yield put(fetchUsersMoreThanOneTripSuccess(response));
  } catch (e) {
    yield put(fetchUsersMoreThanOneTripError(e));
  }
}

export default function* competitionSagaWatcher() {
  yield all([
    takeLatest(fetchUsersRequest, fetchUsersSaga),
    takeLatest(createUserRequest, createUserSaga),
    takeLatest(updateUserRequest, updateUserSaga),
    takeLatest(deleteUserRequest, deleteUserSaga),
    takeLatest(fetchUsersMoreThanOneTripRequest, fetchUsersMoreThanOneTripSaga),
  ]);
}
