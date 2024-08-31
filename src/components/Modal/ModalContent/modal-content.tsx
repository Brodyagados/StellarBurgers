import styles from './modal-content.module.css';
import { ModalHeader } from '../ModalHeader';

type ModalContentProps = {
  title?: string;
  onClick: () => void;
};

const ModalContent = ({ children, title, onClick }: React.PropsWithChildren<ModalContentProps>) => {
  return (
    <div className={`${styles.container} pr-10 pt-10 pl-10 pb-15`}>
      <ModalHeader title={title} onClick={onClick} />
      {children}
    </div>
  );
};

export default ModalContent;
