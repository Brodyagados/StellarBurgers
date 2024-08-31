import styles from './burger-ingredients.module.css';
import { Ingredients } from './Ingredients';
import { IngredientModel } from './Ingredients/ingredients';
import { Tabs } from './Tabs';
import { Title } from './Title';

type BurgerIngredientsProps = {
  ingredients: IngredientModel[];
};

const BurgerIngredients = ({ ingredients }: BurgerIngredientsProps) => (
  <div className={styles.container}>
    <Title text='Соберите бургер' />
    <Tabs />
    <Ingredients data={ingredients} />
  </div>
);

export default BurgerIngredients;
