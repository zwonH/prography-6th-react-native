import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Todo = ({ onPress, completed, text }) =>
  <TouchableOpacity onPress={onPress}>
    <Text style={{ textDecorationLine: completed ? 'line-through' : 'none' }}>
      {text}
    </Text>
  </TouchableOpacity>;

export default Todo;
