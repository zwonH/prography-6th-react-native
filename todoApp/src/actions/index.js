let nextTodoId = 0;

export const addTodo = text => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
});

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
});

export const deleteTodo = id => ({
  type: 'DELETE_TODO',
  id
});

export const editTodo = id => ({
  type: 'EDIT_TODO',
  id
});

export const updateTodo = (id, text) => ({
  type: 'UPDATE_TODO',
  id,
  text
});
