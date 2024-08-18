import React, { useState } from 'react';
import Icon from './Icon';
import ButtonGroup from 'components/button-group/ButtonGroup';
import Button from 'components/button/Button';

const ExamplesIcon = () => {
  const [activeButton, setActiveButton] = useState(0);

  const handleIconClick = () => {
    console.log('Ви натисли на іконку');
  };

  const handleButtonClick = index => {
    setActiveButton(index);
    console.log('Ви натисли на кнопку');
  };

  return (
    <section>
      <h2>
        <span>1. Базова іконка:</span>
      </h2>
      <Icon size={36} onClick={handleIconClick} name="face-smile-wink" />

      <h2>
        <span>2. Група кнопок з іконками:</span>
      </h2>
      <ButtonGroup>
        <Button
          onClick={() => handleButtonClick(0)}
          active={activeButton === 0}
        >
          <Icon title="За лівим краєм" name="align-left" />
        </Button>
        <Button
          onClick={() => handleButtonClick(1)}
          active={activeButton === 1}
        >
          <Icon title="По центру" name="align-center" />
        </Button>
        <Button
          onClick={() => handleButtonClick(2)}
          active={activeButton === 2}
        >
          <Icon title="За правим краєм" name="align-right" />
        </Button>
        <Button
          onClick={() => handleButtonClick(3)}
          active={activeButton === 3}
        >
          <Icon title="По ширині" name="align-justify" />
        </Button>
      </ButtonGroup>

      <h2>
        <span>3. Іконка з розміром 128px та користувацькими стилями:</span>
      </h2>
      <Icon
        className="icon--rotating-yellow"
        title="Сонечко)))"
        size={128}
        name="sun"
      />

      <h2>
        <span>4. Вимкнення функціоналу іконки:</span>
      </h2>
      <Icon size={36} disabled onClick={handleIconClick} name="atom" />
    </section>
  );
};

export default ExamplesIcon;
