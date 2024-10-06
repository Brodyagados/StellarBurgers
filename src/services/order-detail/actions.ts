import { Dispatch, UnknownAction } from 'redux';
import { OrderDetailModel } from '../../models';
import apiClient from '../../utils/api-client';
import { getIngredientsList } from '../ingredients-list/actions';

export const SUBMIT_ORDER_REQUEST = 'ORDER_DETAIL/SUBMIT_ORDER_REQUEST';
export const SUBMIT_ORDER_SUCCESS = 'ORDER_DETAIL/SUBMIT_ORDER_SUCCESS';
export const SUBMIT_ORDER_ERROR = 'ORDER_DETAIL/SUBMIT_ORDER_ERROR';

export const submitOrder = (ingredients: string[]) => async (dispatch: Dispatch<UnknownAction>) => {
  dispatch({ type: SUBMIT_ORDER_REQUEST });

  try {
    const data = await apiClient.request<OrderDetailModel>('/orders', { method: 'POST', body: JSON.stringify({ ingredients }) });
    dispatch({
      type: SUBMIT_ORDER_SUCCESS,
      payload: data.order.number
    });

    // TODO: доработать типизацию на 5 спринте!!!
    //@ts-ignore
    dispatch(getIngredientsList());
  } catch (e) {
    return dispatch({
      type: SUBMIT_ORDER_ERROR,
      payload: (e as Error).message
    });
  }
};
