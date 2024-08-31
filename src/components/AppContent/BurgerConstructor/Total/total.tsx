import { Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './total.module.css';

type TotalProps = {
  value: number;
};

const Total = ({ value }: TotalProps) => (
  <div className={`${styles.container} mt-10`}>
    <div className={styles.totalPrice}>
      <span className='text text_type_digits-medium'>{value}</span>
      <CurrencyIcon type='primary' />
    </div>
    <Button htmlType='button'>Оформить заказ</Button>
  </div>
);

export default Total;
