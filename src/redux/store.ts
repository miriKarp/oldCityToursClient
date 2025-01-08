import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlices';
// import { thunk } from 'redux-thunk';

const store = configureStore({
  reducer: {
    user: userReducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk), 
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
