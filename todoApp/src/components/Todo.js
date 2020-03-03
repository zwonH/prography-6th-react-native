import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const Todo = ({ onPress, completed, text }) =>
  <TouchableOpacity onPress={onPress} style={styles.todo}>
    <Text
      style={[
        styles.text,
        { textDecorationLine: completed ? 'line-through' : 'none' }
      ]}
    >
      {text}
    </Text>
  </TouchableOpacity>;

const styles = EStyleSheet.create({
  todo: {
    width: '$dW *0.7',
    height: '50rem',
    paddingLeft: '10rem',
    marginLeft: '10rem',
    justifyContent: 'center'
  },
  text: {
    fontFamily: '$jose',
    fontSize: '20rem',
    color: '$darkC',
    lineHeight: '25rem'
  }
});
export default Todo;
