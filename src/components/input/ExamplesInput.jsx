import React from 'react';
import Input from './Input';

const ExamplesInput = () => (
  <div
    style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridGap: '20px' }}
  >
    <h2>
      <span>1. Базовий Input type text з атрибутом placeholder:</span>
    </h2>
    <Input id="text" type="text" placeholder="Введіть будь ласка текст" />

    <h2>
      <span>2. Input type number (з label):</span>
    </h2>
    <Input id="number" label="виберіть число" type="number" />

    <h2>
      <span>3. Input type password (з помилкою):</span>
    </h2>
    <Input id="password" error="неправильний пароль" type="password" />

    <h2>
      <span>4. Input type week (з label і помилкою):</span>
    </h2>
    <Input id="week" label="Тиждень" error="неправильний тиждень" type="week" />

    <h2>
      <span>5. Input type date (з атрибутом required):</span>
    </h2>
    <Input id="date" required type="date" />

    <h2>
      <span>6. Input type file (з label та атрибутом required):</span>
    </h2>
    <Input id="file" label="файл" required type="file" />

    <h2>
      <span>7. Input type color:</span>
    </h2>
    <Input id="color" type="color" />

    <h2>
      <span>8. Input type range (з дефолтним value 30%):</span>
    </h2>
    <Input id="range" value="30" onChange={() => {}} type="range" />

    <h2>
      <span>9. Input type checkbox (з атрибутом checked):</span>
    </h2>
    <Input id="checkbox" checked onChange={() => {}} type="checkbox" />

    <h2>
      <span>10. Input type radio (з атрибутом disabled):</span>
    </h2>
    <Input id="radio" disabled type="radio" />
  </div>
);

export default ExamplesInput;
