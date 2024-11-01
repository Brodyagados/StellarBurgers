import { RootState } from '..';

export const getOrdersListSelector = (store: RootState) => store.webSocket.ordersList;
