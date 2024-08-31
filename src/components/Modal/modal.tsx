import styles from './modal.module.css';
import { createPortal } from 'react-dom';
import { ModalOverlay } from './ModalOverlay';
import { ModalContent } from './ModalContent';
import { useState } from 'react';

type ModalProps = {
  title: string;
};

const modalRoot = document.getElementById('modals')!;

const Modal = ({ children, title }: React.PropsWithChildren<ModalProps>) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const handleClose = () => setIsOpen(false);

  return createPortal(
    isOpen && (
      <div className={styles.container}>
        <ModalOverlay onClick={handleClose} />
        <ModalContent title={title} onClick={handleClose}>
          {children}
        </ModalContent>
      </div>
    ),
    modalRoot
  );
};

export default Modal;
