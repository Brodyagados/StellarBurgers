import styles from './navigation-link.module.css';

type NavigationLinkProps = {
  icon: React.ReactNode;
  text: string;
};

const NavigationLink = ({ icon, text }: NavigationLinkProps) => (
  <div className={`${styles.container} text text_type_main-default`}>
    {icon}
    {text}
  </div>
);

export default NavigationLink;
