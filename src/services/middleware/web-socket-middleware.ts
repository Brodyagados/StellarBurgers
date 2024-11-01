import type { Middleware, MiddlewareAPI } from 'redux';

import type { TApplicationActions, AppDispatch, RootState } from '../';
import { connectError, connectSuccess, disconnect, getMessage, WEB_SOCKET_CONNECT } from './actions';
import { TOrdersListModel } from '../../models';

export const webSocketMiddleware = (): Middleware => {
  return ((store: MiddlewareAPI<AppDispatch, RootState>) => {
    let webSocket: WebSocket | null = null;

    return (next) => (action: TApplicationActions) => {
      const { dispatch } = store;

      if (action.type === WEB_SOCKET_CONNECT) {
        webSocket = new WebSocket(action.payload);
      }

      if (webSocket) {
        webSocket.onopen = () => {
          dispatch(connectSuccess());
        };

        webSocket.onerror = () => {
          dispatch(connectError('Ошибка WebSocket соединения'));
        };

        webSocket.onmessage = (event) => {
          const ordersList: TOrdersListModel = JSON.parse(event.data);
          console.log(ordersList);
          dispatch(getMessage(ordersList));
        };

        webSocket.onclose = () => {
          dispatch(disconnect());
        };
      }

      next(action);
    };
  }) as Middleware;
};
