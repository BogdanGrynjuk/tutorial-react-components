import React from 'react';
import Chip from './Chip';
import UsageExampleChip from './UsageExampleChip';

import react from '../../images/react.png';
import angular from '../../images/angular.png';
import vue from '../../images/vue.png';

const ExamplesChip = () => (
  <>
    <h2>
      <span>1. Chip з текстом:</span>
    </h2>
    <Chip text="User name" />

    <h2>
      <span>2. Chip з довгим текстом:</span>
    </h2>
    <Chip text="Дуже довгий текст Chip повинен бути обрізаний" />

    <h2>
      <span>3. Chips з іконкою та кнопкою закриття:</span>
    </h2>
    <Chip text="Chip" withIcon />
    <Chip text="Chip" withClose />

    <h2>
      <span>4. Full chip:</span>
    </h2>
    <Chip text="Full chip" withIcon withClose />

    <h2>
      <span>5. Chip з зображенням:</span>
    </h2>
    <Chip text="React" withImage imageSrc={react} imgAlt="react" />

    <h2>
      <span>6. Chip з діями на body та іконці закриття:</span>
    </h2>
    <Chip
      text="React"
      withImage
      imageSrc={react}
      imgAlt="react"
      onChipClick={() => {
        console.log('натиснуто на chip body');
      }}
      withClose
    />
    <Chip
      text="Angular"
      withImage
      imageSrc={angular}
      imgAlt="angular"
      onCloseClick={() => {
        console.log('натиснуто на іконку закриття');
      }}
      withClose
    />
    <Chip
      text="Vue"
      withImage
      imageSrc={vue}
      imgAlt="vue"
      onCloseClick={() => {
        console.log('натиснуто на іконку закриття');
      }}
      onChipClick={() => {
        console.log('натиснуто на chip body');
      }}
      withClose
    />

    <h2>
      <span>7. Приклад використання:</span>
    </h2>
    <UsageExampleChip />
  </>
);

export default ExamplesChip;
