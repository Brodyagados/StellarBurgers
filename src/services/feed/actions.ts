import { TOrdersListModel } from '../../models';

export const FEED_CONNECT: 'FEED/CONNECT' = 'FEED/CONNECT';
export const FEED_CONNECT_ERROR: 'FEED/CONNECT_ERROR' = 'FEED/CONNECT_ERROR';
export const FEED_MESSAGE: 'FEED/MESSAGE' = 'FEED/MESSAGE';
export const FEED_CLOSE: 'FEED/CLOSE' = 'FEED/CLOSE';
export const FEED_DISCONNECT: 'FEED/DISCONNECT' = 'FEED/DISCONNECT';
export const FEED_SEND: 'FEED/SEND' = 'FEED/SEND';

export const connect = (wsUrl: string) => ({ type: FEED_CONNECT, payload: wsUrl });
export const connectError = (errorMessage: string) => ({ type: FEED_CONNECT_ERROR, payload: errorMessage });
export const getMessage = (data: TOrdersListModel) => ({ type: FEED_MESSAGE, payload: data });
export const close = () => ({ type: FEED_CLOSE });
export const disconnect = () => ({ type: FEED_DISCONNECT });
export const send = (message: unknown) => ({ type: FEED_SEND, payload: message });
