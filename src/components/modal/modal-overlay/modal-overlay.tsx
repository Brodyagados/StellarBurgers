import styles from './modal-overlay.module.css';

type ModalOverlayProps = {
  onClick: () => void;
};

const ModalOverlay = ({ onClick }: ModalOverlayProps) => <div className={styles.container} onClick={onClick}></div>;

export default ModalOverlay;
