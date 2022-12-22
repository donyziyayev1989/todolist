import React, { useState, useEffect } from 'react';
import List from './List';
import Alert from './Alert';
import { useGlobalContext } from './context';
// Getting list from localstorage

function App() {
  const {
    isEditing,
    list,
    editId,
    addItem,
    name,
    changeHandler,
    showAlert,
    alert,
    updateItem,
    removeAllItem,
    getLocalStorage,
  } = useGlobalContext();

  const submitHandler = (e) => {
    e.preventDefault();
    if (!name) {
      showAlert(true, 'danger', 'Please fill out the field');
    } else if (name && isEditing) {
      updateItem(editId, name);
      showAlert(true, 'success', 'Item updated');
    } else {
      const newItem = { id: new Date().getTime().toString(), title: name };
      addItem(newItem);
      showAlert(true, 'success', 'Item Added');
    }
  };
  useEffect(() => {
    getLocalStorage('list');
  }, []);

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
  }, [list]);

  return (
    <section className='section-center'>
      {alert.show && <Alert />}
      <form className='grocery-form' onSubmit={submitHandler}>
        <h3>To do list</h3>
        <div className='form-control'>
          <input
            className='grocery'
            name='name'
            type='text'
            placeholder='buying eggs ..'
            value={name}
            onChange={changeHandler}
          />
          <button type='submit' className='submit-btn'>
            {isEditing ? 'edit' : 'submit'}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className='grocery-container'>
          <List />
          <button className='clear-btn' onClick={removeAllItem}>
            clear items
          </button>
        </div>
      )}
    </section>
  );
}

export default App;
