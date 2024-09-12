import styles from './burger-ingredients.module.css';
import { Ingredients } from './ingredients';
import { Tabs } from './tabs';
import { Title } from './title';

const BurgerIngredients = () => (
  <div className={styles.container}>
    <Title text='Соберите бургер' />
    <Tabs />
    <Ingredients />
  </div>
);

export default BurgerIngredients;
