import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const MovieItem = ({ movie }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }}
      />
      <Text style={styles.title}>{movie.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  image: {
    width: 100,
    height: 150,
  },
  title: {
    flex: 1,
    marginLeft: 10,
    alignSelf: 'center',
  },
});

export default MovieItem;
