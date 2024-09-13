import { Dispatch, UnknownAction } from 'redux';
import { OrderDetailModel } from '../../models';
import apiClient from '../../utils/api-client';

export const SUBMIT_ORDER_LOADING = 'SUBMIT_ORDER_LOADING';
export const SUBMIT_ORDER_SUCCESS = 'SUBMIT_ORDER_SUCCESS';
export const SUBMIT_ORDER_ERROR = 'SUBMIT_ORDER_ERROR';

export const submitOrder = (ingredients: string[]) => async (dispatch: Dispatch<UnknownAction>) => {
  dispatch({ type: SUBMIT_ORDER_LOADING });

  try {
    const data = await apiClient.request<OrderDetailModel>('/orders', { method: 'POST', body: JSON.stringify({ ingredients }) });
    dispatch({
      type: SUBMIT_ORDER_SUCCESS,
      payload: data.order.number
    });
  } catch (e) {
    return dispatch({
      type: SUBMIT_ORDER_ERROR,
      payload: (e as Error).message
    });
  }
};
