import type { Middleware, MiddlewareAPI } from 'redux';

import type { TApplicationActions, AppDispatch, RootState } from '../';
import { connectError, send, disconnect, getMessage, WEB_SOCKET_CONNECT, WEB_SOCKET_SEND } from './actions';
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
        webSocket.onerror = () => {
          dispatch(connectError('Ошибка WebSocket соединения'));
        };

        webSocket.onmessage = (event) => {
          const ordersList: TOrdersListModel = JSON.parse(event.data);
          dispatch(getMessage(ordersList));
        };

        webSocket.onclose = () => {
          dispatch(disconnect());
        };

        if (action.type === WEB_SOCKET_SEND) {
          webSocket.send(JSON.stringify(action.payload));
        }
      }

      next(action);
    };
  }) as Middleware;
};
