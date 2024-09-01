import { IngredientModel } from '../../../../../models';
import styles from './item.module.css';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

type ItemProps = {
  data: IngredientModel;
  onClick: () => void;
};

const Item = ({ data, onClick }: ItemProps) => {
  return (
    <div className={styles.container} onClick={onClick}>
      <img className={`${styles.image} mx-4`} src={data.image} alt={`${data.name}.`} />
      <Counter count={1} size='default' extraClass='m-1' />
      <div className={styles.price}>
        <span className='text text_type_digits-default'>{data.price}</span>
        <CurrencyIcon type='primary' />
      </div>
      <span className={`${styles.title} text text_type_main-default`}>{data.name}</span>
    </div>
  );
};

export default Item;
