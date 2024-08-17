import Button from 'components/button/Button';
import React, { useState } from 'react';
import Modal from './Modal';
import { ACTION_MODAL } from '../../constants/modalRoots';
import CustomComponent from './CustomComponent';

const UsageExampleActionModal = () => {
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
        <Modal modalRoot={ACTION_MODAL} closeModal={handleHideModal}>
          <CustomComponent closeModal={handleHideModal} />
        </Modal>
      )}
    </>
  );
};

export default UsageExampleActionModal;
