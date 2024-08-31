import styles from './ingredients.module.css';
import { useMemo } from 'react';
import { getIngredientTypeDataList } from '../../../../utils/constants';
import { Group } from './Group';
import { IngredientModel } from '../../../../models';

type IngredientsByTypeModel = Record<string, IngredientModel[]>;

type IngredientsProps = {
  data: IngredientModel[];
};

const Ingredients = ({ data }: IngredientsProps) => {
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
    <ul className={`${styles.scrollableList} mt-10`}>
      {getIngredientTypeDataList().map(({ value: type, description }, index) => (
        <li key={index}>
          <Group text={description} items={ingredientsByType[type] ?? []} />
        </li>
      ))}
    </ul>
  );
};

export default Ingredients;
