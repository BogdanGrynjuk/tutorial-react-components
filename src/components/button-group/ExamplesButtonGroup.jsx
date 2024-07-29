import React, { useState } from 'react';
import ButtonGroup from './ButtonGroup';
import Button from 'components/button/Button';

const ExamplesButtonGroup = () => {
  const [activeHorizontalButton, setActiveHorizontalButton] = useState(0);
  const [activeVerticalButton, setActiveVerticalButton] = useState(0);
  const [isSwitchOn, setIsSwitchOn] = useState(true);

  const handleHorizontalButtonClick = (index) => {
    setActiveHorizontalButton(index);
    console.log("Ви натисли на кнопку з групи кнопок з горизонтальною орієнтацією")
  };

  const handleVerticalButtonClick = (index) => {
    setActiveVerticalButton(index);
    console.log("Ви натисли на кнопку з групи кнопок з вертикальною орієнтацією")
  };

  const handleToggleSwitch = () => {
    setIsSwitchOn(!isSwitchOn);
    console.log("Ви натисли на кнопку з групи кнопок перемикача")
  };  

  return (
    <>
      <h2><span>1. Горизонтальна група кнопок:</span></h2>
      <ButtonGroup>
        <Button onClick={() => handleHorizontalButtonClick(0)} active={activeHorizontalButton === 0}>Перша</Button>
        <Button onClick={() => handleHorizontalButtonClick(1)} active={activeHorizontalButton === 1}>Середня</Button>
        <Button onClick={() => handleHorizontalButtonClick(2)} active={activeHorizontalButton === 2}>Остання</Button>
      </ButtonGroup>

      <h2><span>2. Вертикальна група кнопок:</span></h2>
      <ButtonGroup vertical>
        <Button onClick={() => handleVerticalButtonClick(0)} active={activeVerticalButton === 0}>Перша</Button>
        <Button onClick={() => handleVerticalButtonClick(1)} active={activeVerticalButton === 1}>Середня</Button>
        <Button onClick={() => handleVerticalButtonClick(2)} active={activeVerticalButton === 2}>Остання</Button>
      </ButtonGroup>

      <h2><span>3. Група кнопок-перемикачів:</span></h2>
      <ButtonGroup>
        <Button onClick={handleToggleSwitch} active={isSwitchOn}>Увімкнено</Button>
        <Button onClick={handleToggleSwitch} active={!isSwitchOn}>Вимкнено</Button>
      </ButtonGroup>
    </>
  );
};

export default ExamplesButtonGroup;