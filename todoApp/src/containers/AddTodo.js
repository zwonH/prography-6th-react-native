import React, { useState } from 'react';
import {
  TextInput,
  TouchableOpacity,
  Text,
  View,
  StyleSheet
} from 'react-native';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

const AddTodo = ({ dispatch }) => {
  const [input, setInput] = useState('Write your memo');

  const handleSubmit = () => {
    input && dispatch(addTodo(input));
    setInput('');
  };

  return (
    <View>
      <TextInput
        clearTextOnFocus={true}
        style={styles.textInput}
        value={input}
        onChangeText={input => setInput(input)}
      />
      <TouchableOpacity onPress={() => handleSubmit()}>
        <Text>추가</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1
  }
});
export default connect()(AddTodo);
