import styles from './navigation-link.module.css';

type TNavigationLinkProps = {
  icon: React.ReactNode;
  text: string;
  isActive?: boolean;
};

const NavigationLink = ({ icon, text, isActive = false }: TNavigationLinkProps) => (
  <div className={`${styles.container} p-5`}>
    {icon}
    <span className={`text text_type_main-default ${!isActive ? 'text_color_inactive' : styles.active}`}>{text}</span>
  </div>
);

export default NavigationLink;
