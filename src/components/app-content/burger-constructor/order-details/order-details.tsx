import styles from './order-details.module.css';
import { getOrderDetailSelector } from '../../../../services/order-detail/selectors';
import { useSelector } from '../../../../hooks';

const OrderDetails = () => {
  const { number, isLoading, error } = useSelector(getOrderDetailSelector);

  if (isLoading) {
    return (
      <div className={styles.container}>
        <span className='text text_type_main-default m-5'>Отправка заказа... Пожалуйста, подождите!</span>
      </div>
    );
  }

  if (!isLoading && error) {
    return (
      <div className={styles.container}>
        <span className='text text_type_main-default m-5'>{`Ошибка отправки заказа: ${error}`}</span>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <span className='text text_type_digits-large' data-testid='order_detail_number'>
        {number}
      </span>
      <span className='text text_type_main-medium mt-8'>идентификатор заказа</span>
      <span className='text text_type_main-default mt-15'>Ваш заказ начали готовить</span>
      <span className='text text_type_main-default text_color_inactive mt-2'>Дождитесь готовности на орбитальной станции</span>
    </div>
  );
};

export default OrderDetails;
