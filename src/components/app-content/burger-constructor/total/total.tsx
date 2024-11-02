import { Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './total.module.css';
import { useState } from 'react';
import { Modal } from '../../../modal';
import OrderDetails from '../order-details/order-details';
import { submitOrder } from '../../../../services/order-detail/actions';
import { getIngredientsInConstructorSelector } from '../../../../services/ingredients-in-constructor/selectors';
import { clearIngredientsInConstructor } from '../../../../services/ingredients-in-constructor/actions';
import { getOrderDetailSelector } from '../../../../services/order-detail/selectors';
import { useNavigate } from 'react-router-dom';
import { getUserSelector } from '../../../../services/user/selectors';
import { routes } from '../../../../utils/constants';
import { useDispatch, useSelector } from '../../../../hooks';

type TTotalProps = {
  value: number;
};

const Total = ({ value }: TTotalProps) => {
  const navigate = useNavigate();
  const user = useSelector(getUserSelector);
  const [showDetail, setShowDetail] = useState<boolean>(false);
  const dispatch = useDispatch();
  const { bun, ingredients } = useSelector(getIngredientsInConstructorSelector);
  const { error } = useSelector(getOrderDetailSelector);

  const handleShowClick = () => {
    if (!user) {
      navigate(routes.LOGIN);
      return;
    }

    dispatch(submitOrder([bun!._id, ...ingredients.map((item) => item._id), bun!._id]));
    setShowDetail(true);
  };
  const handleCloseClick = () => {
    setShowDetail(false);
    !error && dispatch(clearIngredientsInConstructor());
  };

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
