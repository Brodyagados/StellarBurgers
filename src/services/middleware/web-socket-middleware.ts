import type { Middleware, MiddlewareAPI } from 'redux';

import type { TApplicationActions, AppDispatch, RootState } from '../';
import { TOrdersListModel } from '../../models';
import { FEED_CLOSE, FEED_CONNECT, FEED_CONNECT_ERROR, FEED_DISCONNECT, FEED_MESSAGE, FEED_SEND } from '../feed/actions';

type TWebSocketsActions = {
  connect: typeof FEED_CONNECT;
  onError: typeof FEED_CONNECT_ERROR;
  onMessage: typeof FEED_MESSAGE;
  onClose: typeof FEED_CLOSE;
  disconnect: typeof FEED_DISCONNECT;
  sendMessage?: typeof FEED_SEND;
};

export const webSocketMiddleware = (webSocketActions: TWebSocketsActions): Middleware => {
  return ((store: MiddlewareAPI<AppDispatch, RootState>) => {
    const { connect, disconnect, onError, onMessage, onClose, sendMessage } = webSocketActions;

    let webSocket: WebSocket | null = null;

    return (next) => (action: TApplicationActions) => {
      const { dispatch } = store;

      if (action.type === connect) {
        webSocket = new WebSocket(action.payload);
      }

      if (webSocket) {
        webSocket.onerror = () => {
          dispatch({ type: onError, payload: 'Ошибка WebSocket соединения' });
        };

        webSocket.onmessage = (event) => {
          const message: TOrdersListModel = JSON.parse(event.data);
          dispatch({ type: onMessage, payload: message });
        };

        webSocket.onclose = () => {
          dispatch({ type: onClose });
        };

        if (action.type === sendMessage) {
          webSocket.send(JSON.stringify(action.payload));
        }
      }

      next(action);
    };
  }) as Middleware;
};
