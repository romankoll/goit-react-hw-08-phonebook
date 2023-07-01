// import React from 'react';

import css from 'components/Filter/Filter.module.css';

import { useSelector, useDispatch } from 'react-redux';

import { getFilter } from 'redux/contacts/selectors';
import { setFilter } from 'redux/contacts/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();

  const filterValue = useSelector(getFilter);

  const handleFilterChange = ({ target: { value } }) => {
    dispatch(setFilter(value));
  };

  return (
    <label className={css.label} htmlFor="">
      Find contacts by name:
      <input
        className={css.input}
        type="text"
        value={filterValue.filter}
        name="filter"
        onChange={handleFilterChange}
      />
    </label>
  );
};

export default Filter;
