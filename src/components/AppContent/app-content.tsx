import styles from './app-content.module.css';
import { BurgerConstructor } from './BurgerConstructor';
import { BurgerIngredients } from './BurgerIngredients';

const AppContent = () => (
  <div className={styles.container}>
    <BurgerIngredients />
    <BurgerConstructor />
  </div>
);

export default AppContent;
