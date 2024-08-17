import Button from 'components/button/Button';
import PropTypes from 'prop-types';

import Icon from 'components/icon/Icon';
import React from 'react';

import './CustomComponent.css';

const CustomComponent = ({ closeModal }) => {
  const handleSubmit = () => {
    console.log('Submit function!');
    closeModal();
  };

  const handleCancel = () => {
    console.log('Cancel function!');
    closeModal();
  };
  return (
    <div className="custom-component">
      <div className="custom-component__header">
        <h2 className="custom-component__title">Діалогове вікно</h2>
        <Icon name="times" onClick={handleCancel} />
      </div>
      <div className="custom-component__body">
        <p>
          Всереденні модального вікна може бути розміщенно простий текст, форма,
          картинки та інші інтерактивні елементи.
        </p>
      </div>
      <div className="custom-component__footer">
        <Button onClick={handleCancel} invert>
          Cancel
        </Button>
        <Button onClick={handleSubmit}>Submit</Button>
      </div>
    </div>
  );
};

CustomComponent.propTypes = {
  closeModal: PropTypes.func.isRequired,
};

export default CustomComponent;
