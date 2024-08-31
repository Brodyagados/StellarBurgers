import styles from './burger-ingredients.module.css';
import { Ingredients } from './Ingredients';
import { Tabs } from './Tabs';
import { Title } from './Title';

const BurgerIngredients = () => (
  <div className={styles.container}>
    <Title text='Соберите бургер' />
    <Tabs />
    <Ingredients />
  </div>
);

export default BurgerIngredients;
