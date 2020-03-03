import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import AddTodo from '../containers/AddTodo';
import { addTodo } from '../actions';

const TodoScreen = props => {
  // const dispatch = useDispatch();

  const todoList = props.todos;
  // console.log(todoList);

  return (
    <View>
      <AddTodo />

      <View>
        {todoList &&
          todoList.map(todo =>
            <View key={todo.id} style={{ flexDirection: 'row' }}>
              <TouchableOpacity>
                <Text>
                  {todo.text}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text>수정</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text>삭제</Text>
              </TouchableOpacity>
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
  }
});

const mapStateToProps = state => ({
  todos: state
});

export default connect(mapStateToProps, {
  addTodo
})(TodoScreen);
