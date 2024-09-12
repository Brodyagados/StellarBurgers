import styles from './order-details.module.css';

const OrderDetails = () => {
  // тестовые данные для первого спринта
  const orederNumber = '034536';

  return (
    <div className={styles.container}>
      <span className='text text_type_digits-large'>{orederNumber}</span>
      <span className='text text_type_main-medium mt-8'>идентификатор заказа</span>
      <span className='text text_type_main-default mt-15'>Ваш заказ начали готовить</span>
      <span className='text text_type_main-default text_color_inactive mt-2'>Дождитесь готовности на орбитальной станции</span>
    </div>
  );
};

export default OrderDetails;
