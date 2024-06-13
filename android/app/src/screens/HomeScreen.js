import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text, ActivityIndicator, StyleSheet, Button } from 'react-native';
import { fetchMovies } from '../redux/actions/movieActions';
import MoviesList from '../components/MoviesList';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const { movies, loading, error } = useSelector(state => state.movies);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  const loadMoreMovies = () => {
    dispatch(fetchMovies());
  };

  return (
    <View style={styles.container}>
      {loading && <ActivityIndicator size="large" color="#0000ff" />}
      {error && <Text>{error}</Text>}
      <MoviesList movies={movies} onEndReached={loadMoreMovies} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});

export default HomeScreen;
