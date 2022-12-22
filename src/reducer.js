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
    case 'SET_UPDATE_ITEM':
      const editId = action.payload;
      const newTitle = state.list.find((item) => item.id == editId).title;
      return {
        ...state,
        isEditing: true,
        editId: editId,
        name: newTitle,
      };
    case 'REMOVE_ITEM':
      return {
        ...state,
        list: state.list.filter((item) => item.id !== action.payload),
      };
    case 'REMOVE_ALL':
      return {
        ...state,
        list: [],
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
    case 'UPDATE_ITEM':
      const { id, name } = action.payload;
      const newList = state.list.map((item) => {
        if (item.id === id) {
          return { ...item, title: name };
        }
        return item;
      });
      return {
        ...state,
        list: newList,
        name: '',
        editId: null,
        isEditing: false,
      };
    case 'GET_FROM_LOCAL_STORAGE':
      return {
        ...state,
        ...action.payload,
      };
    case 'TOGGLE_TODO':
      const tempList = state.list.map((item) => {
        if (item.id === action.payload) {
          return { ...item, done: !item.done };
        }
        return item;
      });
      return {
        ...state,
        list: tempList,
      };
    default:
      break;
  }
  return state;
};

export default reducer;
