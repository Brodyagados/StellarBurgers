import { IngredientModel } from '../../../../../models';
import styles from './item.module.css';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDrag } from 'react-dnd';
import { Link, useLocation } from 'react-router-dom';

type ItemProps = {
  data: IngredientModel;
};

const Item = ({ data }: ItemProps) => {
  const location = useLocation();
  const [, dragBunRef] = useDrag({
    type: 'bun',
    item: data
  });

  const [, dragIngredientRef] = useDrag({
    type: 'ingredient',
    item: data
  });

  return (
    <Link to={`/ingredients/${data._id}`} state={{ backgroundLocation: location }}>
      <div className={styles.container} ref={data.type === 'bun' ? dragBunRef : dragIngredientRef}>
        <img className={`${styles.image} mx-4`} src={data.image} alt={`${data.name}.`} />
        {data.count > 0 && <Counter count={data.count} size='default' extraClass='m-1' />}
        <div className={styles.price}>
          <span className='text text_type_digits-default'>{data.price}</span>
          <CurrencyIcon type='primary' />
        </div>
        <span className={`${styles.title} text text_type_main-default`}>{data.name}</span>
      </div>
    </Link>
  );
};

export default Item;
