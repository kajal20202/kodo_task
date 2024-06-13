import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import moviesReducer from './reducers/moviesReducer';

const rootReducer = combineReducers({
  movies: moviesReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
