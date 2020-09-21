import { combineReducers } from 'redux';

import appReducer from './app';
import userReducer from './user';
import authReducer from './auth';
import contentReducer from './content';

const appReducers = combineReducers({
  app: appReducer,
  user: userReducer,
  auth: authReducer,
  content: contentReducer,
});

export default appReducers;