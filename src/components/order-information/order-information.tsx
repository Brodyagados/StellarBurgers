import { CurrencyIcon, FormattedDate } from '@ya.praktikum/react-developer-burger-ui-components';
import { useSelector } from '../../hooks';
import { TIngredientModel, TOrderModel } from '../../models';
import { getIngredientsByIdsSelector } from '../../services/ingredients-list/selectors';
import { orderStatusMetadata } from '../../utils/constants/order-status';
import styles from './order-information.module.css';
import { useMemo } from 'react';

const order: TOrderModel = {
  _id: '67221a90b27b06001c3e5207',
  ingredients: [
    '643d69a5c3f7b9001cfa093c',
    '643d69a5c3f7b9001cfa094a',
    '643d69a5c3f7b9001cfa0944',
    '643d69a5c3f7b9001cfa0941',
    '643d69a5c3f7b9001cfa0946',
    '643d69a5c3f7b9001cfa0940',
    '643d69a5c3f7b9001cfa093c'
  ],
  status: 'done',
  name: 'Астероидный краторный минеральный традиционный-галактический био-марсианский метеоритный бургер',
  createdAt: '2024-10-30T11:37:52.123Z',
  updatedAt: '2024-10-30T11:37:52.900Z',
  number: 58132
};

type TUniqueIngredient = {
  ingredient: TIngredientModel;
  count: number;
};

const OrderInformation = () => {
  const { number, createdAt, name, ingredients, status } = order;
  const ingredientsInfo = useSelector((store) => getIngredientsByIdsSelector(store, ingredients));
  const statusMetadata = orderStatusMetadata[status];

  const { uniqueIngredients, total } = useMemo(
    () =>
      ingredientsInfo.reduce(
        (result: { uniqueIngredients: Map<string, TUniqueIngredient>; total: TIngredientModel['price'] }, ingredient) => ({
          uniqueIngredients: result.uniqueIngredients.set(ingredient._id, {
            ingredient,
            count: result.uniqueIngredients.has(ingredient._id) ? result.uniqueIngredients.get(ingredient._id)!.count + 1 : 1
          }),
          total: result.total + ingredient.price
        }),
        {
          uniqueIngredients: new Map(),
          total: 0
        }
      ),
    [ingredientsInfo]
  );

  return (
    <div className={`p-6 ${styles.container}`}>
      <p className={`text text_type_digits-default ${styles.number}`}>{`#${number}`}</p>
      <p className='pt-10 text text_type_main-medium'>{name}</p>
      <p className='pt-3 text text_type_main-small' style={{ color: statusMetadata.color }}>
        {statusMetadata.description}
      </p>
      <p className='pt-15 text text_type_main-medium'>Состав:</p>
      <div className={`pt-6 ${styles.ingredients}`}>
        {Array.from(uniqueIngredients).map(([_, { ingredient, count }]) => (
          <div key={ingredient._id} className={styles.ingredient}>
            <img className={styles.icon} src={ingredient.image} />
            <span className='pl-4 text text_type_main-small'>{ingredient.name}</span>
            <div className={`pl-4 ${styles.total}`}>
              <span className='text text_type_digits-default'>{`${count} x ${ingredient.price}`}</span>
              <CurrencyIcon type='primary' />
            </div>
          </div>
        ))}
      </div>
      <div className={`pt-10 ${styles.footer}`}>
        <FormattedDate date={new Date(createdAt)} className='text text_type_main-default text_color_inactive' />
        <div className={`ml-6 ${styles.total}`}>
          <span className='text text_type_digits-default'>{total}</span>
          <CurrencyIcon type='primary' />
        </div>
      </div>
    </div>
  );
};

export default OrderInformation;
