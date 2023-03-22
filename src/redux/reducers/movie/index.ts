import * as MovieActionTypes from '~/redux/actions/types/movie';
import { ActionType } from '~/models/reduxModels';

export const ListMovie = (
    state = { loading: false, data: null, errMess: null },
    action: ActionType,
) => {
    switch (action.type) {
        case MovieActionTypes.PENDING_GET_LIST_MOVIE:
            return { ...state, loading: true, data: null, errMess: null };
        case MovieActionTypes.GET_LIST_MOVIE_FAILED:
            return {
                ...state,
                loading: false,
                data: null,
                errMess: action.payload,
            };
        case MovieActionTypes.GET_LIST_MOVIE_SUCCESSFULLY:
            return {
                ...state,
                loading: false,
                data: action.payload,
                errMess: null,
            };

        default:
            return state;
    }
};
