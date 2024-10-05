import styles from './burger-constructor.module.css';
import { useCallback, useMemo } from 'react';
import { DraggableConstructorElement } from './draggable-constructor-element';
import { Total } from './total';
import { useDispatch, useSelector } from 'react-redux';
import { TIngredientsInConstructorState } from '../../../services/ingredients-in-constructor/reducer';
import { getIngredientsInConstructorSelector } from '../../../services/ingredients-in-constructor/selectors';
import { IngredientsContainer } from './ingredients-container';
import { useDrop } from 'react-dnd';
import { addBunInConstructor, addIngredientInConstructor } from '../../../services/ingredients-in-constructor/actions';
import { IngredientModel } from '../../../models';
import { addIngredientCount } from '../../../services/ingredients-list/actions';

const BurgerConstructor = () => {
  const dispatch = useDispatch();
  const { bun, ingredients } = useSelector<TIngredientsInConstructorState, TIngredientsInConstructorState>(
    getIngredientsInConstructorSelector
  );

  const handleOnDropBun = useCallback(
    (item: IngredientModel) => {
      dispatch(addBunInConstructor(item));
      if (bun) {
        dispatch(addIngredientCount(bun._id, -2));
      }
      dispatch(addIngredientCount(item._id, 2));
    },
    [bun]
  );

  const handleOnDropIngredient = useCallback((item: IngredientModel) => {
    dispatch(addIngredientInConstructor(item));
    dispatch(addIngredientCount(item._id, 1));
  }, []);

  const totalPrice = useMemo<number>(
    () => ingredients.reduce<number>((result, currentValue) => (result += currentValue.price), 0) + (bun ? 2 * bun.price : 0),
    [bun, ingredients]
  );

  const [, dropBunTopRef] = useDrop({
    accept: 'bun',
    drop: handleOnDropBun
  });

  const [, dropIngredientRef] = useDrop({
    accept: 'ingredient',
    drop: handleOnDropIngredient
  });

  const [, dropBunBottomRef] = useDrop({
    accept: 'bun',
    drop: handleOnDropBun
  });

  return (
    <div className={`${styles.container} pt-25`}>
      <div ref={dropBunTopRef}>
        {bun ? (
          <DraggableConstructorElement
            id={bun._id}
            type='top'
            text={`${bun.name} (верх)`}
            price={bun.price}
            image={bun.image}
            isLocked
          />
        ) : (
          <IngredientsContainer type='bun-top' />
        )}
      </div>
      <div className={`${styles.scrollableList} mt-4 mb-4`} ref={dropIngredientRef}>
        {ingredients.length > 0 ? (
          ingredients.map((item, index) => (
            <DraggableConstructorElement
              key={item.uniqueId}
              id={item._id}
              uniqueId={item.uniqueId}
              text={item.name}
              price={item.price}
              image={item.image}
              index={index}
            />
          ))
        ) : (
          <IngredientsContainer type='ingredient' />
        )}
      </div>
      <div ref={dropBunBottomRef}>
        {bun ? (
          <DraggableConstructorElement
            id={bun._id}
            type='bottom'
            text={`${bun.name} (низ)`}
            price={bun.price}
            image={bun.image}
            isLocked
          />
        ) : (
          <IngredientsContainer type='bun-bottom' />
        )}
      </div>
      {bun && ingredients.length > 0 && <Total value={totalPrice} />}
    </div>
  );
};

export default BurgerConstructor;
