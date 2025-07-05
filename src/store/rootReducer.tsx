// rootReducer.ts
import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import themeConfigSlice from './themeConfigSlice';

const rootReducer = combineReducers({
  user: userReducer,
  themeConfig: themeConfigSlice,
});

export default rootReducer;
