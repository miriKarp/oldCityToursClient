import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  user: { email: string; token: string } | null;
  loading: boolean;
  signUpError: string | null;
  signInError: string | null;
}

const initialState: UserState = {
  loading: false,
  user: null,
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
    signInSuccess(state, action: PayloadAction<{ email: string; token: string }>) {
      state.loading = false;
      state.user = action.payload;
      state.signInError = null;
    },
    signInFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.signInError = action.payload;
    },
    signUpSuccess(state, action: PayloadAction<{ email: string; token: string }>) {
      state.loading = false;
      state.user = action.payload;
      state.signUpError = null;
    },
    signUpFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.signUpError = action.payload;
    },
  },
});

export const {
  authStart,
  signInSuccess,
  signInFailure,
  signUpSuccess,
  signUpFailure,
} = userSlice.actions;

export default userSlice.reducer;