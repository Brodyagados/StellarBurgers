import styles from './modal.module.css';
import { createPortal } from 'react-dom';
import { ModalOverlay } from './ModalOverlay';
import { ModalContent } from './ModalContent';

type ModalProps = {
  title?: string;
  onCloseClick: () => void;
};

const modalRoot = document.getElementById('modals')!;

const Modal = ({ children, title, onCloseClick }: React.PropsWithChildren<ModalProps>) => {
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
