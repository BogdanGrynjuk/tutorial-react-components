import React from 'react';
import ListGroup from './ListGroup';
import Badge from '../badge/Badge';
import Button from '../button/Button';

const BASE_LIST = [
  { id: 'base-list-1', body: 'List item 1' },
  { id: 'base-list-2', body: 'List item 2' },
  { id: 'base-list-3', body: 'List item 3' },
  { id: 'base-list-4', body: 'List item 4' },
];

const LIST_WITH_ACTIVE_AND_DISABLED_ELEMENTS = [
  { id: 'base-list-1', body: 'List item 1', active: false, disabled: false },
  { id: 'base-list-2', body: 'List item 2', active: true, disabled: false },
  { id: 'base-list-3', body: 'List item 3', active: false, disabled: false },
  { id: 'base-list-4', body: 'List item 4', active: false, disabled: true },
];

const ExamplesListGroup = () => (
  <>
    <h2><span>1. Основний список:</span></h2>
    <ListGroup
      items={BASE_LIST}
      keyExtractor={item => item.id}
      renderItem={item => <span>{item.body}</span>}
    />      

    <h2><span>2. Список з активними та вимкненими елементами:</span></h2>
    <ListGroup
      items={LIST_WITH_ACTIVE_AND_DISABLED_ELEMENTS}
      keyExtractor={item => item.id}
      renderItem={item => <span>{item.body} {item.disabled && "вимкнено"} { item.active && "активно"}</span>}
    />

    <h2><span>3. Список з користувацькими компонентами:</span></h2>    

    <ListGroup
      listName="Користувацький список"
      items={BASE_LIST}
      keyExtractor={item => item.id}
      renderItem={(item, index) => (
        <>
          <span>{item.body}</span>
          {index === 0 &&  <Badge value={2} inline />}
          {index === 1 &&  <Badge value="new" inline />}
          {index === 2 &&  <Badge value={10} warning inline />}
          {index === 3 &&  <Button>Оновити</Button>}
        </>
      )}
    />      
  </>
);

export default ExamplesListGroup;