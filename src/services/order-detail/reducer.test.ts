import { TOrderModel } from '../../models';
import {
  CLEAR_ORDER,
  GET_ORDER_ERROR,
  GET_ORDER_REQUEST,
  GET_ORDER_SUCCESS,
  SUBMIT_ORDER_ERROR,
  SUBMIT_ORDER_REQUEST,
  SUBMIT_ORDER_SUCCESS
} from './actions';
import { orderDetailReducer, initialState, TOrderDetailActions } from './reducer';

const errorMessage = 'Ошибка';
const orderNumber = 123;
const order: TOrderModel = {
  _id: '123',
  status: 'done',
  name: 'Заказ',
  number: 1,
  createdAt: '',
  updatedAt: '',
  ingredients: []
};

describe('Редьюсер страницы "Лента заказов"', () => {
  it('инициализация хранилища', () => {
    expect(orderDetailReducer(undefined, { type: '' } as unknown as TOrderDetailActions)).toEqual(initialState);
  });

  it('начало отправки сформированного заказа', () => {
    expect(orderDetailReducer(initialState, { type: SUBMIT_ORDER_REQUEST })).toEqual({ ...initialState, isLoading: true });
  });

  it('успешная отправка сформированного заказа', () => {
    expect(orderDetailReducer(initialState, { type: SUBMIT_ORDER_SUCCESS, payload: orderNumber })).toEqual({
      ...initialState,
      number: orderNumber
    });
  });

  it('ошибка отправки сформированного заказа', () => {
    expect(orderDetailReducer(initialState, { type: SUBMIT_ORDER_ERROR, payload: errorMessage })).toEqual({
      ...initialState,
      error: errorMessage
    });
  });

  it('начало получения информации о заказе', () => {
    expect(orderDetailReducer(initialState, { type: GET_ORDER_REQUEST })).toEqual({ ...initialState, isLoading: true });
  });

  it('успешное получение информации о заказе', () => {
    expect(orderDetailReducer(initialState, { type: GET_ORDER_SUCCESS, payload: order })).toEqual({
      ...initialState,
      order
    });
  });

  it('ошибка получения информации о заказе', () => {
    expect(orderDetailReducer(initialState, { type: GET_ORDER_ERROR, payload: errorMessage })).toEqual({
      ...initialState,
      error: errorMessage
    });
  });

  it('удаление информации о заказе', () => {
    expect(orderDetailReducer({ ...initialState, order }, { type: CLEAR_ORDER })).toEqual(initialState);
  });
});
