import * as AuthActionTypes from '~/redux/actions/types/auth';
import { Dispatch } from 'redux';

type LoginDetails = {
    username: string;
    password: string;
    successCallback: () => void;
};

export const login = (loginDetails: LoginDetails) => (dispatch: Dispatch) => {
    const { username, password, successCallback } = loginDetails;

    const submitObj = {
        username: username,
        password: password,
    };

    dispatch(loginPending());
    const fetchApi = async () => {
        // const result = await authenticateService.login(submitObj);
        // if (result?.status === 200) {
        //     dispatch(loginSuccessfully(result?.data?.accessToken));
        //     successCallback();
        // } else {
        //     dispatch(loginFailed('Wrong username or password. Try again!'));
        // }
        if (submitObj) {
            dispatch(loginSuccessfully(submitObj.username));
            successCallback();
        } else {
            dispatch(loginFailed('Wrong username or password. Try again!'));
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

const loginFailed = (errMess: string) => {
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
