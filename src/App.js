import React, { useState, useEffect } from 'react';
import List from './List';
import Alert from './Alert';
import { useGlobalContext } from './context';
// const getLocalStorage = () => {
//   if (localStorage.getItem('list')) {
//     return JSON.parse(localStorage.getItem('list'));
//   } else {
//     return [];
//   }
// };
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
  } = useGlobalContext();

  // const [list, setList] = useState(getLocalStorage());
  // const [isEditing, setIsEditing] = useState(false);
  // const [editId, setEditId] = useState(null);
  // const [alert, setAlert] = useState({ show: false, type: '', msg: '' });
  const submitHandler = (e) => {
    e.preventDefault();
    if (!name) {
      showAlert(true, 'danger', 'Please fill out the field');
    } else if (name && isEditing) {
    } else {
      const newItem = { id: new Date().getTime().toString(), title: name };
      addItem(newItem);
    }
  };

  return (
    <section className='section-center'>
      {alert.show && <Alert />}
      <form className='grocery-form' onSubmit={submitHandler}>
        <h3>grocery bud</h3>
        <div className='form-control'>
          <input
            className='grocery'
            name='name'
            type='text'
            placeholder='eggs ..'
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
          <button className='clear-btn'>clear items</button>
        </div>
      )}
    </section>
  );
}

export default App;
