import styles from './profile-layout.module.css';
import { routes } from '../../utils/constants';
import { ProfileNavigateItem } from '../../components';
import { Outlet, useNavigate } from 'react-router-dom';
import { useCallback } from 'react';
import { AccountApi } from '../../api';

const ProfileLayout = () => {
  const navigate = useNavigate();

  const handleLogout = useCallback(async () => {
    const { success } = await AccountApi.logout();

    if (success) {
      navigate(routes.LOGIN);
    }
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.left}>
          <div className={styles.links}>
            <ProfileNavigateItem to={routes.PROFILE} text='Профиль' />
            <ProfileNavigateItem to={routes.PROFILE_ORDERS} text='История заказов' />
            <span className='text text_type_main-medium text_color_inactive' onClick={handleLogout}>
              Выход
            </span>
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default ProfileLayout;
