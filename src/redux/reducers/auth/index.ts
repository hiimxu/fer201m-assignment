import * as AuthActionTypes from '~/redux/actions/types/auth';
import { ActionType } from '~/models/reduxModels';

export const LoginAccount = (
    state = { loading: false, account: null, errMess: null },
    action: ActionType,
) => {
    switch (action.type) {
        case AuthActionTypes.PENDING_LOGIN:
            return { ...state, loading: true, account: null, errMess: null };
        case AuthActionTypes.LOGIN_FAILED:
            return {
                ...state,
                loading: false,
                account: null,
                errMess: action.payload,
            };
        case AuthActionTypes.LOGIN_SUCCESSFULLY:
            return {
                ...state,
                loading: false,
                account: action.payload,
                errMess: null,
            };
        case AuthActionTypes.LOGOUT_SUCCESSFULLY:
            return {
                ...state,
                loading: false,
                account: null,
                errMess: null,
            };

        default:
            return state;
    }
};
