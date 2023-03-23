import * as CommentActionTypes from '~/redux/actions/types/comment';
import { ActionType } from '~/models/reduxModels';

export const GetCommentUser = (
    state = { loading: false, data: null, errMess: null },
    action: ActionType,
) => {
    switch (action.type) {
        case CommentActionTypes.PENDING_GET_COMMENT_CURRENT_USER:
            return { ...state, loading: true, data: null, errMess: null };
        case CommentActionTypes.GET_COMMENT_CURRENT_USER_FAILED:
            return {
                ...state,
                loading: false,
                data: null,
                errMess: action.payload,
            };
        case CommentActionTypes.GET_COMMENT_CURRENT_USER_SUCCESSFULLY:
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

export const AddComment = (
    state = { loading: false, data: null, errMess: null },
    action: ActionType,
) => {
    switch (action.type) {
        case CommentActionTypes.PENDING_ADD_COMMENT:
            return { ...state, loading: true, data: null, errMess: null };
        case CommentActionTypes.ADD_COMMENT_FAILED:
            return {
                ...state,
                loading: false,
                data: null,
                errMess: action.payload,
            };
        case CommentActionTypes.ADD_COMMENT_SUCCESSFULLY:
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
