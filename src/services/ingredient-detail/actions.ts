import { TIngredientModel } from '../../models';

export const SET_INGREDIENT_DETAIL = 'INGREDIENT_DETAIL/SET_INGREDIENT_DETAIL';
export const REMOVE_INGREDIENT_DETAIL = 'INGREDIENT_DETAIL/REMOVE_INGREDIENT_DETAIL';

export const setIngredientDetail = (ingredient: TIngredientModel) => ({
  type: SET_INGREDIENT_DETAIL,
  payload: ingredient
});

export const removeIngredientDetail = () => ({
  type: REMOVE_INGREDIENT_DETAIL
});
