import styles from './burger-constructor.module.css';
import { data } from '../../../utils/data';
import { useMemo } from 'react';
import { IngredientModel } from '../BurgerIngredients/Ingredients/ingredients';
import { ingredientType } from '../../../utils/constants';
import { DraggableConstructorElement } from './DraggableConstructorElement';
import { Total } from './Total';

type TestDataModel = {
  bun: IngredientModel;
  mains: IngredientModel[];
  totalPrice: number;
};

const BurgerConstructor = () => {
  //тестовые данные для конструктора для первого спринта
  const { bun, mains, totalPrice } = useMemo<TestDataModel>(
    () => ({
      bun: data.find(({ type }) => type === ingredientType.Bun)!,
      mains: data.filter(({ type }) => type !== ingredientType.Bun),
      totalPrice: data.reduce<number>((result, currentValue) => (result += currentValue.price), 0)
    }),
    []
  );

  return (
    <div className={`${styles.container} pt-25`}>
      <DraggableConstructorElement type='top' text={bun.name} price={bun.price} image={bun.image} isLocked />
      <div className={`${styles.scrollableList} mt-4 mb-4`}>
        {mains.map((item) => (
          <DraggableConstructorElement key={item._id} text={item.name} price={item.price} image={item.image} />
        ))}
      </div>
      <DraggableConstructorElement type='bottom' text={bun.name} price={bun.price} image={bun.image} isLocked />
      <Total value={totalPrice} />
    </div>
  );
};

export default BurgerConstructor;
