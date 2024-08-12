import React from 'react';
import TabBar from './TabBar';
import TabBarItem from './TabBarItem';

import Image from '../image/Image';
import ButtonGroup from '../button-group/ButtonGroup';
import Button from '../button/Button';

import monkey from '../../images/monkey.jpg';

const ExamplesTabBar = () => (
  <>
    <h2>
      <span>1. Горизонтальна панель вкладок:</span>
    </h2>
    <TabBar>
      <TabBarItem label="Простий текст">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </TabBarItem>
      <TabBarItem label="Картинка">
        <Image src={monkey} width={150} height={150} circle />
      </TabBarItem>
      <TabBarItem label="Компонент">
        <ButtonGroup>
          <Button active>First</Button>
          <Button>Middle</Button>
          <Button>Last</Button>
        </ButtonGroup>
      </TabBarItem>
      <TabBarItem label="Порожня вкладка" />
    </TabBar>
    <h2>
      <span>2. Вертикальна панель вкладок:</span>
    </h2>
    <TabBar vertical>
      <TabBarItem label="Простий текст">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </TabBarItem>
      <TabBarItem label="Картинка">
        <Image src={monkey} width={150} height={150} circle />
      </TabBarItem>
      <TabBarItem label="Компонент">
        <ButtonGroup>
          <Button active>First</Button>
          <Button>Middle</Button>
          <Button>Last</Button>
        </ButtonGroup>
      </TabBarItem>
      <TabBarItem label="Порожня вкладка" />
    </TabBar>
  </>
);

export default ExamplesTabBar;
