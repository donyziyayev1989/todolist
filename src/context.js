import React, { createContext, useContext, useReducer } from 'react';
import reducer from './reducer';

const getLocalStorage = () => {};
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
  const setUpdateItem = (id) => {
    dispatch({ type: 'SET_UPDATE_ITEM', payload: id });
  };
  const removeItem = (id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };
  const updateItem = (id, name) => {
    dispatch({ type: 'UPDATE_ITEM', payload: { name, id } });
  };
  const showAlert = (show = false, type, msg) => {
    dispatch({ type: 'SHOW_ALERT', payload: { show, type, msg } });
  };
  const removeAlert = () => {
    dispatch({ type: 'REMOVE_ALERT' });
  };
  const removeAllItem = () => {
    dispatch({ type: 'REMOVE_ALL' });
  };
  const changeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch({ type: 'SET_VALUE', payload: { [name]: value } });
  };
  const getLocalStorage = (el) => {
    if (localStorage.getItem(el)) {
      dispatch({
        type: 'GET_FROM_LOCAL_STORAGE',
        payload: { [el]: JSON.parse(localStorage.getItem(el)) },
      });
    } else {
      return state.el;
    }
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        addItem,
        changeHandler,
        setUpdateItem,
        removeItem,
        updateItem,
        showAlert,
        removeAlert,
        removeAllItem,
        getLocalStorage,
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
