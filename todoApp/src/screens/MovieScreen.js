import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import axios from 'axios';
import EStyleSheet from 'react-native-extended-stylesheet';

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
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.scrollContainer}>
          {movieList.length == 0
            ? <View>
                <Text style={styles.txtLoading}>Loading...</Text>
              </View>
            : null}
          {movieList &&
            movieList.map((movie, index) => {
              return (
                <View key={index} style={styles.card}>
                  <Image
                    source={{ uri: movie.medium_cover_image }}
                    style={styles.image}
                  />
                  <Text style={styles.txtMovie}>
                    {movie.title}
                  </Text>
                </View>
              );
            })}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '$mainC',
    paddingTop: '20rem'
  },
  scrollContainer: {
    flexDirection: 'column',
    alignItems: 'center'
  },
  txtLoading: {
    fontFamily: '$jose',
    color: '$pointC',
    fontSize: '25rem'
  },
  card: {
    width: '$dW *0.8',
    alignItems: 'center',
    marginBottom: '30rem'
  },
  image: {
    width: '$dW *0.3',
    aspectRatio: 1.5 / 2,
    resizeMode: 'contain',
    marginBottom: '10rem'
  },
  txtMovie: {
    fontFamily: '$jose',
    color: '$darkC',
    fontSize: '18rem'
  }
});

export default MovieScreen;
