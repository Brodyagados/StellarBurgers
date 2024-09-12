import { IngredientModel } from '../../models';

export const SET_INGREDIENT_DETAIL = 'SET_INGREDIENT_DETAIL';
export const REMOVE_INGREDIENT_DETAIL = 'REMOVE_INGREDIENT_DETAIL';

export const setIngredientDetail = (ingredient: IngredientModel) => ({
  type: SET_INGREDIENT_DETAIL,
  payload: ingredient
});

export const removeIngredientDetail = () => ({
  type: REMOVE_INGREDIENT_DETAIL
});