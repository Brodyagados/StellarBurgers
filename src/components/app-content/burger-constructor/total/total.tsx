import { Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './total.module.css';
import { useState } from 'react';
import { Modal } from '../../../modal';
import OrderDetails from '../order-details/order-details';
import { useDispatch, useSelector } from 'react-redux';
import { submitOrder } from '../../../../services/order-detail/actions';
import { getIngredientsInConstructorSelector } from '../../../../services/ingredients-in-constructor/selectors';
import { TIngredientsInConstructorState } from '../../../../services/ingredients-in-constructor/reducer';

type TotalProps = {
  value: number;
};

const Total = ({ value }: TotalProps) => {
  const [showDetail, setShowDetail] = useState<boolean>(false);
  const dispatch = useDispatch();
  const { bun, ingredients } = useSelector<TIngredientsInConstructorState, TIngredientsInConstructorState>(
    getIngredientsInConstructorSelector
  );

  const handleShowClick = () => {
    // TODO: доработать типизацию на 5 спринте!!!
    //@ts-ignore
    dispatch(submitOrder([bun!._id, ...ingredients.map((item) => item._id), bun!._id]));
    setShowDetail(true);
  };
  const handleCloseClick = () => setShowDetail(false);

  return (
    <div className={`${styles.container} mt-10`}>
      <div className={styles.totalPrice}>
        <span className='text text_type_digits-medium'>{value}</span>
        <CurrencyIcon type='primary' />
      </div>
      <Button htmlType='button' onClick={handleShowClick}>
        Оформить заказ
      </Button>
      {showDetail && (
        <Modal onCloseClick={handleCloseClick}>
          <OrderDetails />
        </Modal>
      )}
    </div>
  );
};

export default Total;
