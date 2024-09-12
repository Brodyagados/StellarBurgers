import styles from './ingredients.module.css';
import { useMemo, useState } from 'react';
import { getIngredientTypeDataList } from '../../../../utils/constants';
import { Group } from './group';
import { IngredientModel } from '../../../../models';
import { Modal } from '../../../modal';
import { IngredientDetails } from '../ingredient-details';
import { useSelector } from 'react-redux';
import { getIngredientsSelector } from '../../../../services/ingredients-list/selectors';
import { TIngredientsListState } from '../../../../services/ingredients-list/reducer';

type IngredientsByTypeModel = Record<string, IngredientModel[]>;

const Ingredients = () => {
  const { ingredients, isLoading, error } = useSelector<TIngredientsListState, TIngredientsListState>(getIngredientsSelector);

  const [ingredient, setIngredient] = useState<IngredientModel | null>(null);

  const handleShowClick = (model: IngredientModel) => setIngredient(model);
  const handleCloseClick = () => setIngredient(null);

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
            <Group text={description} items={ingredientsByType[type] ?? []} onItemClick={handleShowClick} />
          </li>
        ))}
      </ul>
      {ingredient && (
        <Modal title='Детали ингредиента' onCloseClick={handleCloseClick}>
          <IngredientDetails data={ingredient} />
        </Modal>
      )}
    </>
  );
};

export default Ingredients;
