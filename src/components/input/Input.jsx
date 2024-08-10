import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Input.css';

const Input = ({ id, className, label, error, ...attrs }) => {
  const classes = classNames('input', className, { error });

  return (
    <div className="input-wrapper">
      <div className="labels-wrapper">
        {label && (
          <label className="input-label" htmlFor={`input-${id}`}>
            {label}
          </label>
        )}
        {attrs.required && (
          <span className="input-required">Обов'язкове поле</span>
        )}
      </div>
      <input name={id} id={`input-${id}`} className={classes} {...attrs} />
      {error && <span className="input-error">{error}</span>}
    </div>
  );
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  label: PropTypes.string,
  error: PropTypes.string,
};

Input.defaultProps = {
  className: '',
  label: '',
  error: '',
};

export default Input;
