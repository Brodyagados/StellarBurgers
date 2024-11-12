import { TOrdersListModel } from '../../models';
import {
  PROFILE_ORDERS_CLOSE,
  PROFILE_ORDERS_CONNECT,
  PROFILE_ORDERS_CONNECT_ERROR,
  PROFILE_ORDERS_DISCONNECT,
  PROFILE_ORDERS_MESSAGE,
  PROFILE_ORDERS_SEND
} from './actions';

export type TProfileOrdersActions =
  | TProfileOrdersConnectAction
  | TProfileOrdersConnectErrorAction
  | TProfileOrdersMessageAction
  | TProfileOrdersCloseAction
  | TProfileOrdersDisconnectAction
  | TProfileOrdersSendAction;

type TProfileOrdersConnectAction = {
  type: typeof PROFILE_ORDERS_CONNECT;
  payload: string;
};

type TProfileOrdersConnectErrorAction = {
  type: typeof PROFILE_ORDERS_CONNECT_ERROR;
  payload: string;
};

type TProfileOrdersMessageAction = {
  type: typeof PROFILE_ORDERS_MESSAGE;
  payload: TOrdersListModel;
};

type TProfileOrdersCloseAction = {
  type: typeof PROFILE_ORDERS_CLOSE;
};

type TProfileOrdersDisconnectAction = {
  type: typeof PROFILE_ORDERS_DISCONNECT;
};

type TProfileOrdersSendAction = {
  type: typeof PROFILE_ORDERS_SEND;
  payload: unknown;
};

type TProfileOrdersState = {
  ordersList: TOrdersListModel | null;
  error: string | null;
};

export const initialState: TProfileOrdersState = {
  ordersList: null,
  error: null
};

export const profileOrdersReducer = (state = initialState, action: TProfileOrdersActions) => {
  switch (action.type) {
    case PROFILE_ORDERS_CONNECT_ERROR:
      return {
        ...state,
        error: action.payload
      };

    case PROFILE_ORDERS_CLOSE:
      return {
        ...state,
        error: null
      };

    case PROFILE_ORDERS_MESSAGE:
      return {
        ...state,
        error: null,
        ordersList: action.payload
      };

    default:
      return state;
  }
};
