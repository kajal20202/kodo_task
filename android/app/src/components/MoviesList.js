import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import MovieItem from './MovieItem';

const MoviesList = ({ movies, onEndReached }) => {
  return (
    <FlatList
      data={movies}
      renderItem={({ item }) => <MovieItem movie={item} />}
      keyExtractor={item => item.id.toString()}
      onEndReached={onEndReached}
      onEndReachedThreshold={0.5}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MoviesList;
