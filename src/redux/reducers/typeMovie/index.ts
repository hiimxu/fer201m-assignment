import * as TypeMovieActionTypes from '~/redux/actions/types/typeMovie';
import { ActionType } from '~/models/reduxModels';

export const TypeMovie = (
    state = { loading: false, data: null, errMess: null },
    action: ActionType,
) => {
    switch (action.type) {
        case TypeMovieActionTypes.PENDING_GET_TYPE_MOVIE:
            return { ...state, loading: true, data: null, errMess: null };
        case TypeMovieActionTypes.GET_TYPE_MOVIE_FAILED:
            return {
                ...state,
                loading: false,
                data: null,
                errMess: action.payload,
            };
        case TypeMovieActionTypes.GET_TYPE_MOVIE_SUCCESSFULLY:
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
