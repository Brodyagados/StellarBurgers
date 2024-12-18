import styles from './profile-layout.module.css';
import { routes } from '../../utils/constants';
import { ProfileNavigateItem } from '../../components';
import { Outlet } from 'react-router-dom';
import { useCallback } from 'react';
import { AccountApi } from '../../api';
import { setUser } from '../../services/user/actions';
import { useDispatch } from '../../hooks';

const ProfileLayout = () => {
  const dispatch = useDispatch();

  const handleLogout = useCallback(async () => {
    const { success } = await AccountApi.logout();

    if (success) {
      dispatch(setUser(null));
    }
  }, []);

  return (
    <div className={styles.container}>
      <div className={`mt-30 ${styles.content}`}>
        <div className={styles.left}>
          <div className={styles.links}>
            <ProfileNavigateItem to={routes.PROFILE} text='Профиль' />
            <ProfileNavigateItem to={routes.PROFILE_ORDERS} text='История заказов' />
            <span className='text text_type_main-medium text_color_inactive' onClick={handleLogout}>
              Выход
            </span>
          </div>
        </div>
        <div className={styles.right}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default ProfileLayout;
