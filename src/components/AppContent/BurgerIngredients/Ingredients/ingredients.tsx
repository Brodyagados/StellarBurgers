import { data } from '../../../../utils/data';
import { useMemo } from 'react';
import { getIngredientTypeDataList } from '../../../../utils/constants';
import { Group } from './Group';

export type IngredientModel = {
  _id: string;
  name: string;
  type: string;
  image: string;
  price: number;
};

type IngredientsByTypeModel = Record<string, IngredientModel[]>;

const Ingredients = () => {
  const ingredientsByType = useMemo(
    () =>
      data.reduce<IngredientsByTypeModel>(
        (result, currentValue) => ({
          ...result,
          [currentValue.type]: result[currentValue.type] ? [...result[currentValue.type], currentValue] : [currentValue]
        }),
        {}
      ),
    []
  );

  return (
    <ul className='mt-10'>
      {getIngredientTypeDataList().map(({ value: type, description }, index) => (
        <li key={index}>
          <Group text={description} items={ingredientsByType[type]} />
        </li>
      ))}
    </ul>
  );
};

export default Ingredients;
