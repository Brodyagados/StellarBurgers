import styles from './profile-layout.module.css';
import { routes } from '../../utils/constants';
import { ProfileNavigateItem } from '../../components';
import { Outlet } from 'react-router-dom';

const ProfileLayout = () => (
  <div className={styles.container}>
    <div className={styles.content}>
      <div className={styles.left}>
        <div className={styles.links}>
          <ProfileNavigateItem to={routes.PROFILE} text='Профиль' />
          <ProfileNavigateItem to={routes.PROFILE_ORDERS} text='История заказов' />
          <ProfileNavigateItem to='/exit' text='Выход' />
        </div>
      </div>
      <Outlet />
    </div>
  </div>
);

export default ProfileLayout;
