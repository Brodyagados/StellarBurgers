import styles from './orders-table.module.css';
import { useMemo } from 'react';
import { TOrdersListModel } from '../../models';
import { orderStatus } from '../../utils/constants';

const MAX_ORDERS_PER_COLUMN = 10;
const MAX_COLUMNS_BY_STATUS = 2;
const INGREDIENTS_COUNT = MAX_COLUMNS_BY_STATUS * MAX_ORDERS_PER_COLUMN;

type TOrdersTableProps = {
  data: TOrdersListModel;
};

const OrdersTable = ({ data: { orders, total, totalToday } }: TOrdersTableProps) => {
  const [doneOrders, inProgressOrders] = useMemo(
    () => [
      orders.filter((order) => order.status === orderStatus.DONE).slice(0, INGREDIENTS_COUNT),
      orders.filter((order) => order.status === orderStatus.CREATED).slice(0, INGREDIENTS_COUNT)
    ],
    [orders]
  );

  return (
    <div>
      <div className={styles.orders}>
        <div>
          <p className='text text_type_main-medium'>Готовы:</p>
          <div className={`${styles.table} ${styles.green}`}>
            {doneOrders.map((order) => (
              <p key={order._id} className={`text text_type_digits-default`}>
                {order.number}
              </p>
            ))}
          </div>
        </div>
        <div>
          <p className='text text_type_main-medium'>В работе:</p>
          <div className={`${styles.table}`}>
            {inProgressOrders.map((order) => (
              <p className={`text text_type_digits-default`}>{order.number}</p>
            ))}
          </div>
        </div>
      </div>
      <p className='text text_type_main-medium mt-15'>Выполнено за все время:</p>
      <p className='text text_type_digits-large'>{total}</p>
      <p className='text text_type_main-medium mt-15'>Выполнено за сегодня:</p>
      <p className='text text_type_digits-large'>{totalToday}</p>
    </div>
  );
};

export default OrdersTable;
