import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Todo = ({ onPress, completed, editable, text, id }) =>
  <TouchableOpacity onPress={onPress}>
    <Text style={{ textDecorationLine: completed ? 'line-through' : 'none' }}>
      {id}
      {text}
      {completed ? '트루' : '팔스'}
      {editable ? '트루' : '팔스'}
    </Text>
  </TouchableOpacity>;

export default Todo;
