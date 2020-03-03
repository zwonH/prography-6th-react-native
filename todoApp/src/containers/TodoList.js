import React, {useState} from 'react';
import { connect } from 'react-redux';
import {
  ScrollView,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  TextInput
} from 'react-native';

import Todo from '../components/Todo';
import { toggleTodo, deleteTodo, editTodo, updateTodo } from '../actions';

const TodoList = ({ todos, toggleTodo, deleteTodo, editTodo, updateTodo }) =>{

  const [editedInput, setEditedInput] = useState ('')



  return(
    <ScrollView>
      {todos.map(todo =>
        <View style={styles.oneTodo} key={todo.id}>
          
          {todo.editable? 
          (
            <>
            <View style={{flexDirection: 'row'}}>
              <TextInput
                value={editedInput}
                onChangeText={editedInput => setEditedInput(editedInput)}
              />
              <TouchableOpacity onPress={() => editedInput&&updateTodo(todo.id, editedInput)}>
                <Text>완료</Text>
              </TouchableOpacity>
            </View>
            </>
          )
          : 
          (
            <>
            <Todo {...todo} onPress={() => toggleTodo(todo.id)} />
            <TouchableOpacity
            onPress={() => {
              setEditedInput(todo.text);
              editTodo(todo.id);
            }}
            >
            <Text>수정</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => {
              deleteTodo(todo.id);
            }}
            >
            <Text>삭제</Text>
            </TouchableOpacity>
            </>
          )}
          
        </View>
      )}
    </ScrollView>)};

const styles = StyleSheet.create({
  oneTodo: {
    flexDirection: 'row'
  }
});

const mapStateToProps = state => ({
  todos: state
});

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id)),
  deleteTodo: id => dispatch(deleteTodo(id)),
  editTodo: id => dispatch(editTodo(id)),
  updateTodo: (id, editedInput) => dispatch(updateTodo(id, editedInput))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
