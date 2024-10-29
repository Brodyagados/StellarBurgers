import { Dispatch, UnknownAction } from 'redux';
import { TIngredientsListModel } from '../../models';
import apiClient from '../../utils/api-client';

export const GET_INGREDIENTS_LIST_REQUEST: 'INGREDIENT_LIST/GET_INGREDIENTS_LIST_REQUEST' =
  'INGREDIENT_LIST/GET_INGREDIENTS_LIST_REQUEST';
export const GET_INGREDIENTS_LIST_SUCCESS: 'INGREDIENT_LIST/GET_INGREDIENTS_LIST_SUCCESS' =
  'INGREDIENT_LIST/GET_INGREDIENTS_LIST_SUCCESS';
export const GET_INGREDIENTS_LIST_ERROR: 'INGREDIENT_LIST/GET_INGREDIENTS_LIST_ERROR' =
  'INGREDIENT_LIST/GET_INGREDIENTS_LIST_ERROR';
export const ADD_INGREDIENT_COUNT: 'INGREDIENT_LIST/ADD_INGREDIENT_COUNT' = 'INGREDIENT_LIST/ADD_INGREDIENT_COUNT';

export const getIngredientsList = () => async (dispatch: Dispatch<UnknownAction>) => {
  dispatch({ type: GET_INGREDIENTS_LIST_REQUEST });

  try {
    const data = await apiClient.request<TIngredientsListModel>('/ingredients');
    return dispatch({
      type: GET_INGREDIENTS_LIST_SUCCESS,
      payload: data.data.map((item) => ({ ...item, count: 0 }))
    });
  } catch (e) {
    return dispatch({
      type: GET_INGREDIENTS_LIST_ERROR,
      payload: (e as Error).message
    });
  }
};

export const addIngredientCount = (id: string, count: number) => ({
  type: ADD_INGREDIENT_COUNT,
  payload: { id, count }
});
