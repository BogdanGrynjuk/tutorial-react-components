import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Select.css';

const Select = ({
  options,
  id,
  label,
  defaultOption,
  value,
  onChange,
  className,
}) => {
  const classes = classNames(
    'select-wrapper',
    className
  );

  const renderOptions = (options) => {
    return options.map(option => {
      if (option.options) {
        return (
          <optgroup key={option.label} label={option.label}>
            {renderOptions(option.options)}
          </optgroup>
        );
      } else {
        return (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        );
      }
    });
  };

  return (
    <div className={classes}>
      {label && <label className="select-label" htmlFor={id}>{label}</label>}
      <select
        className="select"
        id={id}
        value={value}
        onChange={e => onChange(e.target.value)}
      >
        {defaultOption && (
          <option disabled value="">
            {defaultOption}
          </option>
        )}
        {renderOptions(options)}
      </select>
    </div>
  );
}

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    }),
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      options: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
      })).isRequired
    })
  ])).isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  defaultOption: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
};

Select.defaultProps = {
  label: '',
  defaultOption: '',
  className: '',
};

export default Select;