import { AxiosError } from 'axios';
import * as request from '~/utils/httpRequest';

type LoginDetails = {
    email: string;
    password: string;
};

export const login = async (loginDetail: LoginDetails) => {
    try {
        const response = await request.post('/auth', {
            email: loginDetail.email,
            password: loginDetail.password,
        });
        return response;
    } catch (error) {
        const err = error as AxiosError;
        return err.response;
    }
};
