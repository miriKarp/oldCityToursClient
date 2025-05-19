import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  user: {
    name: string;
    email: string;
    isManager: boolean;
  } | null;
  token: string | null;
  loading: boolean;
  signUpError: string | null;
  signInError: string | null;
}

const initialState: UserState = {
  loading: false,
  user: null,
  token: null,
  signUpError: null,
  signInError: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    authStart(state) {
      state.loading = true;
      state.signUpError = null;
      state.signInError = null;
    },
    signInSuccess(state, action: PayloadAction<{ token: string; user: { name: string; email: string; isManager: boolean } }>) {
      state.loading = false;
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.signInError = null;
    },
    signInFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.signInError = action.payload;
    },
    signUpSuccess(state, action: PayloadAction<{ token: string; user: { name: string; email: string; isManager: boolean } }>) {
      state.loading = false;
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.signUpError = null;
    },
    signUpFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.signUpError = action.payload;
    },
    logout(state) {
      state.user = null;
      state.token = null;
      state.loading = false;
      state.signInError = null;
      state.signUpError = null;
    },
  },
});

export const {
  authStart,
  signInSuccess,
  signInFailure,
  signUpSuccess,
  signUpFailure,
  logout,
} = userSlice.actions;

export default userSlice.reducer;