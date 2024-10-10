import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './draggable-constructor-element.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addIngredientCount } from '../../../../services/ingredients-list/actions';
import {
  removeIngredientInConstructor,
  setIngredientsInConstructor
} from '../../../../services/ingredients-in-constructor/actions';
import { useDrag, useDrop } from 'react-dnd';
import { useCallback, useRef } from 'react';
import { getIngredientsInConstructorSelector } from '../../../../services/ingredients-in-constructor/selectors';

type TDraggableConstructorElementProps = {
  id: string;
  uniqueId?: string;
  text: string;
  price: number;
  image: string;
  type?: 'top' | 'bottom';
  index?: number;
  isLocked?: boolean;
};

const DraggableConstructorElement = ({
  id,
  uniqueId,
  text,
  price,
  image,
  type,
  index,
  isLocked = false
}: TDraggableConstructorElementProps) => {
  const dispatch = useDispatch();
  const { ingredients } = useSelector(getIngredientsInConstructorSelector);

  const moveIngredient = useCallback(
    (dragIndex: number, hoverIndex: number) => {
      const dragIngredient = ingredients[dragIndex];
      const newIngredients = [...ingredients];
      newIngredients.splice(dragIndex, 1);
      newIngredients.splice(hoverIndex, 0, dragIngredient);

      dispatch(setIngredientsInConstructor(newIngredients));
    },
    [ingredients]
  );

  const ref = useRef<HTMLDivElement>(null);

  const [{ isDragging }, dragRef] = useDrag({
    type: 'draggableIngredient',
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  });

  const [, dropRef] = useDrop({
    accept: 'draggableIngredient',
    hover: (item: number, monitor) => {
      // TODO: доработать типизацию на 5 спринте!!!
      //@ts-ignore
      const dragIndex = item.index;
      const hoverIndex = index!;

      if (dragIndex === hoverIndex) {
        return;
      }

      const hoverBoundingRect = ref.current!.getBoundingClientRect();
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffcet = monitor.getClientOffset();
      const hoverClientY = clientOffcet!.y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      moveIngredient(dragIndex, hoverIndex);

      // TODO: доработать типизацию на 5 спринте!!!
      //@ts-ignore
      item.index = hoverIndex;
    }
  });

  dragRef(dropRef(ref));

  const opacity = isDragging ? 0 : 1;

  const handleClose = (id: string, uniqueId: string) => {
    dispatch(addIngredientCount(id, -1));
    dispatch(removeIngredientInConstructor(uniqueId));
  };

  return (
    <div className={`${styles.container} ${isLocked ? 'ml-6' : ''}`} {...(!isLocked && uniqueId && { ref, style: { opacity } })}>
      {!isLocked && <DragIcon type='primary' />}
      <ConstructorElement
        extraClass='ml-6'
        type={type}
        text={text}
        price={price}
        thumbnail={image}
        isLocked={isLocked}
        {...(!isLocked && uniqueId && { handleClose: () => handleClose(id, uniqueId) })}
      />
    </div>
  );
};

export default DraggableConstructorElement;
