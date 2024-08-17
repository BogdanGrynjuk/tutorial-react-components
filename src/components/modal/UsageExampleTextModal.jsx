import Button from 'components/button/Button';
import React, { useState } from 'react';
import Modal from './Modal';
import { TEXT_MODAL } from '../../constants/modalRoots';

const UsageExampleTextModal = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleShowModal = () => {
    setIsOpenModal(true);
  };
  const handleHideModal = () => {
    setIsOpenModal(false);
  };

  return (
    <>
      <Button onClick={handleShowModal}>Відкрити модальне вікно</Button>
      {isOpenModal && (
        <Modal modalRoot={TEXT_MODAL} closeModal={handleHideModal}>
          <p style={{ padding: '20px' }}>
            Натисніть клавішу Escape або натисніть лівою кнопкою миші поза
            менами модального вікна щоб закрити його
          </p>
        </Modal>
      )}
    </>
  );
};

export default UsageExampleTextModal;
