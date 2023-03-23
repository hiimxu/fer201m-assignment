import { RootState } from '~/redux/store/configureStore';
export const getCommentUserSelector = (state: RootState) =>
    state.getCommentUser;

export const addCommentSelector = (state: RootState) => state.addComment;
