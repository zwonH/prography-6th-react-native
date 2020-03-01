import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    width: '70%',
    height: 100,
    borderRadius: 50,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10
  },
  txtButton: {
    color: 'white',
    fontWeight: '800',
    fontSize: 20
  }
});

export default HomeScreen;
