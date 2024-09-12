import { IngredientModel } from '../../../models';
import styles from './burger-ingredients.module.css';
import { Ingredients } from './ingredients';
import { Tabs } from './tabs';
import { Title } from './title';

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
