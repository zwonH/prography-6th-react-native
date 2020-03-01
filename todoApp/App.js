import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './src/screens/HomeScreen';
import TodoScreen from './src/screens/TodoScreen';
import MovieScreen from './src/screens/MovieScreen';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Todo" component={TodoScreen} />
        <Stack.Screen name="Movie" component={MovieScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
