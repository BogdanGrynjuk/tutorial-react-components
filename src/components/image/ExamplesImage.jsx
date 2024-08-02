import React from 'react';
import Image from './Image';

import monkey from '../../images/monkey.jpg';

const ExamplesImage = () => (
  <>
    <h2><span>1. Базовий плейсхолдер зображення:</span></h2>
    <Image />

    <h2><span>2. Зображення з атрибутами src та alt:</span></h2>
    <Image
      src="https://yt3.ggpht.com/a-/AN66SAxaodVdRdyJ3YuM24rQ07_py_oWfFdEvVBp=s100-mo-c-c0xffffffff-rj-k-no"
      alt="youtube"
    />

    <h2><span>3. Плейсхолдер зображення з розмірами 50x50, 100x100 і 150x150:</span></h2>
    <div style={{ display: 'flex', alignItems: "flex-end", columnGap: "20px" }}>
      <Image width={50} height={50} alt="дефолтне зображення" />
      <Image width={100} height={100} alt="дефолтне зображення" />
      <Image width={150} height={150} alt="дефолтне зображення" />
    </div>

    <h2><span>4. Кругле зображення з розміром 150x150 та власними стилями:</span></h2>
    <Image
      src={monkey}
      width={150}
      height={150}
      className="thumbImg--shadow"
      circle
      alt="monkey"
    />
  </>
);

export default ExamplesImage;