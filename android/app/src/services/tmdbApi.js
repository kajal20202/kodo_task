import axios from 'axios';

const API_KEY = 'YOUR_TMDB_API_KEY';
const BASE_URL = 'https://api.themoviedb.org/3';

const tmdbApi = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
});

export const fetchPopularMovies = (page = 1) =>
  tmdbApi.get('/movie/popular', { params: { page } });

export const searchMovies = (query, page = 1) =>
  tmdbApi.get('/search/movie', { params: { query, page } });
