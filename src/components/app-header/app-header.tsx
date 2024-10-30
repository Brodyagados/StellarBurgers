import styles from './app-header.module.css';
import { BurgerIcon, ListIcon, Logo, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { NavigationLink } from './navigation-link';
import { Link, NavLink } from 'react-router-dom';
import { routes } from '../../utils/constants';

const AppHeader = () => {
  const getIconType = (isActive: boolean) => (isActive ? 'primary' : 'secondary');

  return (
    <nav className={`${styles.container} p-4`}>
      <div className={styles.leftActions}>
        <NavLink to={routes.HOME}>
          {({ isActive }) => (
            <NavigationLink text='Конструктор' icon={<BurgerIcon type={getIconType(isActive)} />} isActive={isActive} />
          )}
        </NavLink>
        <NavLink to={routes.FEED}>
          {({ isActive }) => (
            <NavigationLink text='Лента заказов' icon={<ListIcon type={getIconType(isActive)} />} isActive={isActive} />
          )}
        </NavLink>
      </div>
      <Link to={routes.HOME}>
        <Logo />
      </Link>
      <div className={styles.rightActions}>
        <NavLink to={routes.PROFILE}>
          {({ isActive }) => (
            <NavigationLink text='Личный кабинет' icon={<ProfileIcon type={getIconType(isActive)} />} isActive={isActive} />
          )}
        </NavLink>
      </div>
    </nav>
  );
};

export default AppHeader;
