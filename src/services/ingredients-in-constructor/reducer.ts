import { IngredientModel } from '../../models';
import { REMOVE_INGREDIENT_FROM_CONSTRUCTOR, ADD_BUN_IN_CONSTRUCTOR, ADD_INGREDIENT_IN_CONSTRUCTOR } from './actions';

type TAction = TAddBunAction | TAddIngredientAction | TRemoveAction;

type TAddBunAction = {
  type: typeof ADD_BUN_IN_CONSTRUCTOR;
  payload: IngredientModel;
};

type TAddIngredientAction = {
  type: typeof ADD_INGREDIENT_IN_CONSTRUCTOR;
  payload: IngredientModel;
};

type TRemoveAction = {
  type: typeof REMOVE_INGREDIENT_FROM_CONSTRUCTOR;
  payload: string;
};

export type TIngredientsInConstructorState = {
  bun: IngredientModel | null;
  ingredients: IngredientModel[];
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
        ingredient: state.ingredients.filter((item) => item._id !== action.payload)
      };
    }
    default: {
      return state;
    }
  }
};
