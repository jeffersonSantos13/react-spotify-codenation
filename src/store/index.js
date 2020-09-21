import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import appReducers from './reducers';

import UserActionTypes from './constants/user';

const rootReducer = (state, action) => {
  if (action.type === UserActionTypes.USER_LOGOUT) {
    state = undefined;
  }

  return appReducers(state, action);
};

const persistConfig = {
  key: 'spotifyStorage',
  storage,
  blacklist: ['auth', 'content'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer
);

const persistor = persistStore(store)

export { store, persistor };