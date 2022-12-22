import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { useGlobalContext } from './context';
const List = () => {
  const { list, setUpdateItem, removeItem, showAlert, toggleTodo } =
    useGlobalContext();
  return (
    <div className='grocery-list'>
      {list.map((item) => {
        const { id, title, done } = item;
        return (
          <article
            className={`${done ? 'grocery-item done' : 'grocery-item'}`}
            key={id}
          >
            <div className='toggle-done'>
              <input
                type='checkbox'
                name='done'
                id={id}
                value={done}
                onChange={() => toggleTodo(id)}
              />
            </div>
            <p className='title'>{title}</p>
            <div className='btn-container'>
              <button
                className='edit-btn'
                type='button'
                onClick={() => setUpdateItem(id)}
              >
                <FaEdit />
              </button>
              <button
                className='delete-btn'
                type='button'
                onClick={() => {
                  showAlert(true, 'danger', `"${title}" item removed`);
                  removeItem(id);
                }}
              >
                <FaTrash />
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default List;
