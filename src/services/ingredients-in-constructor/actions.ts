import { TConstructorIngredientModel, TIngredientModel } from '../../models';
import { v4 as uuid4 } from 'uuid';

export const ADD_BUN_IN_CONSTRUCTOR = 'INGREDIENT_IN_CONSTRUCTOR/ADD_BUN_IN_CONSTRUCTOR';
export const ADD_INGREDIENT_IN_CONSTRUCTOR = 'INGREDIENT_IN_CONSTRUCTOR/ADD_INGREDIENT_IN_CONSTRUCTOR';
export const REMOVE_INGREDIENT_FROM_CONSTRUCTOR = 'INGREDIENT_IN_CONSTRUCTOR/REMOVE_INGREDIENT_FROM_CONSTRUCTOR';
export const SET_INGREDIENTS_IN_CONSTRUCTOR = 'INGREDIENT_IN_CONSTRUCTOR/SET_INGREDIENTS_IN_CONSTRUCTOR';
export const CLEAR_INGREDIENTS_IN_CONSTRUCTOR = 'INGREDIENT_IN_CONSTRUCTOR/CLEAR_INGREDIENTS_IN_CONSTRUCTOR';

export const addBunInConstructor = (bun: TIngredientModel) => ({
  type: ADD_BUN_IN_CONSTRUCTOR,
  payload: bun
});

export const addIngredientInConstructor = (ingredient: TIngredientModel) => ({
  type: ADD_INGREDIENT_IN_CONSTRUCTOR,
  payload: { ...ingredient, uniqueId: uuid4() }
});

export const removeIngredientInConstructor = (uniqueId: string) => ({
  type: REMOVE_INGREDIENT_FROM_CONSTRUCTOR,
  payload: uniqueId
});

export const setIngredientsInConstructor = (ingredients: TConstructorIngredientModel[]) => ({
  type: SET_INGREDIENTS_IN_CONSTRUCTOR,
  payload: ingredients
});

export const clearIngredientsInConstructor = () => ({
  type: CLEAR_INGREDIENTS_IN_CONSTRUCTOR
});
