import { CurrencyIcon, FormattedDate } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './order.module.css';
import { useSelector } from '../../hooks';
import { getIngredientsByIdsSelector } from '../../services/ingredients-list/selectors';
import { useMemo } from 'react';
import { TIngredientModel, TOrderModel } from '../../models';
import { orderStatusMetadata } from '../../utils/constants/order-status';

const MAX_VISIBLE_INGREDIENTS = 6;

type TOrderProps = {
  data: TOrderModel;
  hasStatus?: boolean;
};

const Order = ({ data: { number, createdAt, name, ingredients, status }, hasStatus = false }: TOrderProps) => {
  const ingredientsInfo = useSelector((store) => getIngredientsByIdsSelector(store, ingredients));
  const statusMetadata = orderStatusMetadata[status];

  const { total, icons, unvisibleIngredientsCount } = useMemo(
    () => ({
      ...ingredientsInfo.reduce(
        (result: { total: TIngredientModel['price']; icons: TIngredientModel['image'][] }, ingredient) => ({
          total: result.total + ingredient.price,
          icons: [...result.icons, ingredient.image]
        }),
        { total: 0, icons: [] }
      ),
      unvisibleIngredientsCount:
        ingredientsInfo.length > MAX_VISIBLE_INGREDIENTS ? ingredientsInfo.length - MAX_VISIBLE_INGREDIENTS : 0
    }),
    [ingredientsInfo]
  );

  return (
    <div className={`p-6 ${styles.container}`}>
      <div className={styles.header}>
        <p className='text text_type_digits-default'>{`#${number}`}</p>
        <FormattedDate date={new Date(createdAt)} className='text text_type_main-default text_color_inactive' />
      </div>
      <p className='pt-6 text text_type_main-medium'>{name}</p>
      {hasStatus && (
        <p className='pt-2 text text_type_main-small' style={{ color: statusMetadata.color }}>
          {statusMetadata.description}
        </p>
      )}
      <div className={`mt-6 ${styles.main}`}>
        <div className={styles.ingredients}>
          {icons.slice(0, MAX_VISIBLE_INGREDIENTS).map((icon, index, arr) => (
            <div className={styles.ingredient} style={{ zIndex: arr.length - index }}>
              <img key={index} src={icon} className={styles.icon} />
              {MAX_VISIBLE_INGREDIENTS === index + 1 && (
                <span className={`text text_type_main-small ${styles.unvisibleIngredientsCounter}`}>
                  {`+${unvisibleIngredientsCount}`}
                </span>
              )}
            </div>
          ))}
        </div>
        <div className={`ml-6 ${styles.total}`}>
          <span className='text text_type_digits-default'>{total}</span>
          <CurrencyIcon type='primary' />
        </div>
      </div>
    </div>
  );
};

export default Order;
