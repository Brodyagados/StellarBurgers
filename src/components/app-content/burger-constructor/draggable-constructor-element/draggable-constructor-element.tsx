import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './draggable-constructor-element.module.css';

type DraggableConstructorElementProps = {
  text: string;
  price: number;
  image: string;
  type?: 'top' | 'bottom';
  isLocked?: boolean;
};

const DraggableConstructorElement = ({ text, price, image, type, isLocked = false }: DraggableConstructorElementProps) => (
  <div className={`${styles.container} ${isLocked ? 'ml-6' : ''}`}>
    {!isLocked && <DragIcon type='primary' />}
    <ConstructorElement extraClass='ml-6' type={type} text={text} price={price} thumbnail={image} isLocked={isLocked} />
  </div>
);

export default DraggableConstructorElement;
