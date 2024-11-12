import { TOrdersListModel } from '../../models';
import { close, connectError, getMessage } from './actions';
import { feedReducer, initialState, TFeedActions } from './reducer';

const connectErrorMessage = 'Ошибка соединения';
const ordersList: TOrdersListModel = {
  success: true,
  orders: [
    {
      _id: '67221b32b27b06001c3e520a',
      ingredients: ['643d69a5c3f7b9001cfa093c', '643d69a5c3f7b9001cfa0940', '643d69a5c3f7b9001cfa093c'],
      status: 'done',
      name: 'Краторный метеоритный бургер',
      createdAt: '2024-10-30T11:40:34.215Z',
      updatedAt: '2024-10-30T11:40:35.239Z',
      number: 58134
    }
  ],
  total: 1,
  totalToday: 1
};

describe('Редьюсер страницы "Лента заказов"', () => {
  it('инициализация хранилища', () => {
    expect(feedReducer(undefined, { type: '' } as unknown as TFeedActions)).toEqual(initialState);
  });

  it('ошибка при подключении к WebSocket', () => {
    expect(feedReducer(undefined, connectError(connectErrorMessage))).toEqual({
      ...initialState,
      error: connectErrorMessage
    });
  });

  it('закрытие соединения WebSocket', () => {
    expect(feedReducer(initialState, close())).toEqual(initialState);
  });

  it('получение данных по WebSocket', () => {
    expect(feedReducer(initialState, getMessage(ordersList))).toEqual({
      ...initialState,
      ordersList: ordersList
    });
  });
});
