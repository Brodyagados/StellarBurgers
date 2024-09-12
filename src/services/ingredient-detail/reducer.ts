import { TBaseReducerAction } from '..';
import { IngredientModel } from '../../models';

type TInitialState = {
  ingredient: IngredientModel | null;
};

const initialState: TInitialState = {
  ingredient: null
};

export const ingredientDetailReducer = (state = initialState, action: TBaseReducerAction) => {
  return state;
};
