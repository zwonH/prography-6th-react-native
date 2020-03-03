import React from 'react';
import { View } from 'react-native';
import AddTodo from '../containers/AddTodo';
import TodoList from '../containers/TodoList';
import EStyleSheet from 'react-native-extended-stylesheet';

const TodoScreen = () =>
  <View style={styles.container}>
    <AddTodo />
    <TodoList />
  </View>;

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '$mainC'
  }
});

export default TodoScreen;
