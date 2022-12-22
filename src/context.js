import React, { createContext, useContext, useReducer } from 'react';
import reducer from './reducer';

const AppContext = createContext();

const initialState = {
  list: [],
  name: '',
  isEditing: false,
  editId: null,
  alert: { show: false, type: '', msg: '' },
};
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addItem = (item) => {
    dispatch({ type: 'ADD_ITEM', payload: item });
    dispatch({ type: 'EMPTY_FORM' });
  };
  const updateItem = (id) => {
    dispatch({ type: 'UPDATE_ITEM', payload: id });
  };
  const removeItem = (id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };
  const showAlert = (show = false, type, msg) => {
    dispatch({ type: 'SHOW_ALERT', payload: { show, type, msg } });
  };
  const removeAlert = () => {
    dispatch({ type: 'REMOVE_ALERT' });
  };
  const changeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch({ type: 'SET_VALUE', payload: { [name]: value } });
  };
  return (
    <AppContext.Provider
      value={{
        ...state,
        addItem,
        changeHandler,
        updateItem,
        removeItem,
        showAlert,
        removeAlert,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
