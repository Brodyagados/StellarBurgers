import { NavLink, To } from 'react-router-dom';
import styles from './profile-navigate-item.module.css';

type TProfileNavigateItemProps = {
  to: To;
  text: string;
};

const ProfileNavigateItem = ({ to, text }: TProfileNavigateItemProps) => (
  <NavLink
    to={to}
    className={({ isActive }) => `text text_type_main-medium ${isActive ? styles.container : 'text_color_inactive'}`}
    end
  >
    {text}
  </NavLink>
);

export default ProfileNavigateItem;
