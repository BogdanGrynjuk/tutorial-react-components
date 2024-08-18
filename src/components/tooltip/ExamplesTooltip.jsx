import React from 'react';
import Tooltip from './Tooltip';
import Button from '../button/Button';

const ExamplesTooltip = () => (
  <>
    <h2>
      <span>1. Підказка з великим описом:</span>
    </h2>
    <Tooltip content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a">
      Test
    </Tooltip>

    <h2>
      <span>2. Підказка з користувацькими стилями:</span>
    </h2>
    <Tooltip
      content="Підказка з користувацькими стилями"
      style={{ color: 'red', textAlign: 'center' }}
    >
      Test
    </Tooltip>

    <h2>
      <span>3. Підказка користувацького елемента:</span>
    </h2>
    <Tooltip content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a">
      <Button>Exit</Button>
    </Tooltip>

    <h2>
      <span>4. Підказка для текстового елемента:</span>
    </h2>
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      <Tooltip content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a">
        <span
          style={{
            textDecoration: 'underline',
            color: 'red',
            padding: '0 4px',
          }}
        >
          Наведи сюди
        </span>
      </Tooltip>
      Ipsum has been the industry's standard dummy text ever since the 1500s
    </p>
  </>
);

export default ExamplesTooltip;
