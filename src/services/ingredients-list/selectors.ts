import { RootState } from '..';
import { TIngredientModel } from '../../models';

export const getIngredientsSelector = (store: RootState) => store.ingredientsList;

export const getIngredientByIdSelector = (store: RootState, id: string) =>
  store.ingredientsList.ingredients.find(({ _id }) => _id === id);

export const getIngredientsByIdsSelector = (store: RootState, ids: TIngredientModel['_id'][]) =>
  ids.reduce((result: TIngredientModel[], id) => {
    const ingredient = store.ingredientsList.uniqueIngredients.get(id);

    if (ingredient) {
      return [...result, ingredient];
    }

    return result;
  }, []);
