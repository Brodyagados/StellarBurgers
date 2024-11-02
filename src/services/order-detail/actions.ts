import { TOrderDetailModel, TOrdersListModel } from '../../models';
import apiClient from '../../utils/api-client';
import { getIngredientsList } from '../ingredients-list/actions';
import { AppDispatch } from '..';

export const SUBMIT_ORDER_REQUEST: 'ORDER_DETAIL/SUBMIT_ORDER_REQUEST' = 'ORDER_DETAIL/SUBMIT_ORDER_REQUEST';
export const SUBMIT_ORDER_SUCCESS: 'ORDER_DETAIL/SUBMIT_ORDER_SUCCESS' = 'ORDER_DETAIL/SUBMIT_ORDER_SUCCESS';
export const SUBMIT_ORDER_ERROR: 'ORDER_DETAIL/SUBMIT_ORDER_ERROR' = 'ORDER_DETAIL/SUBMIT_ORDER_ERROR';

export const GET_ORDER_REQUEST: 'ORDER_DETAIL/GET_ORDER_REQUEST' = 'ORDER_DETAIL/GET_ORDER_REQUEST';
export const GET_ORDER_SUCCESS: 'ORDER_DETAIL/GET_ORDER_SUCCESS' = 'ORDER_DETAIL/GET_ORDER_SUCCESS';
export const GET_ORDER_ERROR: 'ORDER_DETAIL/GET_ORDER_ERROR' = 'ORDER_DETAIL/GET_ORDER_ERROR';
export const CLEAR_ORDER: 'ORDER_DETAIL/CLEAR_ORDER' = 'ORDER_DETAIL/CLEAR_ORDER';

export const submitOrder = (ingredients: string[]) => async (dispatch: AppDispatch) => {
  dispatch({ type: SUBMIT_ORDER_REQUEST });

  try {
    const data = await apiClient.requestWithRefresh<TOrderDetailModel>('/orders', {
      method: 'POST',
      body: JSON.stringify({ ingredients })
    });
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

export const getOrderInformation = (number: number) => async (dispatch: AppDispatch) => {
  dispatch({ type: GET_ORDER_REQUEST });

  try {
    const data = await apiClient.request<TOrdersListModel>(`/orders/${number}`);
    dispatch({
      type: GET_ORDER_SUCCESS,
      payload: data.orders[0]
    });
  } catch (e) {
    return dispatch({
      type: GET_ORDER_ERROR,
      payload: (e as Error).message
    });
  }
};

export const clearOrderInfromation = () => ({ type: CLEAR_ORDER });
