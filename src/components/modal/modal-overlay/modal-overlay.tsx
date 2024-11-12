import styles from './modal-overlay.module.css';

type TModalOverlayProps = {
  onClick: () => void;
};

const ModalOverlay = ({ onClick }: TModalOverlayProps) => (
  <div className={styles.container} onClick={onClick} data-testid='modal_overlay'></div>
);

export default ModalOverlay;
