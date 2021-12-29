import { configureStore, combineReducers } from '@reduxjs/toolkit';
import logger from "redux-logger";

import counterReducer from './slice/counterSlice'
import todoReducer from './slice/todoSlice'

const rootReducer = combineReducers({
  counter: counterReducer,
  todo: todoReducer
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;