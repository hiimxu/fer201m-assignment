import * as AuthActionTypes from '../../types/auth';
import { Dispatch } from 'redux';
import * as authenticateService from '~/services/auth';

type LoginDetails = {
    email: string;
    password: string;
    successCallback: () => void;
};

export const login = (loginDetails: LoginDetails) => (dispatch: Dispatch) => {
    const { email, password, successCallback } = loginDetails;

    const submitObj = {
        email: email,
        password: password,
    };

    dispatch(loginPending());
    const fetchApi = async () => {
        const result = await authenticateService.login(submitObj);
        if (result?.status === 200) {
            dispatch(loginSuccessfully(result?.data?.userData));
            successCallback();
        } else {
            dispatch(loginFailed(result?.data?.message));
        }
    };
    fetchApi();
};

const loginSuccessfully = (account: string) => {
    return {
        type: AuthActionTypes.LOGIN_SUCCESSFULLY,
        payload: account,
    };
};

const loginFailed = (errMess: any) => {
    return {
        type: AuthActionTypes.LOGIN_FAILED,
        payload: errMess,
    };
};

const loginPending = () => {
    return {
        type: AuthActionTypes.PENDING_LOGIN,
    };
};

export const logout = () => (dispatch: any) => {
    dispatch(logoutSuccessfully());
};

const logoutSuccessfully = (message?: string) => {
    return {
        type: AuthActionTypes.LOGOUT_SUCCESSFULLY,
        payload: message,
    };
};
