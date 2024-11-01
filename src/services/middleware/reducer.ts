import { TOrdersListModel } from '../../models';
import {
  WEB_SOCKET_CONNECT,
  WEB_SOCKET_CONNECT_ERROR,
  WEB_SOCKET_DISCONNECT,
  WEB_SOCKET_MESSAGE,
  WEB_SOCKET_SEND
} from './actions';

export type TWebSocketActions =
  | TWebSocketConnectAction
  | TWebSocketConnectErrorAction
  | TWebSocketMessageAction
  | TWebSocketDisconnectAction
  | TWebSocketSendAction;

type TWebSocketConnectAction = {
  type: typeof WEB_SOCKET_CONNECT;
  payload: string;
};

type TWebSocketConnectErrorAction = {
  type: typeof WEB_SOCKET_CONNECT_ERROR;
  payload: string;
};

type TWebSocketMessageAction = {
  type: typeof WEB_SOCKET_MESSAGE;
  payload: TOrdersListModel;
};

type TWebSocketDisconnectAction = {
  type: typeof WEB_SOCKET_DISCONNECT;
};

type TWebSocketSendAction = {
  type: typeof WEB_SOCKET_SEND;
  payload: unknown;
};

type TWebSocketState = {
  wsUrl: string | null;
  isConnected: boolean;
  ordersList: TOrdersListModel | null;
  error: string | null;
};

const initialState: TWebSocketState = {
  wsUrl: null,
  isConnected: false,
  ordersList: null,
  error: null
};

export const webSocketReducer = (state = initialState, action: TWebSocketActions) => {
  switch (action.type) {
    case WEB_SOCKET_CONNECT:
      return {
        ...state,
        wsUrl: action.payload,
        error: null,
        isConnected: true
      };

    case WEB_SOCKET_CONNECT_ERROR:
      return {
        ...state,
        wsUrl: null,
        error: action.payload,
        isConnected: false
      };

    case WEB_SOCKET_DISCONNECT:
      return {
        ...state,
        wsUrl: null,
        error: null,
        isConnected: false
      };

    case WEB_SOCKET_MESSAGE:
      return {
        ...state,
        error: null,
        ordersList: action.payload
      };
    default:
      return state;
  }
};
