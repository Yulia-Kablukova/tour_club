import { all, call } from 'redux-saga/effects';
import authenticationSagaWatcher from '../ducks/auth/sagas';
import usersSagaWatcher from '../ducks/profile/users/sagas';
import tripsSagaWatcher from '../ducks/profile/trips/sagas';
import groupsSagaWatcher from '../ducks/profile/groups/sagas';
import competitionsSagaWatcher from '../ducks/profile/competitions/sagas';
import routesPointsSagaWatcher from '../ducks/profile/routesPoints/sagas';

export default function* createRootSaga() {
  yield all([
    call(authenticationSagaWatcher),
    call(usersSagaWatcher),
    call(tripsSagaWatcher),
    call(groupsSagaWatcher),
    call(competitionsSagaWatcher),
    call(routesPointsSagaWatcher),
  ]);
}
