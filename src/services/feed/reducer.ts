import { TOrdersListModel } from '../../models';
import { FEED_CLOSE, FEED_CONNECT, FEED_CONNECT_ERROR, FEED_DISCONNECT, FEED_MESSAGE, FEED_SEND } from './actions';

export type TFeedActions =
  | TFeedConnectAction
  | TFeedConnectErrorAction
  | TFeedMessageAction
  | TFeedCloseAction
  | TFeedDisconnectAction
  | TFeedSendAction;

type TFeedConnectAction = {
  type: typeof FEED_CONNECT;
  payload: string;
};

type TFeedConnectErrorAction = {
  type: typeof FEED_CONNECT_ERROR;
  payload: string;
};

type TFeedMessageAction = {
  type: typeof FEED_MESSAGE;
  payload: TOrdersListModel;
};

type TFeedCloseAction = {
  type: typeof FEED_CLOSE;
};

type TFeedDisconnectAction = {
  type: typeof FEED_DISCONNECT;
};

type TFeedSendAction = {
  type: typeof FEED_SEND;
  payload: unknown;
};

type TFeedState = {
  ordersList: TOrdersListModel | null;
  error: string | null;
};

export const initialState: TFeedState = {
  ordersList: null,
  error: null
};

export const feedReducer = (state = initialState, action: TFeedActions) => {
  switch (action.type) {
    case FEED_CONNECT_ERROR:
      return {
        ...state,
        error: action.payload
      };

    case FEED_CLOSE:
      return {
        ...state,
        error: null
      };

    case FEED_MESSAGE:
      return {
        ...state,
        error: null,
        ordersList: action.payload
      };
    default:
      return state;
  }
};
