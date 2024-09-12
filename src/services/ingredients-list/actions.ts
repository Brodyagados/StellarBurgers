import { Dispatch, UnknownAction } from 'redux';
import { IngredientModel } from '../../models';
import apiClient from '../../utils/api-client';

export const GET_INGREDIENTS_LIST_LOADING = 'GET_INGREDIENTS_LIST_LOADING';
export const GET_INGREDIENTS_LIST_SUCCESS = 'GET_INGREDIENTS_LIST_SUCCESS';
export const GET_INGREDIENTS_LIST_ERROR = 'GET_INGREDIENTS_LIST_ERROR';

export const getIngredientsList = () => (dispatch: Dispatch<UnknownAction>) => {
  dispatch({ type: GET_INGREDIENTS_LIST_LOADING });

  return apiClient
    .request<IngredientModel[]>('/ingredients')
    .then((data) =>
      dispatch({
        type: GET_INGREDIENTS_LIST_SUCCESS,
        payload: data
      })
    )
    .catch((e: Error) =>
      dispatch({
        type: GET_INGREDIENTS_LIST_ERROR,
        payload: e.message
      })
    );
};
