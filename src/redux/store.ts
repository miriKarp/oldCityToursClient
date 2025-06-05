import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlices';
import customersReducer from './slices/customersSlices';
import toursReducer from "./slices/toursSlices";
import servicesReducer from './slices/servicesSlices';

const userFromStorage = localStorage.getItem("user");
const tokenFromStorage = localStorage.getItem("token");

const store = configureStore({
  reducer: {
    user: userReducer,
    customers: customersReducer,
    tours: toursReducer,
    services: servicesReducer,
  },
  preloadedState: {
    user: {
      user: userFromStorage ? JSON.parse(userFromStorage) : null,
      token: tokenFromStorage || null,
      loading: false,
      signUpError: null,
      signInError: null,
    }
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;