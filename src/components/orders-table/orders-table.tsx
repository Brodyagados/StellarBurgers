import styles from './orders-table.module.css';
import { useMemo } from 'react';
import { TOrdersListModel } from '../../models';
import { orderStatus } from '../../utils/constants/order-status';

const MAX_ORDERS_PER_COLUMN = 10;

type TOrdersTableProps = {
  data: TOrdersListModel;
};

const OrdersTable = ({ data: { orders, total, totalToday } }: TOrdersTableProps) => {
  const [doneOrders, inProgressOrders] = useMemo(
    () => [
      orders.filter((order) => order.status === orderStatus.Done).slice(0, 2 * MAX_ORDERS_PER_COLUMN),
      // TODO: переделать под статус "в работе"
      orders.filter((order) => order.status === orderStatus.Done).slice(0, 2 * MAX_ORDERS_PER_COLUMN)
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
              <p className={`text text_type_digits-default`}>{order.number}</p>
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
