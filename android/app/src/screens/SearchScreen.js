import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, TextInput, StyleSheet, Button, ActivityIndicator, Text } from 'react-native';
import { searchMovie } from '../redux/actions/movieActions';
import MoviesList from '../components/MoviesList';

const SearchScreen = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();
  const { movies, loading, error } = useSelector(state => state.movies);

  const handleSearch = () => {
    if (query.trim()) {
      dispatch(searchMovie(query));
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search movies..."
        value={query}
        onChangeText={setQuery}
      />
      <Button title="Search" onPress={handleSearch} />
      {loading && <ActivityIndicator size="large" color="#0000ff" />}
      {error && <Text>{error}</Text>}
      <MoviesList movies={movies} onEndReached={handleSearch} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 8,
  },
});

export default SearchScreen;
