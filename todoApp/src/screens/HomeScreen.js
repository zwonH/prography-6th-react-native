import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Todo')}
      >
        <Text style={styles.txtButton}>TO DO LIST</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Movie')}
      >
        <Text style={styles.txtButton}>MOVIE</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '$mainC'
  },
  button: {
    width: '60%',
    aspectRatio: 1,
    borderRadius: 50,
    backgroundColor: '$mainC',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    shadowColor: '#bbb5d3',
    shadowOffset: { width: 15, height: 10 },
    shadowOpacity: 0.9,
    shadowRadius: 15,
    elevation: 3
  },
  txtButton: {
    color: 'white',
    fontWeight: '900',
    fontSize: '25rem',
    textAlign: 'center',
    lineHeight: '32rem',
    fontFamily: '$jose'
  }
});

export default HomeScreen;
