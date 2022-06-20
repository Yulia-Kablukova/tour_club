import { all, call, put, takeLatest } from 'redux-saga/effects';
import {
  createCompetitionError,
  createCompetitionRequest,
  createCompetitionSuccess,
  deleteCompetitionError,
  deleteCompetitionRequest,
  deleteCompetitionSuccess,
  fetchCompetitionsError,
  fetchCompetitionsRequest,
  fetchCompetitionsSuccess,
  updateCompetitionError,
  updateCompetitionRequest,
  updateCompetitionSuccess,
} from './index';
import {
  createCompetition,
  deleteCompetition,
  fetchCompetitions,
  updateCompetition,
} from './services';

export function* fetchCompetitionsSaga(action) {
  try {
    const response = yield call(fetchCompetitions, action.payload);
    yield put(fetchCompetitionsSuccess(response));
  } catch (e) {
    yield put(fetchCompetitionsError(e));
  }
}

export function* createCompetitionSaga(action) {
  try {
    const response = yield call(createCompetition, action.payload);
    yield put(createCompetitionSuccess(response));
  } catch (e) {
    yield put(createCompetitionError(e));
  }
}

export function* updateCompetitionSaga(action) {
  try {
    const response = yield call(updateCompetition, action.payload);
    yield put(updateCompetitionSuccess(response));
  } catch (e) {
    yield put(updateCompetitionError(e));
  }
}

export function* deleteCompetitionSaga(action) {
  try {
    const response = yield call(deleteCompetition, action.payload);
    yield put(deleteCompetitionSuccess(response));
  } catch (e) {
    yield put(deleteCompetitionError(e));
  }
}

export default function* competitionSagaWatcher() {
  yield all([
    takeLatest(fetchCompetitionsRequest, fetchCompetitionsSaga),
    takeLatest(createCompetitionRequest, createCompetitionSaga),
    takeLatest(updateCompetitionRequest, updateCompetitionSaga),
    takeLatest(deleteCompetitionRequest, deleteCompetitionSaga),
  ]);
}
