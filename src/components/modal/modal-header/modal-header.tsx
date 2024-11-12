import styles from './modal-header.module.css';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';

type TModalHeaderProps = {
  title?: string;
  onClick: () => void;
};

const ModalHeader = ({ title, onClick }: TModalHeaderProps) => {
  return (
    <header className={styles.container} data-testid='modal_title'>
      {title && <span className='text text_type_main-large'>{title}</span>}
      <button className={styles.closeButton} onClick={onClick} data-testid='modal_close_button'>
        <CloseIcon type='primary' />
      </button>
    </header>
  );
};

export default ModalHeader;
