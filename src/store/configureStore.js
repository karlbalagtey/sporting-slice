import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { createInjectorsEnhancer } from 'redux-injectors';
import createSagaMiddleware from 'redux-saga';
import { loadState, saveState } from '../utils/localStorage';
import { createReducer } from './reducers';
import throttle from 'lodash/throttle';

export function configureAppStore() {
  const sagaMiddleware = createSagaMiddleware();
  const { run: runSaga } = sagaMiddleware;

  const middlewares = [sagaMiddleware];

  const enhancers = [
    createInjectorsEnhancer({
      createReducer,
      runSaga,
    }),
  ];

  const persistedState = loadState();
  const store = configureStore({
    reducer: createReducer(),
    middleware: [...getDefaultMiddleware({ thunk: false }), ...middlewares],
    preloadedState: persistedState,
    devTools:
      process.env.NODE_ENV !== 'production' ||
      process.env.PUBLIC_URL.length > 0,
    enhancers,
  });

  store.subscribe(
    throttle(() => {
      saveState({
        quote: store.getState().quote,
      });
    }, 1000),
  );

  return store;
}
