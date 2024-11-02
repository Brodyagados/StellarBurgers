import { TOrdersListModel } from '../../models';

export const PROFILE_ORDERS_CONNECT: 'PROFILE_ORDERS/CONNECT' = 'PROFILE_ORDERS/CONNECT';
export const PROFILE_ORDERS_CONNECT_ERROR: 'PROFILE_ORDERS/CONNECT_ERROR' = 'PROFILE_ORDERS/CONNECT_ERROR';
export const PROFILE_ORDERS_MESSAGE: 'PROFILE_ORDERS/MESSAGE' = 'PROFILE_ORDERS/MESSAGE';
export const PROFILE_ORDERS_CLOSE: 'PROFILE_ORDERS/CLOSE' = 'PROFILE_ORDERS/CLOSE';
export const PROFILE_ORDERS_DISCONNECT: 'PROFILE_ORDERS/DISCONNECT' = 'PROFILE_ORDERS/DISCONNECT';
export const PROFILE_ORDERS_SEND: 'PROFILE_ORDERS/SEND' = 'PROFILE_ORDERS/SEND';

export const connect = (wsUrl: string) => ({ type: PROFILE_ORDERS_CONNECT, payload: wsUrl });
export const connectError = (errorMessage: string) => ({ type: PROFILE_ORDERS_CONNECT_ERROR, payload: errorMessage });
export const getMessage = (data: TOrdersListModel) => ({ type: PROFILE_ORDERS_MESSAGE, payload: data });
export const close = () => ({ type: PROFILE_ORDERS_CLOSE });
export const disconnect = () => ({ type: PROFILE_ORDERS_DISCONNECT });
export const send = (message: unknown) => ({ type: PROFILE_ORDERS_SEND, payload: message });
