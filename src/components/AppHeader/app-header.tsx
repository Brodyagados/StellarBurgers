import styles from './app-header.module.css';
import { BurgerIcon, ListIcon, Logo, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { NavigationLink } from './NavigationLink';

const AppHeader = () => {
  return (
    <nav className={`${styles.container} p-4`}>
      <div className={styles.leftActions}>
        <NavigationLink text='Конструктор' icon={<BurgerIcon type='primary' />} isActive />
        <NavigationLink text='Лента заказов' icon={<ListIcon type='secondary' />} />
      </div>
      <Logo />
      <div className={styles.rightActions}>
        <NavigationLink text='Личный кабинет' icon={<ProfileIcon type='secondary' />} />
      </div>
    </nav>
  );
};

export default AppHeader;
