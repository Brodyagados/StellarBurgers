import styles from './modal-header.module.css';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';

type ModalHeaderProps = {
  title?: string;
  onClick: () => void;
};

const ModalHeader = ({ title, onClick }: ModalHeaderProps) => {
  return (
    <header className={styles.container}>
      {title && <span className='text text_type_main-large'>{title}</span>}
      <button className={styles.closeButton} onClick={onClick}>
        <CloseIcon type='primary' />
      </button>
    </header>
  );
};

export default ModalHeader;
