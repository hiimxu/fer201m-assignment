import { AxiosError } from 'axios';
import * as request from '~/utils/httpRequest';


export const getListMovie = async () => {
    try {
        const response = await request.get('/movies');
        return response;
    } catch (error) {
        const err = error as AxiosError;
        return err.response;
    }
};
