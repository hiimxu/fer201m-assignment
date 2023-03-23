import { AxiosError } from 'axios';
import * as request from '~/utils/httpRequest';

type ReqParam = {
    movieId: string;
    userId: string;
};

type Comment = {
    userId?: string;
    movieId?: string;
    comment?: string;
    rate?: number;
};

export const getListComment = async (movieId: string) => {
    try {
        const response = await request.get(
            `/comment/commentsByMovie/${movieId}`,
        );
        return response;
    } catch (error) {
        const err = error as AxiosError;
        return err.response;
    }
};

export const getCurrentComment = async ({ movieId, userId }: ReqParam) => {
    try {
        const response = await request.get(
            `/comment/getCommentOfUser/${movieId}`,
            {
                params: {
                    customerId: userId,
                },
            },
        );
        return response;
    } catch (error) {
        const err = error as AxiosError;
        return err.response;
    }
};

export const addComment = async (comment: Comment) => {
    try {
        const response = await request.post(`/comment/addComment/`, comment);
        return response;
    } catch (error) {
        const err = error as AxiosError;
        return err.response;
    }
};
