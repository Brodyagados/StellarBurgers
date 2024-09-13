import { Dispatch, UnknownAction } from 'redux';
import { IngredientsListModel } from '../../models';
import apiClient from '../../utils/api-client';

export const GET_INGREDIENTS_LIST_LOADING = 'GET_INGREDIENTS_LIST_LOADING';
export const GET_INGREDIENTS_LIST_SUCCESS = 'GET_INGREDIENTS_LIST_SUCCESS';
export const GET_INGREDIENTS_LIST_ERROR = 'GET_INGREDIENTS_LIST_ERROR';
export const ADD_INGREDIENT_COUNT = 'ADD_INGREDIENT_COUNT';

export const getIngredientsList = () => async (dispatch: Dispatch<UnknownAction>) => {
  dispatch({ type: GET_INGREDIENTS_LIST_LOADING });

  try {
    const data = await apiClient.request<IngredientsListModel>('/ingredients');
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
