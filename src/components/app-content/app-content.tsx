import styles from './app-content.module.css';
import { BurgerConstructor } from './burger-constructor';
import { BurgerIngredients } from './burger-ingredients';

const AppContent = () => (
  <div className={styles.container}>
    <BurgerIngredients />
    <BurgerConstructor />
  </div>
);

export default AppContent;
