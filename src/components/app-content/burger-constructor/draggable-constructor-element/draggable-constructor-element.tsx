import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './draggable-constructor-element.module.css';
import { useDispatch } from 'react-redux';
import { addIngredientCount } from '../../../../services/ingredients-list/actions';
import { removeIngredientInConstructor } from '../../../../services/ingredients-in-constructor/actions';

type DraggableConstructorElementProps = {
  id: string;
  itemId?: number;
  text: string;
  price: number;
  image: string;
  type?: 'top' | 'bottom';
  isLocked?: boolean;
};

const DraggableConstructorElement = ({
  id,
  itemId,
  text,
  price,
  image,
  type,
  isLocked = false
}: DraggableConstructorElementProps) => {
  const dispatch = useDispatch();

  const handleClose = (id: string, itemId: number) => {
    dispatch(addIngredientCount(id, -1));
    dispatch(removeIngredientInConstructor(itemId));
  };

  return (
    <div className={`${styles.container} ${isLocked ? 'ml-6' : ''}`}>
      {!isLocked && <DragIcon type='primary' />}
      <ConstructorElement
        extraClass='ml-6'
        type={type}
        text={text}
        price={price}
        thumbnail={image}
        isLocked={isLocked}
        {...(!isLocked && itemId && { handleClose: () => handleClose(id, itemId) })}
      />
    </div>
  );
};

export default DraggableConstructorElement;
