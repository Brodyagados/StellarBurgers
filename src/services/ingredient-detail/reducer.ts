import { TIngredientModel } from '../../models';
import { REMOVE_INGREDIENT_DETAIL, SET_INGREDIENT_DETAIL } from './actions';

export type TIngredientDetailActions = TSetAction | TRemoveAction;

type TSetAction = {
  type: typeof SET_INGREDIENT_DETAIL;
  payload: TIngredientModel;
};

type TRemoveAction = {
  type: typeof REMOVE_INGREDIENT_DETAIL;
};

type TIngredientDetailState = {
  ingredient: TIngredientModel | null;
};

export const initialState: TIngredientDetailState = {
  ingredient: null
};

export const ingredientDetailReducer = (state = initialState, action: TIngredientDetailActions) => {
  switch (action.type) {
    case SET_INGREDIENT_DETAIL: {
      return {
        ...state,
        ingredient: action.payload
      };
    }
    case REMOVE_INGREDIENT_DETAIL: {
      return {
        ...state,
        ingredient: null
      };
    }
    default: {
      return state;
    }
  }
};
