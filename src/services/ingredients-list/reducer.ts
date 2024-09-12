import { IngredientModel } from '../../models';
import { GET_INGREDIENTS_LIST_ERROR, GET_INGREDIENTS_LIST_LOADING, GET_INGREDIENTS_LIST_SUCCESS } from './actions';

type TAction = TLoadingAction | TSuccessAction | TErrorAction;

type TLoadingAction = {
  type: typeof GET_INGREDIENTS_LIST_LOADING;
};

type TSuccessAction = {
  type: typeof GET_INGREDIENTS_LIST_SUCCESS;
  payload: IngredientModel[];
};

type TErrorAction = {
  type: typeof GET_INGREDIENTS_LIST_ERROR;
  payload: string;
};

export type TIngredientsListState = {
  ingredients: IngredientModel[];
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
    case GET_INGREDIENTS_LIST_LOADING: {
      return {
        ...state,
        isLoading: true
      };
    }
    case GET_INGREDIENTS_LIST_SUCCESS: {
      return {
        ...state,
        ingredients: action.payload,
        isLoading: false
      };
    }
    case GET_INGREDIENTS_LIST_ERROR: {
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    }
    default: {
      return state;
    }
  }
};
