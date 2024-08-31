import { IngredientModel } from '../../models';
import styles from './app-content.module.css';
import { BurgerConstructor } from './BurgerConstructor';
import { BurgerIngredients } from './BurgerIngredients';

type AppContentProps = {
  ingredients: IngredientModel[];
};

const AppContent = ({ ingredients }: AppContentProps) => (
  <div className={styles.container}>
    <BurgerIngredients ingredients={ingredients} />
    <BurgerConstructor ingredients={ingredients} />
  </div>
);

export default AppContent;
