import styles from './app-header.module.css';
import { BurgerIcon, ListIcon, Logo, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { NavigationLink } from './NavigationLink';

const AppHeader = () => (
  <div className={styles.container}>
    <div className={styles.leftActions}>
      <NavigationLink text='Конструктор' icon={<BurgerIcon type='secondary' />} />
      <NavigationLink text='Лента заказов' icon={<ListIcon type='secondary' />} />
    </div>
    <Logo />
    <div className={styles.rightActions}>
      <NavigationLink text='Личный кабинет' icon={<ProfileIcon type='secondary' />} />
    </div>
  </div>
);

export default AppHeader;
