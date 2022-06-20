import { createBrowserHistory } from 'history';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';
import { createRootReducer } from './rootReducer';
import createRootSaga from './rootSaga';
import { configureStore } from '@reduxjs/toolkit';

export const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: createRootReducer(history),
  middleware: [routerMiddleware(history), sagaMiddleware],
});

sagaMiddleware.run(createRootSaga);
