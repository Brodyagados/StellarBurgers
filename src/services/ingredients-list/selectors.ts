import { RootState } from '..';

export const getIngredientsSelector = (store: RootState) => store.ingredientsList;

export const getIngredientByIdSelector = (store: RootState, id: string) =>
  store.ingredientsList.ingredients.find(({ _id }) => _id === id);
