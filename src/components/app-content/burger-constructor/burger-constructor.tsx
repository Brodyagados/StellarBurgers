import styles from './burger-constructor.module.css';
import { useMemo } from 'react';
import { DraggableConstructorElement } from './draggable-constructor-element';
import { Total } from './total';
import { useSelector } from 'react-redux';
import { TIngredientsInConstructorState } from '../../../services/ingredients-in-constructor/reducer';
import { getIngredientsInConstructorSelector } from '../../../services/ingredients-in-constructor/selectors';
import { IngredientsContainer } from './ingredients-container';

const BurgerConstructor = () => {
  const { bun, ingredients } = useSelector<TIngredientsInConstructorState, TIngredientsInConstructorState>(
    getIngredientsInConstructorSelector
  );

  const totalPrice = useMemo<number>(
    () => ingredients.reduce<number>((result, currentValue) => (result += currentValue.price), 0) + (bun ? 2 * bun.price : 0),
    [bun, ingredients]
  );

  return (
    <div className={`${styles.container} pt-25`}>
      {bun ? (
        <DraggableConstructorElement type='top' text={`${bun.name} (верх)`} price={bun.price} image={bun.image} isLocked />
      ) : (
        <IngredientsContainer type='bun-top' />
      )}
      <div className={`${styles.scrollableList} mt-4 mb-4`}>
        {ingredients.length > 0 ? (
          ingredients.map((item) => (
            <DraggableConstructorElement key={item._id} text={item.name} price={item.price} image={item.image} />
          ))
        ) : (
          <IngredientsContainer type='ingredient' />
        )}
      </div>
      {bun ? (
        <DraggableConstructorElement type='bottom' text={`${bun.name} (низ)`} price={bun.price} image={bun.image} isLocked />
      ) : (
        <IngredientsContainer type='bun-bottom' />
      )}
      {bun && ingredients.length > 0 && <Total value={totalPrice} />}
    </div>
  );
};

export default BurgerConstructor;
