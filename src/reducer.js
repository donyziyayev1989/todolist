const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        list: [...state.list, action.payload],
      };
    case 'EMPTY_FORM':
      return {
        ...state,
        name: '',
      };
    case 'SET_VALUE':
      return {
        ...state,
        ...action.payload,
      };
    case 'UPDATE_ITEM':
      return {
        ...state,
        isEditing: true,
        editId: action.payload,
      };
    case 'REMOVE_ITEM':
      return {
        ...state,
        list: state.list.filter((item) => item.id !== action.payload),
      };
    case 'SHOW_ALERT':
      return {
        ...state,
        alert: action.payload,
      };
    case 'REMOVE_ALERT':
      return {
        ...state,
        alert: { show: false },
      };
    default:
      break;
  }
  return state;
};

export default reducer;
