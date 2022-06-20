import { all, call, put, takeLatest } from 'redux-saga/effects';
import {
  createTripError,
  createTripRequest,
  createTripSuccess,
  deleteTripError,
  deleteTripRequest,
  deleteTripSuccess,
  fetchTripsError,
  fetchTripsRequest,
  fetchTripsSuccess,
  updateTripError,
  updateTripRequest,
  updateTripSuccess,
} from './index';
import { createTrip, deleteTrip, fetchTrips, updateTrip } from './services';

export function* fetchTripsSaga(action) {
  try {
    const response = yield call(fetchTrips, action.payload);
    yield put(fetchTripsSuccess(response));
  } catch (e) {
    yield put(fetchTripsError(e));
  }
}

export function* createTripSaga(action) {
  try {
    const response = yield call(createTrip, action.payload);
    yield put(createTripSuccess(response));
  } catch (e) {
    yield put(createTripError(e));
  }
}

export function* updateTripSaga(action) {
  try {
    const response = yield call(updateTrip, action.payload);
    yield put(updateTripSuccess(response));
  } catch (e) {
    yield put(updateTripError(e));
  }
}

export function* deleteTripSaga(action) {
  try {
    const response = yield call(deleteTrip, action.payload);
    yield put(deleteTripSuccess(response));
  } catch (e) {
    yield put(deleteTripError(e));
  }
}

export default function* competitionSagaWatcher() {
  yield all([
    takeLatest(fetchTripsRequest, fetchTripsSaga),
    takeLatest(createTripRequest, createTripSaga),
    takeLatest(updateTripRequest, updateTripSaga),
    takeLatest(deleteTripRequest, deleteTripSaga),
  ]);
}
