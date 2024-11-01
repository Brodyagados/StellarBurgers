import { TOrdersListModel } from '../../models';

export const WEB_SOCKET_CONNECT: 'WEB_SOCKET/CONNECT' = 'WEB_SOCKET/CONNECT';
export const WEB_SOCKET_CONNECT_SUCCESS: 'WEB_SOCKET/CONNECT_SUCCESS' = 'WEB_SOCKET/CONNECT_SUCCESS';
export const WEB_SOCKET_CONNECT_ERROR: 'WEB_SOCKET/CONNECT_ERROR' = 'WEB_SOCKET/CONNECT_ERROR';
export const WEB_SOCKET_MESSAGE: 'WEB_SOCKET/MESSAGE' = 'WEB_SOCKET/MESSAGE';
export const WEB_SOCKET_DISCONNECT: 'WEB_SOCKET/DISCONNECT' = 'WEB_SOCKET/DISCONNECT';

export const connect = (wsUrl: string) => ({ type: WEB_SOCKET_CONNECT, payload: wsUrl });
export const connectSuccess = () => ({ type: WEB_SOCKET_CONNECT_SUCCESS });
export const connectError = (errorMessage: string) => ({ type: WEB_SOCKET_CONNECT_ERROR, payload: errorMessage });
export const getMessage = (data: TOrdersListModel) => ({ type: WEB_SOCKET_MESSAGE, payload: data });
export const disconnect = () => ({ type: WEB_SOCKET_DISCONNECT });
