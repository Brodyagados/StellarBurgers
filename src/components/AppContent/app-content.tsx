import styles from './app-content.module.css';
import { BurgerIngredients } from './BurgerIngredients';

const AppContent = () => (
  <div className={styles.container}>
    <BurgerIngredients />
  </div>
);

export default AppContent;
