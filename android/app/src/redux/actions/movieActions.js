import { fetchPopularMovies, searchMovies } from '../../services/tmdbApi';

export const FETCH_MOVIES_REQUEST = 'FETCH_MOVIES_REQUEST';
export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS';
export const FETCH_MOVIES_FAILURE = 'FETCH_MOVIES_FAILURE';
export const SEARCH_MOVIES = 'SEARCH_MOVIES';

export const fetchMovies = (page = 1) => async dispatch => {
  dispatch({ type: FETCH_MOVIES_REQUEST });
  try {
    const response = await fetchPopularMovies(page);
    dispatch({ type: FETCH_MOVIES_SUCCESS, payload: response.data.results });
  } catch (error) {
    dispatch({ type: FETCH_MOVIES_FAILURE, error: error.message });
  }
};

export const searchMovie = (query, page = 1) => async dispatch => {
  dispatch({ type: FETCH_MOVIES_REQUEST });
  try {
    const response = await searchMovies(query, page);
    dispatch({ type: SEARCH_MOVIES, payload: response.data.results });
  } catch (error) {
    dispatch({ type: FETCH_MOVIES_FAILURE, error: error.message });
  }
};
