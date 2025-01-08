import { AppDispatch } from '../store';
import { authStart, authSuccess, authFailure } from '../slices/userSlices';
import { register, login } from '../../api/user.api';

export const loginUser = (email: string, password: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(authStart());
        const user = await login(email, password);
        dispatch(authSuccess(user));
    } catch (err) {
        const error = err as any;
        dispatch(authFailure(error.response?.data?.message || error.message));
    }
};




export const registerUser = (name: string, email: string, password: string, phone: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(authStart());
        const user = await register(name, email, password, phone);
        dispatch(authSuccess(user));
    } catch (err) {
        const error = err as any;
        dispatch(authFailure(error.response?.data?.message || error.message));
    }
};



// export const loginUser = createAsyncThunk(
//     'user/login', // שם הפעולה
//     async ({ email, password }: { email: string; password: string }, { dispatch }) => {
//         try {
//             dispatch(authStart()); // פעולה להתחלת הטעינה
//             const user = await login(email, password);
//             dispatch(authSuccess(user)); // פעולה להצלחה
//             return user; // מחזירים את המידע שהתקבל
//         } catch (err) {
//             const error = err as any;
//             dispatch(authFailure(error.response?.data?.message || error.message)); // פעולה לשגיאה
//             throw error; // זורקים את השגיאה עבור טיפול חיצוני
//         }
//     }
// );





// import { createAsyncThunk } from "@reduxjs/toolkit";
// import { login, register } from "../../api/user.api";

// // משתמש ב-createAsyncThunk עבור login
// export const loginUser = createAsyncThunk(
//     'user/login', // שם הפעולה
//     async ({ email, password }: { email: string; password: string }) => {
//         try {
//             const user = await login(email, password);
//             return user; // מחזירים את המידע שהתקבל
//         } catch (err) {
//             const error = err as any;
//             throw error; // זורקים את השגיאה כך ש-`rejected` יקבל אותה
//         }
//     }
// );

// // משתמש ב-createAsyncThunk עבור register
// export const registerUser = createAsyncThunk(
//     'user/register',
//     async ({ name, email, password, phone }: { name: string, email: string, password: string, phone: string }) => {
//         try {
//             const user = await register(name, email, password, phone);
//             return user; // מחזירים את המידע שהתקבל
//         } catch (err) {
//             const error = err as any;
//             throw error; // זורקים את השגיאה כך ש-`rejected` יקבל אותה
//         }
//     }
// );