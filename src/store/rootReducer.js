import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';
import authenticationReducer from '../ducks/auth';
import usersReducer from '../ducks/profile/users';
import tripsReducer from '../ducks/profile/trips';
import groupsReducer from '../ducks/profile/groups';
import competitionsReducer from '../ducks/profile/competitions';
import routesPointsReducer from '../ducks/profile/routesPoints';

export const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    authentication: authenticationReducer,
    users: usersReducer,
    trips: tripsReducer,
    groups: groupsReducer,
    competitions: competitionsReducer,
    routesPoints: routesPointsReducer,
  });
