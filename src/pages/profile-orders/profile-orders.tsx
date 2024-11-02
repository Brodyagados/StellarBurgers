import styles from './profile-orders.module.css';
import { Link, useLocation } from 'react-router-dom';
import { Order } from '../../components/order';
import { useDispatch, useSelector } from '../../hooks';
import { useEffect } from 'react';
import { getOrdersListSelector } from '../../services/feed/selectors';
import { WEB_SOCKET_PROFILE_ORDERS_URL } from '../../utils/constants';
import { connect, disconnect } from '../../services/feed/actions';

const ProfileOrdersPage = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const ordersList = useSelector(getOrdersListSelector);

  useEffect(() => {
    dispatch(connect(`${WEB_SOCKET_PROFILE_ORDERS_URL}?token=${localStorage.getItem('accessToken')?.replace('Bearer ', '')}`));

    return () => {
      dispatch(disconnect());
    };
  }, []);

  return (
    ordersList && (
      <div className={styles.container}>
        {ordersList.orders.map((order) => (
          <Link key={order._id} to={`/profile/orders/${order.number}`} state={{ backgroundLocation: location }}>
            <Order data={order} hasStatus />
          </Link>
        ))}
      </div>
    )
  );
};

export default ProfileOrdersPage;
