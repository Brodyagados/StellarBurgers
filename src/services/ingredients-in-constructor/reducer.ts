import { TBaseReducerAction } from '..';
import { IngredientModel } from '../../models';

type TInitialState = {
  ingredients: IngredientModel[];
};

const initialState: TInitialState = {
  ingredients: []
};

export const ingredientsInConstructorReducer = (state = initialState, action: TBaseReducerAction) => {
  return state;
};
