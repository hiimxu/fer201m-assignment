import { AxiosError } from 'axios';
import * as request from '~/utils/httpRequest';

type Filter = {
    search: string;
    typeMovieId: string;
};

export const getListMovie = async (filter: Filter) => {
    try {
        const response = await request.get('/movies', {
            params: filter,
        });
        return response;
    } catch (error) {
        const err = error as AxiosError;
        return err.response;
    }
};

export const getMovieDetail = async (id: string) => {
    try {
        const response = await request.get(`/movies/${id}`);
        return response;
    } catch (error) {
        const err = error as AxiosError;
        return err.response;
    }
};
