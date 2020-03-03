import 'react-native-gesture-handler';
import React from 'react';
import { Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todos from './src/reducers/todos';

import HomeScreen from './src/screens/HomeScreen';
import TodoScreen from './src/screens/TodoScreen';
import MovieScreen from './src/screens/MovieScreen';
import EStyleSheet from 'react-native-extended-stylesheet';
const store = createStore(todos);
const Stack = createStackNavigator();
const deviceWidth = Dimensions.get('window').width;
EStyleSheet.build({
  $rem: deviceWidth / 380,
  $mainC: '#D9D2F5',
  $pointC: 'white',
  $jose: 'JosefinSans-Bold'
});

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            options={{
              headerStyle: {
                backgroundColor: EStyleSheet.value('$mainC'),
                borderBottomWidth: 0,
                shadowColor: 'transparent'
              },
              headerTintColor: EStyleSheet.value('$pointC'),
              headerTitleStyle: {
                fontFamily: EStyleSheet.value('$jose'),
                fontSize: EStyleSheet.value('20rem')
              }
            }}
            name="Home"
            component={HomeScreen}
          />
          <Stack.Screen name="Todo" component={TodoScreen} />
          <Stack.Screen name="Movie" component={MovieScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
