import React from 'react';
import { useGlobalContext } from './context';

const filterButtons = [
  { id: 1, text: 'all' },
  { id: 2, text: 'completed' },
  { id: 3, text: 'incompleted' },
];

const Filter = () => {
  const { setFilter, filter } = useGlobalContext();
  return (
    <div className='filter'>
      {filterButtons.map((btn) => {
        return (
          <button
            className={`${
              filter === btn.text ? 'btn-filter active' : 'btn-filter'
            }`}
            key={btn.id}
            onClick={() => setFilter(btn.text)}
          >
            {btn.text}
          </button>
        );
      })}
    </div>
  );
};

export default Filter;
