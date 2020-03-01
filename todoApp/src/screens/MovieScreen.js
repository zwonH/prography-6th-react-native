import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';

const MovieScreen = () => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const result = await axios.get(
        'https://yts.mx/api/v2/list_movies.json?limit=50'
      );
      setMovieList(result['data']['data']['movies']);
    };
    fetchMovies();
  }, []);

  return (
    <View>
      <Text>MOVIE SCREEN</Text>
      {movieList.length == 0
        ? <View>
            <Text>Loading</Text>
          </View>
        : null}
      {movieList &&
        movieList.map((movie, index) => {
          return (
            <View key={index}>
              <Text>
                {movie.title}
              </Text>
            </View>
          );
        })}
    </View>
  );
};

export default MovieScreen;
