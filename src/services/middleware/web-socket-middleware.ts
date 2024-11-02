import type { Middleware, MiddlewareAPI } from 'redux';

import type { TApplicationActions, AppDispatch, RootState } from '../';
import { TOrdersListModel } from '../../models';
import { FEED_CLOSE, FEED_CONNECT, FEED_CONNECT_ERROR, FEED_DISCONNECT, FEED_MESSAGE, FEED_SEND } from '../feed/actions';
import {
  PROFILE_ORDERS_CLOSE,
  PROFILE_ORDERS_CONNECT,
  PROFILE_ORDERS_CONNECT_ERROR,
  PROFILE_ORDERS_DISCONNECT,
  PROFILE_ORDERS_MESSAGE,
  PROFILE_ORDERS_SEND
} from '../profile-orders/actions';
import { AccountApi } from '../../api';

type TWebSocketsActions = {
  connect: typeof FEED_CONNECT | typeof PROFILE_ORDERS_CONNECT;
  onError: typeof FEED_CONNECT_ERROR | typeof PROFILE_ORDERS_CONNECT_ERROR;
  onMessage: typeof FEED_MESSAGE | typeof PROFILE_ORDERS_MESSAGE;
  onClose: typeof FEED_CLOSE | typeof PROFILE_ORDERS_CLOSE;
  disconnect: typeof FEED_DISCONNECT | typeof PROFILE_ORDERS_DISCONNECT;
  sendMessage?: typeof FEED_SEND | typeof PROFILE_ORDERS_SEND;
};

const RECONNECT_MS = 3000;

export const webSocketMiddleware = (webSocketActions: TWebSocketsActions, isAuth?: boolean): Middleware => {
  return ((store: MiddlewareAPI<AppDispatch, RootState>) => {
    const { connect, disconnect, onError, onMessage, onClose, sendMessage } = webSocketActions;

    let webSocket: WebSocket | null = null;
    let isConnected = false;
    let url = '';
    let reconnectTimer = 0;

    return (next) => (action: TApplicationActions) => {
      const { dispatch } = store;

      if (action.type === connect) {
        webSocket = new WebSocket(action.payload);
        isConnected = true;
        url = action.payload;
      }

      if (webSocket) {
        webSocket.onerror = () => {
          dispatch({ type: onError, payload: 'Ошибка WebSocket соединения' });
        };

        webSocket.onmessage = (event) => {
          const message = JSON.parse(event.data);

          if (isAuth && message.message === 'Invalid or missing token') {
            AccountApi.refreshToken()
              .then((refreshData) => {
                dispatch({
                  type: connect,
                  payload: `${url}?token=${refreshData.accessToken?.replace('Bearer ', '')}`
                });
              })
              .catch((error) => {
                dispatch({ type: onError, payload: (error as Error).message });
              });

            dispatch({ type: disconnect });

            return;
          }

          dispatch({ type: onMessage, payload: message as TOrdersListModel });
        };

        webSocket.onclose = () => {
          dispatch({ type: onClose });

          if (isConnected) {
            reconnectTimer = setTimeout(() => {
              dispatch({ type: connect, payload: url });
            }, RECONNECT_MS);
          }
        };

        if (action.type === sendMessage) {
          webSocket.send(JSON.stringify(action.payload));
        }

        if (action.type === disconnect) {
          webSocket.close();
          webSocket = null;
          isConnected = false;
          clearTimeout(reconnectTimer);
          reconnectTimer = 0;
        }
      }

      next(action);
    };
  }) as Middleware;
};
