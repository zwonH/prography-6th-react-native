import React from 'react';
import { connect } from 'react-redux';
import { ScrollView } from 'react-native';

import Todo from '../components/Todo';
import { toggleTodo } from '../actions';

const TodoList = ({ todos, toggleTodo }) =>
  <ScrollView>
    {todos.map(todo =>
      <Todo key={todo.id} {...todo} onPress={() => toggleTodo(todo.id)} />
    )}
  </ScrollView>;

const mapStateToProps = state => ({
  todos: state
});

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
