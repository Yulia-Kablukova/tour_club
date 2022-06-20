import {
  fetchUserInfoByTokenError,
  fetchUserInfoByTokenRequest,
  fetchUserInfoByTokenSuccess,
  loginError,
  loginRequest,
  loginSuccess,
  logout,
  logoutRequest,
  signUpError,
  signUpRequest,
  signUpSuccess,
} from './index';
import { fetchUserInfoByToken, login, signUp } from './services';
import { takeLatest, all, put, call } from 'redux-saga/effects';

export function* loginSaga(action) {
  try {
    const response = yield call(login, action.payload);
    yield put(loginSuccess(response));
  } catch (e) {
    yield put(loginError(e));
  }
}

export function* signUpSaga(action) {
  try {
    const response = yield call(signUp, action.payload);
    yield put(signUpSuccess(response));
  } catch (e) {
    yield put(signUpError(e));
  }
}

export function* fetchUserInfoByTokenSaga(action) {
  try {
    const response = yield call(fetchUserInfoByToken, action.payload);
    yield put(fetchUserInfoByTokenSuccess(response));
  } catch (e) {
    yield put(fetchUserInfoByTokenError(e));
  }
}

export function* logoutSaga() {
  yield put(logout());
}

export default function* authenticationSagaWatcher() {
  yield all([
    takeLatest(loginRequest, loginSaga),
    takeLatest(signUpRequest, signUpSaga),
    takeLatest(fetchUserInfoByTokenRequest, fetchUserInfoByTokenSaga),
    takeLatest(logoutRequest, logoutSaga),
  ]);
}
