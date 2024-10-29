import { TIngredientModel } from '../../models';
import {
  ADD_INGREDIENT_COUNT,
  GET_INGREDIENTS_LIST_ERROR,
  GET_INGREDIENTS_LIST_REQUEST,
  GET_INGREDIENTS_LIST_SUCCESS
} from './actions';

type TAction = TLoadingAction | TSuccessAction | TErrorAction | TAddAction;

type TLoadingAction = {
  type: typeof GET_INGREDIENTS_LIST_REQUEST;
};

type TSuccessAction = {
  type: typeof GET_INGREDIENTS_LIST_SUCCESS;
  payload: TIngredientModel[];
};

type TErrorAction = {
  type: typeof GET_INGREDIENTS_LIST_ERROR;
  payload: string;
};

type TAddAction = {
  type: typeof ADD_INGREDIENT_COUNT;
  payload: {
    id: string;
    count: number;
  };
};

export type TIngredientsListState = {
  ingredients: TIngredientModel[];
  isLoading: boolean;
  error: string | null;
};

const initialState: TIngredientsListState = {
  ingredients: [],
  isLoading: false,
  error: null
};

export const ingredientsListReducer = (state = initialState, action: TAction) => {
  switch (action.type) {
    case GET_INGREDIENTS_LIST_REQUEST: {
      return {
        ...state,
        isLoading: true
      };
    }
    case GET_INGREDIENTS_LIST_SUCCESS: {
      return {
        ...state,
        ingredients: action.payload,
        isLoading: false,
        error: null
      };
    }
    case GET_INGREDIENTS_LIST_ERROR: {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        ingredients: []
      };
    }
    case ADD_INGREDIENT_COUNT: {
      return {
        ...state,
        ingredients: state.ingredients.map((item) =>
          item._id === action.payload.id ? { ...item, count: item.count + action.payload.count } : item
        )
      };
    }
    default: {
      return state;
    }
  }
};
