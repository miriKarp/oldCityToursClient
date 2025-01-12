import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  user: { email: string; token: string } | null;
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  user: null,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    authStart(state) {
      state.loading = true;
      state.error = null;
    },
    authSuccess(state, action: PayloadAction<{ email: string; token: string }>) {
      state.loading = false;
      state.user = action.payload;
    },
    authFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { authStart, authSuccess, authFailure } = userSlice.actions;
export default userSlice.reducer;