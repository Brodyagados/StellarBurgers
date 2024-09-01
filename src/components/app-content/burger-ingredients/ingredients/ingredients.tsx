import styles from './ingredients.module.css';
import { useMemo, useState } from 'react';
import { getIngredientTypeDataList } from '../../../../utils/constants';
import { Group } from './group';
import { IngredientModel } from '../../../../models';
import { Modal } from '../../../modal';
import { IngredientDetails } from '../ingredient-details';

type IngredientsByTypeModel = Record<string, IngredientModel[]>;

type IngredientsProps = {
  data: IngredientModel[];
};

const Ingredients = ({ data }: IngredientsProps) => {
  const [ingredient, setIngredient] = useState<IngredientModel | null>(data[0]);

  const handleShowClick = (model: IngredientModel) => setIngredient(model);
  const handleCloseClick = () => setIngredient(null);

  const ingredientsByType = useMemo(
    () =>
      data.reduce<IngredientsByTypeModel>(
        (result, currentValue) => ({
          ...result,
          [currentValue.type]: result[currentValue.type] ? [...result[currentValue.type], currentValue] : [currentValue]
        }),
        {}
      ),
    [data]
  );

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
