import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Todo = ({ onClick, completed, text }) =>
  <View
    onClick={onClick}
    style={{ textDecoration: completed ? 'line-through' : 'none' }}
  >
    <Text>
      {text}
    </Text>
  </View>;

export default Todo;
