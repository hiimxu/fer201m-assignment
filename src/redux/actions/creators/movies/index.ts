import * as MovieActionTypes from '~/redux/actions/types/movie';
import { Dispatch } from 'redux';
import * as movieService from '~/services/movies';

type Filter = {
    search: string;
    typeMovieId: string;
};

export const getListMovie = (filter: Filter) => (dispatch: Dispatch) => {
    dispatch(getListMoviePending());
    const fetchApi = async () => {
        const result = await movieService.getListMovie(filter);
        if (result?.status === 200) {
            dispatch(getListMovieSuccessfully(result?.data?.data));
        } else {
            dispatch(getListMovieFailed('Failed connection.'));
        }
    };
    fetchApi();
};

const getListMovieSuccessfully = (account: string) => {
    return {
        type: MovieActionTypes.GET_LIST_MOVIE_SUCCESSFULLY,
        payload: account,
    };
};

const getListMovieFailed = (errMess: any) => {
    return {
        type: MovieActionTypes.GET_LIST_MOVIE_FAILED,
        payload: errMess,
    };
};

const getListMoviePending = () => {
    return {
        type: MovieActionTypes.PENDING_GET_LIST_MOVIE,
    };
};
