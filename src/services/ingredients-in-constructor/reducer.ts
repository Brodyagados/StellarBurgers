import { ConstructorIngredientModel } from '../../models';
import {
  REMOVE_INGREDIENT_FROM_CONSTRUCTOR,
  ADD_BUN_IN_CONSTRUCTOR,
  ADD_INGREDIENT_IN_CONSTRUCTOR,
  SET_INGREDIENTS_IN_CONSTRUCTOR,
  CLEAR_INGREDIENTS_IN_CONSTRUCTOR
} from './actions';

type TAction = TAddBunAction | TAddIngredientAction | TRemoveAction | TSetIngredientsAction | TClearAction;

type TAddBunAction = {
  type: typeof ADD_BUN_IN_CONSTRUCTOR;
  payload: ConstructorIngredientModel;
};

type TAddIngredientAction = {
  type: typeof ADD_INGREDIENT_IN_CONSTRUCTOR;
  payload: ConstructorIngredientModel;
};

type TRemoveAction = {
  type: typeof REMOVE_INGREDIENT_FROM_CONSTRUCTOR;
  payload: string;
};

type TSetIngredientsAction = {
  type: typeof SET_INGREDIENTS_IN_CONSTRUCTOR;
  payload: ConstructorIngredientModel[];
};

type TClearAction = {
  type: typeof CLEAR_INGREDIENTS_IN_CONSTRUCTOR;
};

export type TIngredientsInConstructorState = {
  bun: ConstructorIngredientModel | null;
  ingredients: ConstructorIngredientModel[];
};

const initialState: TIngredientsInConstructorState = {
  bun: null,
  ingredients: []
};

export const ingredientsInConstructorReducer = (state = initialState, action: TAction) => {
  switch (action.type) {
    case ADD_BUN_IN_CONSTRUCTOR: {
      return {
        ...state,
        bun: action.payload
      };
    }
    case ADD_INGREDIENT_IN_CONSTRUCTOR: {
      return {
        ...state,
        ingredients: [...state.ingredients, action.payload]
      };
    }
    case REMOVE_INGREDIENT_FROM_CONSTRUCTOR: {
      return {
        ...state,
        ingredients: state.ingredients.filter((item) => item.uniqueId !== action.payload)
      };
    }
    case SET_INGREDIENTS_IN_CONSTRUCTOR: {
      return {
        ...state,
        ingredients: action.payload
      };
    }
    case CLEAR_INGREDIENTS_IN_CONSTRUCTOR: {
      return {
        ...initialState
      };
    }
    default: {
      return state;
    }
  }
};
