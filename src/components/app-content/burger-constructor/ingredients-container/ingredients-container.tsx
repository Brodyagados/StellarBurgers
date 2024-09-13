import styles from './ingredients-container.module.css';

type TIngredientsContainerProps = {
  type: 'bun-top' | 'ingredient' | 'bun-bottom';
};

const IngredientsContainer = ({ type }: TIngredientsContainerProps) => (
  <div className={`${styles.container} ${styles[type]}`}>
    <span className='text text_type_main-default'>{`Выберите ${type === 'ingredient' ? 'начинку' : 'булки'}`}</span>
  </div>
);

export default IngredientsContainer;
