import { RootState } from '~/redux/store/configureStore';
export const listMovieSelector = (state: RootState) => state.listMovie;
export const movieInformationSelector = (state: RootState) =>
    state.movieInformation;
