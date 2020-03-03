import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import AddTodo from '../containers/AddTodo';
import TodoList from '../containers/TodoList';

const TodoScreen = () =>
  <View style={styles.container}>
    <AddTodo />
    <TodoList />
  </View>;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default TodoScreen;
