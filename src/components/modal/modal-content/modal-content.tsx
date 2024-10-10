import styles from './modal-content.module.css';
import { ModalHeader } from '../modal-header';

type TModalContentProps = {
  title?: string;
  onClick: () => void;
};

const ModalContent = ({ children, title, onClick }: React.PropsWithChildren<TModalContentProps>) => {
  return (
    <div className={`${styles.container} pr-10 pt-10 pl-10 pb-15`}>
      <ModalHeader title={title} onClick={onClick} />
      <main>{children}</main>
    </div>
  );
};

export default ModalContent;
