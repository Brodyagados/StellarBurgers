import styles from './modal-overlay.module.css';

type TModalOverlayProps = {
  onClick: () => void;
};

const ModalOverlay = ({ onClick }: TModalOverlayProps) => <div className={styles.container} onClick={onClick}></div>;

export default ModalOverlay;
