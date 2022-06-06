import React from 'react';
import s from './Filter.module.css';
import PropTypes from 'prop-types';

const Filter = ({ value, onSearch }) => (
  <label className={s.label}>
    Find contacts by name
    <input type="text" value={value} onChange={onSearch} />
  </label>
);

export default Filter;

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
};
