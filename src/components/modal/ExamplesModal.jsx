import React from 'react';
import UsageExampleTextModal from './UsageExampleTextModal';
import UsageExampleActionModal from './UsageExampleActionModal';

const ExamplesModal = () => {
  return (
    <>
      <h2>
        <span>
          1. Приклад використання базового модального вікна з текстовим
          повідомленням:
        </span>
      </h2>
      <UsageExampleTextModal />

      <h2>
        <span>
          2. Приклад використання модального вікна з інтерактивними елементами:
        </span>
      </h2>
      <UsageExampleActionModal />
    </>
  );
};

export default ExamplesModal;
