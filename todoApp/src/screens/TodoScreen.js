import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput
} from 'react-native';
import { addTodo } from '../actions';

const TodoScreen = props => {
  const [text, setText] = useState('메모를 적어보세요');
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(addTodo(text));
  };
  const todoList = props.todos;
  // console.log(todoList);

  return (
    <View>
      <TextInput
        style={styles.textInput}
        value={text}
        onChangeText={text => setText(text)}
      />
      <TouchableOpacity onPress={() => handleSubmit()}>
        <Text>입력</Text>
      </TouchableOpacity>
      <View>
        {todoList &&
          todoList.map((todo, idx) =>
            <View key={idx}>
              <Text>
                {todo.text}
              </Text>
            </View>
          )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1
  }
});

const mapStateToProps = state => ({
  todos: state
});

export default connect(mapStateToProps, {
  addTodo
})(TodoScreen);
