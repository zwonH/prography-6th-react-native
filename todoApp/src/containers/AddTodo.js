import React, { useState } from 'react';
import { TextInput, TouchableOpacity, Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

const AddTodo = ({ dispatch }) => {
  const [input, setInput] = useState('Write your memo');

  const handleSubmit = () => {
    input && dispatch(addTodo(input));
    setInput('');
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        clearTextOnFocus={true}
        style={styles.textInput}
        value={input}
        onChangeText={input => setInput(input)}
      />
      <View style={styles.dot} />
      <View style={styles.dot} />
      <TouchableOpacity
        style={styles.submitButton}
        onPress={() => handleSubmit()}
      >
        <Text style={styles.txtAddButton}>💟</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = EStyleSheet.create({
  inputContainer: {
    marginTop: '20rem',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
    width: '75%',
    height: '60rem',
    borderRadius: '20rem',
    backgroundColor: '$mainC',
    shadowColor: '#bbb5d3',
    shadowOffset: { width: 5, height: 10 },
    shadowOpacity: 0.9,
    shadowRadius: 20,
    elevation: 3,
    fontFamily: '$jose',
    color: '$pointC',
    fontSize: '20rem',
    padding: '20rem'
  },
  dot: {
    width: '6rem',
    height: '6rem',
    backgroundColor: '$pointC',
    borderRadius: '100rem',
    marginTop: '12rem'
  },
  submitButton: {
    marginTop: '13rem',
    height: '50rem',
    width: '50rem',
    borderRadius: '100rem',
    justifyContent: 'center',
    backgroundColor: '$pointC',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '$mainC',
    shadowColor: '#bbb5d3',
    shadowOffset: { width: 5, height: 10 },
    shadowOpacity: 0.9,
    shadowRadius: 20,
    elevation: 3
  },

  txtAddButton: {
    fontSize: '20rem',
    textAlign: 'center'
  }
});
export default connect()(AddTodo);
