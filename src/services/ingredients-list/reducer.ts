import { TBaseReducerAction } from '..';
import { IngredientModel } from '../../models';

type TInitialState = {
  ingredients: IngredientModel[];
};

const initialState: TInitialState = {
  ingredients: []
};

export const ingredientsListReducer = (state = initialState, action: TBaseReducerAction) => {
  return state;
};
