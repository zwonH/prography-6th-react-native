const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      console.log('메모 추가' + action.id);
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
          editable: false
        }
      ];
    // case 'UPDATE_TODO':
    //   const id = action.id;
    //   const text = action.text;
    //   const completed = action.completed;

    //   let newState = JSON.parse(JSON.stringify(state));
    //   for (let i = 0; i < newState.length; i++) {
    //     if (id === newState[i]['id']) {
    //       newState[i]['text'] = text;
    //       newState[i]['completed'] = completed;
    //       break;
    //     }
    //   }
    //   return newState;

    case 'TOGGLE_TODO':
      console.log('toggle' + action.id);
      return state.map(
        todo =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );

    case 'DELETE_TODO':
      console.log('delete' + action.id);
      return state.filter(todo => todo.id !== action.id);

    case 'EDIT_TODO':
      console.log('edit' + action.id);
      return state.map(
        todo =>
          todo.id === action.id
            ? { ...todo, editable: true }
            : { ...todo, editable: false }
      );

    case 'UPDATE_TODO':
      console.log('update' + action.id);
      return state.map(
        todo =>
          todo.id === action.id
            ? { ...todo, editable: false, text: action.text }
            : todo
      );

    default:
      return state;
  }
};

export default todos;
