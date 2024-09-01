import styles from './modal.module.css';
import { createPortal } from 'react-dom';
import { ModalOverlay } from './modal-overlay';
import { ModalContent } from './modal-content';
import { useEffect } from 'react';

type ModalProps = {
  title?: string;
  onCloseClick: () => void;
};

const modalRoot = document.getElementById('modals')!;

const Modal = ({ children, title, onCloseClick }: React.PropsWithChildren<ModalProps>) => {
  const closeDetailByEscKey = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      e.preventDefault();
      onCloseClick();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', closeDetailByEscKey);

    return () => {
      document.removeEventListener('keydown', closeDetailByEscKey);
    };
  }, []);

  return createPortal(
    <div className={styles.container}>
      <ModalOverlay onClick={onCloseClick} />
      <ModalContent title={title} onClick={onCloseClick}>
        {children}
      </ModalContent>
    </div>,
    modalRoot
  );
};

export default Modal;
