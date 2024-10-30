import { TOrderDetailModel } from '../../models';
import apiClient from '../../utils/api-client';
import { getIngredientsList } from '../ingredients-list/actions';
import { AppDispatch } from '..';

export const SUBMIT_ORDER_REQUEST: 'ORDER_DETAIL/SUBMIT_ORDER_REQUEST' = 'ORDER_DETAIL/SUBMIT_ORDER_REQUEST';
export const SUBMIT_ORDER_SUCCESS: 'ORDER_DETAIL/SUBMIT_ORDER_SUCCESS' = 'ORDER_DETAIL/SUBMIT_ORDER_SUCCESS';
export const SUBMIT_ORDER_ERROR: 'ORDER_DETAIL/SUBMIT_ORDER_ERROR' = 'ORDER_DETAIL/SUBMIT_ORDER_ERROR';

export const submitOrder = (ingredients: string[]) => async (dispatch: AppDispatch) => {
  dispatch({ type: SUBMIT_ORDER_REQUEST });

  try {
    const data = await apiClient.request<TOrderDetailModel>('/orders', { method: 'POST', body: JSON.stringify({ ingredients }) });
    dispatch({
      type: SUBMIT_ORDER_SUCCESS,
      payload: data.order.number
    });

    dispatch(getIngredientsList());
  } catch (e) {
    return dispatch({
      type: SUBMIT_ORDER_ERROR,
      payload: (e as Error).message
    });
  }
};
