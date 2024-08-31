import styles from './burger-constructor.module.css';
import { useMemo } from 'react';
import { ingredientType } from '../../../utils/constants';
import { DraggableConstructorElement } from './draggable-constructor-element';
import { Total } from './total';
import { IngredientModel } from '../../../models';

type TestDataModel = {
  bun?: IngredientModel;
  mains: IngredientModel[];
  totalPrice: number;
};

type BurgerConstructorProps = {
  ingredients: IngredientModel[];
};

const BurgerConstructor = ({ ingredients }: BurgerConstructorProps) => {
  //тестовые данные для конструктора для первого спринта
  const { bun, mains, totalPrice } = useMemo<TestDataModel>(
    () => ({
      bun: ingredients.find(({ type }) => type === ingredientType.Bun),
      mains: ingredients.filter(({ type }) => type !== ingredientType.Bun),
      totalPrice: ingredients.reduce<number>((result, currentValue) => (result += currentValue.price), 0)
    }),
    [ingredients]
  );

  return (
    <div className={`${styles.container} pt-25`}>
      {bun && <DraggableConstructorElement type='top' text={bun.name} price={bun.price} image={bun.image} isLocked />}
      <div className={`${styles.scrollableList} mt-4 mb-4`}>
        {mains.map((item) => (
          <DraggableConstructorElement key={item._id} text={item.name} price={item.price} image={item.image} />
        ))}
      </div>
      {bun && <DraggableConstructorElement type='bottom' text={bun.name} price={bun.price} image={bun.image} isLocked />}
      <Total value={totalPrice} />
    </div>
  );
};

export default BurgerConstructor;
