import { AppDispatch } from '../store';
import { loginStart, loginSuccess, loginFailure } from '../slices/userSlices';
import { register, login } from '../../api/user.api';

export const loginUser = (email: string, password: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(loginStart());
        const user = await login(email, password);
        dispatch(loginSuccess(user));
    } catch (err) {
        const error = err as any;
        dispatch(loginFailure(error.response?.data?.message || error.message));
    }
};

export const registerUser = (name: string, email: string, password: string, phone: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(loginStart());
        const user = await register(name, email, password, phone);
        dispatch(loginSuccess(user));
    } catch (err) {
        const error = err as any;
        dispatch(loginFailure(error.response?.data?.message || error.message));
    }
};
