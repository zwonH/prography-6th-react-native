import React, {useState} from 'react';
import { connect } from 'react-redux';
import {
  ScrollView,
  TouchableOpacity,
  View,
  Text,
  TextInput
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import Todo from '../components/Todo';
import { toggleTodo, deleteTodo, editTodo, updateTodo } from '../actions';

const TodoList = ({ todos, toggleTodo, deleteTodo, editTodo, updateTodo }) =>{

  const [editedInput, setEditedInput] = useState ('')



  return(
    <ScrollView style={styles.scrollView}>
      {todos.map(todo =>
        <View style={styles.oneTodo} key={todo.id}>
          
          {todo.editable? 
          (
            <>
            <View style={{flexDirection: 'row'}}>
              <TextInput
                value={editedInput}
                onChangeText={editedInput => setEditedInput(editedInput)}
                style={styles.input}
              />
              <TouchableOpacity style={styles.smallButton} onPress={() => editedInput&&updateTodo(todo.id, editedInput)}>
                <Text style={styles.txtSmallButton}>save</Text>
              </TouchableOpacity>
            </View>
            </>
          )
          : 
          (
            <>
            <Todo {...todo} onPress={() => toggleTodo(todo.id)} />
            <TouchableOpacity
            style={styles.smallButton}
            onPress={() => {
              setEditedInput(todo.text);
              editTodo(todo.id);
              
            }}
            >
            <Text style={styles.txtSmallButton}>edit</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.smallButton}
            onPress={() => {
              deleteTodo(todo.id);
            }}
            >
            <Text style={styles.txtSmallButton}>X</Text>
            </TouchableOpacity>
            </>
          )}
          
        </View>
      )}
    </ScrollView>)};

const styles = EStyleSheet.create({
  scrollView:{
    paddingTop:'30rem'
  },
  oneTodo: {
    flexDirection: 'row'
  },
  input:{
    width: '$dW *0.7',
    height: '50rem',
    borderRadius: '15rem',
    backgroundColor: '$mainC',
    shadowColor: '#bbb5d3',
    shadowOffset: { width: 5, height: 10 },
    shadowOpacity: 0.9,
    shadowRadius: 20,
    elevation: 3,
    fontFamily: '$jose',
    color: '$pointC',
    fontSize: '20rem',
    lineHeight: '25rem',
    paddingLeft: '10rem',
    marginLeft: '10rem',
    
  },
  smallButton: {
    width: '35rem',
    height: '35rem',
    backgroundColor: '$mainC',
    borderRadius: '10rem',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#bbb5d3',
    shadowOffset: { width: 5, height: 10 },
    shadowOpacity: 0.9,
    shadowRadius: 10,
    elevation: 3,
    marginLeft:'10rem'
  },
  txtSmallButton: {
    fontFamily: '$jose',
    color: '$pointC',
    fontSize: '15rem'
  }
  })
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
