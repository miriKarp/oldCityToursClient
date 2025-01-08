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






// import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { loginUser, registerUser } from '../actions/userAction'; // מייבאים את ה-actions

// interface UserState {
//   user: { email: string; token: string } | null;
//   loading: boolean;
//   error: string | null;
// }

// const initialState: UserState = {
//   user: null,
//   loading: false,
//   error: null,
// };

// const userSlice = createSlice({
//   name: 'user',
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(loginUser.pending, (state) => {
//         state.loading = true; // מתחילים את פעולת הלוגין
//         state.error = null;
//       })
//       .addCase(loginUser.fulfilled, (state, action) => {
//         state.loading = false; // הלוגין הצליח
//         state.user = action.payload;
//       })
//       .addCase(loginUser.rejected, (state, action) => {
//         state.loading = false; // הלוגין נכשל
//         state.error = action.error.message || 'Something went wrong';
//       })
//       .addCase(registerUser.pending, (state) => {
//         state.loading = true; // מתחילים את פעולת ההרשמה
//         state.error = null;
//       })
//       .addCase(registerUser.fulfilled, (state, action) => {
//         state.loading = false; // ההרשמה הצליחה
//         state.user = action.payload;
//       })
//       .addCase(registerUser.rejected, (state, action) => {
//         state.loading = false; // ההרשמה נכשלה
//         state.error = action.error.message || 'Something went wrong';
//       });
//   },
// });

// export default userSlice.reducer;
