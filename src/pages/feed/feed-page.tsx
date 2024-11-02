import styles from './feed-page.module.css';
import { Title } from '../../components/app-content/burger-ingredients/title';
import { Order } from '../../components/order';
import { OrdersTable } from '../../components/orders-table';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from '../../hooks';
import { useEffect } from 'react';
import { connect, disconnect } from '../../services/feed/actions';
import { WEB_SOCKET_ALL_ORDERS_URL } from '../../utils/constants';
import { getOrdersListSelector } from '../../services/feed/selectors';

const FeedPage = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const ordersList = useSelector(getOrdersListSelector);

  useEffect(() => {
    dispatch(connect(WEB_SOCKET_ALL_ORDERS_URL));

    return () => {
      dispatch(disconnect());
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <Title text='Лента заказов' />
        <div className={`mt-6 ${styles.content}`}>
          <div className={styles.list}>
            {ordersList?.orders?.map((order) => (
              <Link key={order._id} to={`/feed/${order.number}`} state={{ backgroundLocation: location }}>
                <Order data={order} />
              </Link>
            ))}
          </div>
          <div className={styles.table}>{ordersList && <OrdersTable data={ordersList} />}</div>
        </div>
      </div>
    </div>
  );
};

export default FeedPage;
