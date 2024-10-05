import { useDispatch } from 'react-redux';
import { IngredientModel } from '../../../../../models';
import styles from './item.module.css';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { setIngredientDetail } from '../../../../../services/ingredient-detail/actions';
import { useDrag } from 'react-dnd';

type ItemProps = {
  data: IngredientModel;
};

const Item = ({ data }: ItemProps) => {
  const [, dragBunRef] = useDrag({
    type: 'bun',
    item: data
  });

  const [, dragIngredientRef] = useDrag({
    type: 'ingredient',
    item: data
  });

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setIngredientDetail(data));
  };

  return (
    <div className={styles.container} onClick={handleClick} ref={data.type === 'bun' ? dragBunRef : dragIngredientRef}>
      <img className={`${styles.image} mx-4`} src={data.image} alt={`${data.name}.`} />
      {data.count > 0 && <Counter count={data.count} size='default' extraClass='m-1' />}
      <div className={styles.price}>
        <span className='text text_type_digits-default'>{data.price}</span>
        <CurrencyIcon type='primary' />
      </div>
      <span className={`${styles.title} text text_type_main-default`}>{data.name}</span>
    </div>
  );
};

export default Item;
