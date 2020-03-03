import React from 'react';
import { connect } from 'react-redux';
import { ScrollView } from 'react-native';
import Todo from '../components/Todo';

const TodoList = ({ todos }) =>
  <ScrollView>
    {todos.map(todo => <Todo key={todo.id} {...todo} />)}
  </ScrollView>;

const mapStateToProps = state => ({
  todos: state
});

export default connect(mapStateToProps)(TodoList);
