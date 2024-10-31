import styles from './profile-orders.module.css';
import { Link, useLocation } from 'react-router-dom';
import { Order } from '../../components/order';
import { TOrdersListModel } from '../../models';

const ordersList: TOrdersListModel = {
  success: true,
  orders: [
    {
      _id: '67221b32b27b06001c3e520a',
      ingredients: ['643d69a5c3f7b9001cfa093c', '643d69a5c3f7b9001cfa0940', '643d69a5c3f7b9001cfa093c'],
      status: 'done',
      name: 'Краторный метеоритный бургер',
      createdAt: '2024-10-30T11:40:34.215Z',
      updatedAt: '2024-10-30T11:40:35.239Z',
      number: 58134
    },
    {
      _id: '67221b14b27b06001c3e5209',
      ingredients: ['643d69a5c3f7b9001cfa093d', '643d69a5c3f7b9001cfa093f', '643d69a5c3f7b9001cfa093d'],
      status: 'done',
      name: 'Флюоресцентный бессмертный бургер',
      createdAt: '2024-10-30T11:40:04.788Z',
      updatedAt: '2024-10-30T11:40:05.724Z',
      number: 58133
    },
    {
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
    },
    {
      _id: '672219e9b27b06001c3e5205',
      ingredients: [
        '643d69a5c3f7b9001cfa093e',
        '643d69a5c3f7b9001cfa0940',
        '643d69a5c3f7b9001cfa093c',
        '643d69a5c3f7b9001cfa093c'
      ],
      status: 'done',
      name: 'Краторный люминесцентный метеоритный бургер',
      createdAt: '2024-10-30T11:35:05.684Z',
      updatedAt: '2024-10-30T11:35:06.589Z',
      number: 58131
    },
    {
      _id: '6722186ab27b06001c3e51fd',
      ingredients: ['643d69a5c3f7b9001cfa093f', '643d69a5c3f7b9001cfa093c', '643d69a5c3f7b9001cfa093c'],
      status: 'done',
      name: 'Краторный бессмертный бургер',
      createdAt: '2024-10-30T11:28:42.992Z',
      updatedAt: '2024-10-30T11:28:43.789Z',
      number: 58130
    },
    {
      _id: '672216c5b27b06001c3e51fa',
      ingredients: [
        '643d69a5c3f7b9001cfa093c',
        '643d69a5c3f7b9001cfa093e',
        '643d69a5c3f7b9001cfa0940',
        '643d69a5c3f7b9001cfa093c'
      ],
      status: 'done',
      name: 'Краторный люминесцентный метеоритный бургер',
      createdAt: '2024-10-30T11:21:41.287Z',
      updatedAt: '2024-10-30T11:21:42.294Z',
      number: 58129
    }
  ],
  total: 123456,
  totalToday: 123
};

const ProfileOrdersPage = () => {
  const location = useLocation();

  return (
    <div className={styles.container}>
      {ordersList.orders.map((order) => (
        <Link key={order._id} to={`/profile/orders/${order._id}`} state={{ backgroundLocation: location }}>
          <Order data={order} hasStatus />
        </Link>
      ))}
    </div>
  );
};

export default ProfileOrdersPage;
