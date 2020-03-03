import React from 'react';
import { connect } from 'react-redux';
import {
  ScrollView,
  TouchableOpacity,
  View,
  Text,
  StyleSheet
} from 'react-native';

import Todo from '../components/Todo';
import { toggleTodo, deleteTodo } from '../actions';

const TodoList = ({ todos, toggleTodo, deleteTodo }) =>
  <ScrollView>
    {todos.map(todo =>
      <View style={styles.oneTodo} key={todo.id}>
        <Todo {...todo} onPress={() => toggleTodo(todo.id)} />
        <TouchableOpacity
          onPress={() => {
            deleteTodo(todo.id);
          }}
        >
          <Text>삭제</Text>
        </TouchableOpacity>
      </View>
    )}
  </ScrollView>;

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
  deleteTodo: id => dispatch(deleteTodo(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
