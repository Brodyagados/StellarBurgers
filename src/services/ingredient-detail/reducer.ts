import { IngredientModel } from '../../models';
import { REMOVE_INGREDIENT_DETAIL, SET_INGREDIENT_DETAIL } from './actions';

type TAction = TSetAction | TRemoveAction;

type TSetAction = {
  type: typeof SET_INGREDIENT_DETAIL;
  payload: IngredientModel;
};

type TRemoveAction = {
  type: typeof REMOVE_INGREDIENT_DETAIL;
};

type TIngredientDetailState = {
  ingredient: IngredientModel | null;
};

const initialState: TIngredientDetailState = {
  ingredient: null
};

export const ingredientDetailReducer = (state = initialState, action: TAction) => {
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
