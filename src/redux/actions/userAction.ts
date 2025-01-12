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