import styles from './ingredients.module.css';
import { useMemo } from 'react';
import { getIngredientTypeDataList } from '../../../../utils/constants';
import { Group } from './group';
import { IngredientModel } from '../../../../models';
import { Modal } from '../../../modal';
import { IngredientDetails } from '../ingredient-details';
import { useDispatch, useSelector } from 'react-redux';
import { getIngredientsSelector } from '../../../../services/ingredients-list/selectors';
import { TIngredientsListState } from '../../../../services/ingredients-list/reducer';
import { removeIngredientDetail } from '../../../../services/ingredient-detail/actions';
import { getIngredientDetailSelector } from '../../../../services/ingredient-detail/selectors';

type IngredientsByTypeModel = Record<string, IngredientModel[]>;

const Ingredients = () => {
  const { ingredients, isLoading, error } = useSelector<TIngredientsListState, TIngredientsListState>(getIngredientsSelector);

  const ingredientDetail = useSelector(getIngredientDetailSelector);
  const dispatch = useDispatch();

  const handleDetailCloseClick = () => {
    dispatch(removeIngredientDetail());
  };

  const ingredientsByType = useMemo(
    () =>
      ingredients.reduce<IngredientsByTypeModel>(
        (result, currentValue) => ({
          ...result,
          [currentValue.type]: result[currentValue.type] ? [...result[currentValue.type], currentValue] : [currentValue]
        }),
        {}
      ),
    [ingredients]
  );

  if (isLoading) {
    return <span className='text text_type_main-default m-5'>Загрузка ингредиентов... Пожалуйста, подождите!</span>;
  }

  if (!isLoading && error) {
    return <span className='text text_type_main-default m-5'>{`Ошибка загрузки ингредиентов: ${error}`}</span>;
  }

  if (!isLoading && ingredients.length === 0) {
    return <span className='text text_type_main-default m-5'>Список ингредиентов пуст!</span>;
  }

  return (
    <>
      <ul className={`${styles.scrollableList} mt-10`}>
        {getIngredientTypeDataList().map(({ value: type, description }) => (
          <li key={type}>
            <Group text={description} items={ingredientsByType[type] ?? []} />
          </li>
        ))}
      </ul>
      {ingredientDetail && (
        <Modal title='Детали ингредиента' onCloseClick={handleDetailCloseClick}>
          <IngredientDetails data={ingredientDetail} />
        </Modal>
      )}
    </>
  );
};

export default Ingredients;
