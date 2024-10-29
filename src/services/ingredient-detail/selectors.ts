import { RootState } from '..';

export const getIngredientDetailSelector = (store: RootState) => store.ingredientDetail.ingredient;
