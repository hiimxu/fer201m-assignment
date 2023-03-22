import { AxiosError } from 'axios';
import * as request from '~/utils/httpRequest';

export const getListTypeMovie = async () => {
    try {
        const response = await request.get('/typeMovie');
        return response;
    } catch (error) {
        const err = error as AxiosError;
        return err.response;
    }
};
