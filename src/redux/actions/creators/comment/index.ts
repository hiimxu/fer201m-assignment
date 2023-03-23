import { Dispatch } from 'redux';
import * as CommentActionTypes from '~/redux/actions/types/comment';
import * as commentService from '~/services/comment';

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
export const getCommentCurrentUser =
    (reqParam: ReqParam) => (dispatch: Dispatch) => {
        dispatch(pendingGetCommentCurrentUser());
        const fetchApi = async () => {
            const response = await commentService.getCurrentComment(reqParam);
            if (response?.status === 200) {
                dispatch(getCommentCurrentUserSuccessful(response.data.data));
            } else {
                dispatch(getCommentCurrentUserFailed('Get comment failed'));
            }
        };
        fetchApi();
    };

const pendingGetCommentCurrentUser = () => {
    return {
        type: CommentActionTypes.PENDING_GET_COMMENT_CURRENT_USER,
        payload: null,
    };
};

const getCommentCurrentUserSuccessful = (data: any) => {
    return {
        type: CommentActionTypes.GET_COMMENT_CURRENT_USER_SUCCESSFULLY,
        payload: data,
    };
};

const getCommentCurrentUserFailed = (message: string) => {
    return {
        type: CommentActionTypes.GET_COMMENT_CURRENT_USER_FAILED,
        payload: message,
    };
};

//ADD COMMENT
export const addComment =
    (comment: Comment, successCallback: () => void) => (dispatch: Dispatch) => {
        dispatch(pendingAddComment());
        const fetchApi = async () => {
            const response = await commentService.addComment(comment);
            if (response?.status === 200) {
                dispatch(addCommentSuccessful(response?.data?.data));
                successCallback();
            } else {
                dispatch(addCommentFailed(response?.data?.message));
            }
        };
        fetchApi();
    };

const pendingAddComment = () => {
    return {
        type: CommentActionTypes.PENDING_ADD_COMMENT,
        payload: null,
    };
};

const addCommentSuccessful = (data: any) => {
    return {
        type: CommentActionTypes.ADD_COMMENT_SUCCESSFULLY,
        payload: data,
    };
};

const addCommentFailed = (message: string) => {
    return {
        type: CommentActionTypes.ADD_COMMENT_FAILED,
        payload: message,
    };
};

//GET LIST
//ADD COMMENT
export const getListComment = (movieId: string) => (dispatch: Dispatch) => {
    dispatch(pendingGetListComment());
    const fetchApi = async () => {
        const response = await commentService.getListComment(movieId);
        if (response?.status === 200) {
            dispatch(getListCommentSuccessful(response?.data?.data));
        } else {
            dispatch(getListCommentFailed(response?.data?.message));
        }
    };
    fetchApi();
};

const pendingGetListComment = () => {
    return {
        type: CommentActionTypes.PENDING_GET_LIST_COMMENT,
        payload: null,
    };
};

const getListCommentSuccessful = (data: any) => {
    return {
        type: CommentActionTypes.GET_LIST_COMMENT_SUCCESSFULLY,
        payload: data,
    };
};

const getListCommentFailed = (message: string) => {
    return {
        type: CommentActionTypes.GET_LIST_COMMENT_FAILED,
        payload: message,
    };
};
