import { Dispatch, UnknownAction } from 'redux';
import { OrderDetailModel } from '../../models';
import apiClient from '../../utils/api-client';

export const SUBMIT_ORDER_LOADING = 'SUBMIT_ORDER_LOADING';
export const SUBMIT_ORDER_SUCCESS = 'SUBMIT_ORDER_SUCCESS';
export const SUBMIT_ORDER_ERROR = 'SUBMIT_ORDER_ERROR';

export const submitOrder = (ingredients: string[]) => (dispatch: Dispatch<UnknownAction>) => {
  dispatch({ type: SUBMIT_ORDER_LOADING });

  return apiClient
    .request<OrderDetailModel>('/orders', { method: 'POST', body: JSON.stringify({ ingredients }) })
    .then((data) => {
      dispatch({
        type: SUBMIT_ORDER_SUCCESS,
        payload: data.order.number
      });
    })
    .catch((e: Error) =>
      dispatch({
        type: SUBMIT_ORDER_ERROR,
        payload: e.message
      })
    );
};
