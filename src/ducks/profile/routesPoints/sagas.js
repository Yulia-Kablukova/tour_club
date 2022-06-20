import { all, call, put, takeLatest } from 'redux-saga/effects';
import {
  createRoutesPointError,
  createRoutesPointRequest,
  createRoutesPointSuccess,
  deleteRoutesPointError,
  deleteRoutesPointRequest,
  deleteRoutesPointSuccess,
  fetchRoutesError,
  fetchRoutesPointsError,
  fetchRoutesPointsRequest,
  fetchRoutesPointsSuccess,
  fetchRoutesRequest,
  fetchRoutesSuccess,
  updateRoutesPointError,
  updateRoutesPointRequest,
  updateRoutesPointSuccess,
} from './index';
import {
  createRoutesPoint,
  deleteRoutesPoint,
  fetchRoutes,
  fetchRoutesPoints,
  updateRoutesPoint,
} from './services';

export function* fetchRoutesPointsSaga(action) {
  try {
    const response = yield call(fetchRoutesPoints, action.payload);
    yield put(fetchRoutesPointsSuccess(response));
  } catch (e) {
    yield put(fetchRoutesPointsError(e));
  }
}

export function* createRoutesPointSaga(action) {
  try {
    const response = yield call(createRoutesPoint, action.payload);
    yield put(createRoutesPointSuccess(response));
  } catch (e) {
    yield put(createRoutesPointError(e));
  }
}

export function* updateRoutesPointSaga(action) {
  try {
    const response = yield call(updateRoutesPoint, action.payload);
    yield put(updateRoutesPointSuccess(response));
  } catch (e) {
    yield put(updateRoutesPointError(e));
  }
}

export function* deleteRoutesPointSaga(action) {
  try {
    const response = yield call(deleteRoutesPoint, action.payload);
    yield put(deleteRoutesPointSuccess(response));
  } catch (e) {
    yield put(deleteRoutesPointError(e));
  }
}

export function* fetchRoutesSaga(action) {
  try {
    const response = yield call(fetchRoutes, action.payload);
    yield put(fetchRoutesSuccess(response));
  } catch (e) {
    yield put(fetchRoutesError(e));
  }
}

export default function* competitionSagaWatcher() {
  yield all([
    takeLatest(fetchRoutesPointsRequest, fetchRoutesPointsSaga),
    takeLatest(createRoutesPointRequest, createRoutesPointSaga),
    takeLatest(updateRoutesPointRequest, updateRoutesPointSaga),
    takeLatest(deleteRoutesPointRequest, deleteRoutesPointSaga),
    takeLatest(fetchRoutesRequest, fetchRoutesSaga),
  ]);
}
