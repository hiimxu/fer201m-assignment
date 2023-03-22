import * as TypeMovieActionTypes from '../../types/typeMovie';
import { Dispatch } from 'redux';
import * as typeMovieService from '~/services/typeMovie';

export const getListTypeMovie = () => (dispatch: Dispatch) => {
    dispatch(getListTypeMoviePending());
    const fetchApi = async () => {
        const result = await typeMovieService.getListTypeMovie();
        if (result?.status === 200) {
            dispatch(getListTypeMovieSuccessfully(result?.data));
        } else {
            dispatch(getListTypeMovieFailed('Failed connection.'));
        }
    };
    fetchApi();
};

const getListTypeMovieSuccessfully = (account: string) => {
    return {
        type: TypeMovieActionTypes.GET_TYPE_MOVIE_SUCCESSFULLY,
        payload: account,
    };
};

const getListTypeMovieFailed = (errMess: any) => {
    return {
        type: TypeMovieActionTypes.GET_TYPE_MOVIE_FAILED,
        payload: errMess,
    };
};

const getListTypeMoviePending = () => {
    return {
        type: TypeMovieActionTypes.PENDING_GET_TYPE_MOVIE,
    };
};
