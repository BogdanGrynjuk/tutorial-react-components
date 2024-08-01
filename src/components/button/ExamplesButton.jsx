import React from 'react'
import Button from './Button';

const ExamplesButton = () => {
  return (
    <section>
      <h2><span>1. Текст та функція onClick:</span></h2>
      <Button onClick={() => { console.log('Ви натисли на кнопку!'); }}>Button text</Button>

      <h2><span>2. Вимкнена кнопка:</span></h2>
      <Button onClick={() => { console.log('Ви натисли на кнопку!'); }} disabled />

      <h2><span>3. Активна кнопка:</span></h2>
      <Button active />

      <h2><span>4. Підтримка data, type та інших атрибутів:</span></h2>
      <Button data-name="button" />
      &nbsp;&nbsp;
      <Button type="submit" />

      <h2><span>5. Кнопка-посилання</span></h2>
      <Button href="test">Link</Button>
      &nbsp;&nbsp;
      <Button href="test" disabled>Link</Button>

      <h2><span>6. Кнопка з користувацькими стилями</span></h2>
      <Button className='btn--red' type="button">Custom button</Button>      
    </section>
  );
}

export default ExamplesButton;

